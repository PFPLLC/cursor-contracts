![Cursor Compliant](https://img.shields.io/badge/Cursor_Compliant-frontend,api,ci_cd-brightgreen)

# Cursor Contracts
High-performance behavioral contract system for Cursor AI projects with modular override support and compliance automation.

# 🧠 Cursor Contract System

This repository defines a universal, high-performance behavioral contract for Cursor AI.  
It ensures consistency, integrity, and intelligence across all project types through a master contract and a modular override system.

---

## 📜 Contract Overview

The **`cursor_contract.md`** file defines a permanent behavioral standard Cursor must always follow:

- Professionalism & honesty
- Code completeness & testing
- Reasoning clarity & communication
- Progress tracking & logging
- Self-audit and failure handling
- Clean, maintainable code
- Proactive system design

Cursor must **reset its behavior** if it violates any of these rules.

---

## 🔧 Override Blocks

Overrides extend the base contract for project-specific requirements. Each one enforces rules relevant to a particular domain:

| Override File             | Use Case Description |
|---------------------------|----------------------|
| `frontend.md`             | React/Tailwind UI components, semantic HTML, responsive design, ARIA |
| `api.md`                  | Express/REST APIs, schema validation, OpenAPI docs, consistent error handling |
| `ci_cd.md`                | GitHub Actions, GitLab CI, rollback logs, idempotent scripts |
| `streamlit.md`            | Python Streamlit dashboards, session state, async IO, secure input |
| `design_system.md`        | Component libraries, Storybook, token systems, reusable architecture |
| `serverless.md`           | AWS Lambda, Vercel/Netlify functions, stateless async handlers |
| `analytics_privacy.md`    | Consent-based tracking, GDPR/CCPA compliance, anonymization |
| `i18n.md`                 | Translation key usage, RTL/LTR layout support, locale-aware formatting |
| `mobile_first.md`         | Touch-first UI, responsive layout, accessibility for mobile devices |

Each override defines:
- ✅ What must be enforced
- ⚠️ What behavior triggers correction
- 💬 What Cursor should emit if a rule is broken

---

## ⚙️ CLI Setup: `cursor-init`

Use the included Node CLI to bootstrap a `.cursorrc`:

```bash
cd scripts
npm install inquirer
node cursor-init.js
```

You’ll be prompted to select override blocks.  
A compliant `.cursorrc` will be generated automatically.

---

## 🗂 Project Structure

```
cursor-contracts/
├── cursor_contract.md                  # Core behavioral contract
├── .cursorrc                           # Generated override configuration
├── overrides/                          # All override block definitions
├── scripts/
│   └── cursor-init.js                  # CLI initializer
├── generators/
│   └── override_generator_template.json
├── mappings/
│   └── file_override_map.json
├── README.md                           # This documentation
```

---

## 🧠 Best Practices

- Track Cursor's performance using the embedded checklist in `cursor_contract.md`
- Extend or modify overrides using the generator in `generators/`
- Use `mappings/file_override_map.json` to auto-map overrides to file patterns

---

## 🛠 Coming Soon

- ✅ `cursor-badge.js`: Emits a compliance badge per project
- ✅ GitHub Action for contract audit on commit
- ✅ VS Code plugin to preview overrides per file

---

## 🔗 License

MIT License – free for commercial and personal use.
