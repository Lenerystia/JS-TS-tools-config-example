# JS/TS ultimate config - selected tools
Simple setup with needed by me (possibly in the future for all popular tools) plugins/tools. Everything in one file, just copy paste to your project.

Flat eslint setup plugins that can be turned on and off.

This project is only example config files - there are not project to coding.

# Included Tools
- **[ESLint](https://eslint.org/)**: For linting JavaScript and TypeScript.
- **[Prettier](https://prettier.io/)**: For code formatting.
- **[Husky](https://typicode.github.io/husky/)**: To run Git hooks.
- **[lint-staged](https://github.com/okonet/lint-staged)**: To lint files before committing.
- **[Stylelint](https://stylelint.io/)** (optional): For linting CSS/SCSS.
- **[CSpell](https://github.com/streetsidesoftware/cspell)**: Spell Checker for Code.
- **[Commitlint](https://commitlint.js.org/)**: To enforce conventional commit messages.

# Installation
## Tools
### For Windows (if you want other look in source)
```
npm install --save-dev eslint prettier husky lint-staged cspell commitlint @commitlint/cli @commitlint/config-conventional
```

## Eslint plugins
### Eslint JS
```
npm install --save-dev @eslint/js
```

### Framework: TypeScript
```
npm install --save-dev typescript-eslint typescript
```

### Framework: Svelte
```
npm install --save-dev svelte-eslint-parser eslint-plugin-svelte prettier-plugin-svelte
```

### Framework: HTML
```
npm install --save-dev @html-eslint/parser @html-eslint/eslint-plugin
```

### Framework: Tailwind CSS
```
npm install --save-dev eslint-plugin-tailwindcss
```

### Framework: PandaCSS
```
npm install --save-dev  @pandacss/eslint-plugin
```

### Framework: Drizzle ORM
```
npm install --save-dev eslint-plugin-drizzle
```

### Framework: Vitest
```
npm install --save-dev @vitest/eslint-plugin
```

### Style & Best Practices
```
npm install --save-dev eslint-plugin-perfectionist eslint-plugin-unicorn @stylistic/eslint-plugin eslint-plugin-functional eslint-config-prettier prettier-plugin-organize-imports
```

### Security & Quality
```
npm install --save-dev eslint-plugin-security eslint-plugin-sonarjs eslint-plugin-tsdoc eslint-plugin-promise @cspell/eslint-plugin
```

### Import Management
```
npm install --save-dev eslint-plugin-import eslint-plugin-import-alias
```

### Meta Plugins
```
npm install --save-dev eslint-plugin-eslint-plugin
```

## Stylelint
```
npm install --save-dev stylelint stylelint-config-standard
```
