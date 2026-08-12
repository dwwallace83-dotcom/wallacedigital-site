// Regression test for the privacy.html regeneration guard (task 1000084).
// Run: node test_privacy_guard.js
//
// Proves: a routine rebuild that does NOT touch privacy-policy.md leaves
// privacy.html byte-for-byte untouched (the guard firing/blocking), while
// an explicit edit to privacy-policy.md DOES flow through to privacy.html
// on the next build. Restores repo state exactly on exit either way.

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execFileSync } = require("child_process");

const DIR = __dirname;
const mdPath = path.join(DIR, "privacy-policy.md");
const htmlPath = path.join(DIR, "privacy.html");
const hashPath = path.join(DIR, ".privacy-policy.sha256");
const logPath = path.join(DIR, "privacy_regen.log");

function sha256(s) {
  return crypto.createHash("sha256").update(s, "utf8").digest("hex");
}

function runBuild() {
  execFileSync("node", ["build_site.js"], { cwd: DIR, stdio: "pipe" });
}

let failed = false;
function check(label, cond) {
  if (cond) {
    console.log(`PASS: ${label}`);
  } else {
    console.log(`FAIL: ${label}`);
    failed = true;
  }
}

// Snapshot everything so this test can restore exactly, including files
// the guard itself doesn't manage (logPath may not exist yet).
const originalMd = fs.readFileSync(mdPath, "utf8");
const originalHtml = fs.readFileSync(htmlPath, "utf8");
const originalHash = fs.existsSync(hashPath) ? fs.readFileSync(hashPath, "utf8") : null;
const originalLogExisted = fs.existsSync(logPath);
const originalLog = originalLogExisted ? fs.readFileSync(logPath, "utf8") : null;

try {
  // --- Case 1: routine rebuild, no source edit -> guard blocks the write ---
  runBuild();
  const htmlAfterNoop = fs.readFileSync(htmlPath, "utf8");
  check(
    "routine rebuild with unchanged privacy-policy.md leaves privacy.html byte-identical",
    htmlAfterNoop === originalHtml
  );

  // --- Case 2: explicit source edit -> guard allows regeneration ---
  const editedMd = originalMd + "\n<!-- test_privacy_guard.js temporary marker -->\n";
  fs.writeFileSync(mdPath, editedMd, "utf8");
  runBuild();
  const htmlAfterEdit = fs.readFileSync(htmlPath, "utf8");
  const recordedHash = fs.readFileSync(hashPath, "utf8").trim();
  check(
    "explicit privacy-policy.md edit produces a changed privacy.html",
    htmlAfterEdit !== originalHtml
  );
  check(
    "hash file updated to match the edited source after an explicit edit",
    recordedHash === sha256(editedMd)
  );
  check(
    "privacy_regen.log recorded the regeneration",
    fs.existsSync(logPath) && fs.readFileSync(logPath, "utf8").includes("privacy-policy.md content changed")
  );

  // --- Case 3: revert source, rebuild again -> guard blocks the (now again unchanged->changed) transition and restores exactly ---
  fs.writeFileSync(mdPath, originalMd, "utf8");
  runBuild();
  const htmlAfterRevert = fs.readFileSync(htmlPath, "utf8");
  check(
    "reverting privacy-policy.md and rebuilding restores privacy.html to the original content",
    htmlAfterRevert === originalHtml
  );
} finally {
  // Always restore exact original state regardless of pass/fail.
  fs.writeFileSync(mdPath, originalMd, "utf8");
  fs.writeFileSync(htmlPath, originalHtml, "utf8");
  if (originalHash !== null) fs.writeFileSync(hashPath, originalHash, "utf8");
  if (originalLogExisted) {
    fs.writeFileSync(logPath, originalLog, "utf8");
  } else if (fs.existsSync(logPath)) {
    fs.unlinkSync(logPath);
  }
}

if (failed) {
  console.error("\nprivacy guard regression test: FAILED");
  process.exit(1);
} else {
  console.log("\nprivacy guard regression test: all checks passed");
}
