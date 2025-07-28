#!/usr/bin/env node

const fs = require('fs');
const inquirer = require('inquirer');

const overrides = [
  'frontend',
  'api',
  'streamlit',
  'ci_cd',
  'design_system',
  'serverless',
  'analytics_privacy'
];

(async () => {
  const answers = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'selected',
      message: 'Select applicable override blocks:',
      choices: overrides
    }
  ]);

  const config = {
    cursor_project: 'active',
    contract_version: '1.0.0',
    enforce: true,
    override_blocks: answers.selected,
    audit_interval: 10,
    reset_on_failure: true,
    prompt_behavior: {
      logging: 'verbose',
      explain_before_code: true,
      show_checklist: true,
      reasoning_mode: 'architect'
    },
    extensions: {
      testing_required: true,
      style_guide: 'airbnb',
      license: 'MIT'
    }
  };

  fs.writeFileSync('.cursorrc', JSON.stringify(config, null, 2));
  console.log('✅ .cursorrc generated with selected overrides.');
})();
