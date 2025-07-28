#!/usr/bin/env node

const fs = require('fs');

function logChangelog() {
  const config = JSON.parse(fs.readFileSync('.cursorrc', 'utf8'));
  const timestamp = new Date().toISOString();
  const logEntry = `- [${timestamp}] Init with overrides: ${config.override_blocks.join(', ')}\n`;
  fs.appendFileSync('CHANGELOG.md', logEntry);
  console.log('📝 Changelog updated.');
}

logChangelog();
