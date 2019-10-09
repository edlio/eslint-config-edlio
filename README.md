# eslint-config-edlio

Edlio's shareable eslint configuration for React and NodeJS. This repo enables
us to update linting rules without individually updating each of our repos.  

## Usage

Install `eslint` package to your repo

```bash
npm install --save-dev eslint
```

Install this package

```bash
npm install --save-dev edlio/eslint-config-edlio#master
```

Add `.eslintrc.yml` file to your repo. 

```yml
extends:
  - 'edlio/react' # or 'edlio/node' if its a node project
```

Add github workflow to automatically check linting with every push using
`edlio/eslint-action`

```yml
# Save to .github/workflows/eslint.yml in your repo
name: ESLint

on: [push]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - name: ESLint checks
      uses: edlio/eslint-action@master
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Add npm script called `lint` in your `package.json`

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

Check your code using the new npm script, you should see the report.

```bash
npm run lint
```

Occasionally you might want to update your `eslint-config-edlio` dependency.
This update is mainly for you development environment, Github Action will
always use the latest version of the configuration to lint the code on a Pull
Request.

```bash
npm update eslint-config-edlio
```

Additionally, make sure to setup your IDE, so that It uses .eslintrc.yml file
to show you real time errors/warning during development.
