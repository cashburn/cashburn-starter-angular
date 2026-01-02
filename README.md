# CashburnStarterAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Steps to get here

1. `ng new cashburn-starter-angular --create-applicatino=false`
    1. Select Gemini
2. Add `.editorconfig` changes
3. `ng add angular-eslint`
4. Add Prettier
    1. `npm install --save-dev prettier`
    2. `npm install --save-dev eslint-config-prettier`
    3. Add eslint-config-prettier to eslint.config.js
    4. Add VSCode Prettier/ESLint extensions
    5. Add `.vscode/settings.json`
5. Run Prettier
    1. Add eslint/prettier scripts to package.json
    2. Run `npm run prettier:fix`
6. `ng generate application @cashburn/app`
    1. SCSS
7. Update .gitignore
8. Add Husky/Lint-Staged with Prettier
9. Add `eslint-plugin-simple-import-sort`
    1. `npm install --save-dev eslint-plugin-simple-import-sort`
    2. Add plugin/rules to eslint.config.js
10. Add code coverage and junit test reporting
    1. Add `test:ci` script
    2. `npm install --save-dev @vitest/coverage-v8`
