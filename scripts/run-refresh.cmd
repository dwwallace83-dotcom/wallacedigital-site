@echo off
cd /d "%~dp0.."
"C:\Program Files\nodejs\node.exe" scripts\refresh-linkedin-feed.js >> linkedin_feed_refresh_stdout.log 2>&1
