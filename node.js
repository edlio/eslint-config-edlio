const restrictedModulesMessage = 'If your PR introduces this module as a new dependency please use node-fetch instead; Otherwise do not try to refactor and ignore this warning.'

module.exports = {
  env: {
    node: true,
  },
  extends: [
    'edlio/common'
  ],
  rules: {
    'no-restricted-modules': ['warn', {
      paths: [
        { name: 'request', message: restrictedModulesMessage },
        { name: 'axios', message: restrictedModulesMessage }
      ]
    }]
  }
}
