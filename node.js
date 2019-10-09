module.exports = {
  env: {
    node: true,
  },
  extends: [
    'edlio/common'
  ],
  rules: {
    // Allow _id, as its part of Mongo id
    'no-underscore-dangle': ['error', { allow: ['_id'] }]
  }
}
