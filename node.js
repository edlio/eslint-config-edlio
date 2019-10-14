const restrictedModuleMessage = module => (
  `${module} module is restricted. If your PR introduces this module as a new dependency please use node-fetch instead; Otherwise do not try to refactor and ignore this warning.`
)

module.exports = {
  env: {
    node: true,
  },
  extends: [
    'edlio/common'
  ],
  rules: {
    // Allow _id, as its part of Mongo id
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-restricted-modules': ['warn', {
      paths: [
        { name: 'request', message: restrictedModuleMessage('request') },
        { name: 'axios', message: restrictedModuleMessage('axios') }
      ]
    }]
  }
}
