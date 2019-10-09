# eslint-config-edlio

Edlio's shareable eslint configuration for React and NodeJS. This repo enables us to update linting rules without individually updating each of our repos.  

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

Add github workflow to automatically check linting with every push using `edlio/eslint-action`

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

Check your code using the new npm script

```bash
npm run lint
```

You should see the report. Your IDE should also use eslint to show you errors while you develop. 
