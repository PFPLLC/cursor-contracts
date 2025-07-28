#!/usr/bin/env node

const fs = require('fs');

function generateBadge(overrides) {
  const label = 'Cursor Compliant';
  const message = overrides.join(', ').replace(/_/g, ' ');
  const color = 'brightgreen';

  return `![${label}](https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(message)}-${color})`;
}

try {
  const config = JSON.parse(fs.readFileSync('.cursorrc', 'utf8'));
  const badge = generateBadge(config.override_blocks || []);
  fs.writeFileSync('COMPLIANCE_BADGE.md', badge);
  console.log('✅ Compliance badge written to COMPLIANCE_BADGE.md');
} catch (err) {
  console.error('⚠️ Failed to generate badge:', err.message);
}
