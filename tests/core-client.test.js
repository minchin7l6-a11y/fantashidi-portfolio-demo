const { test } = require('node:test')
const assert = require('node:assert/strict')
const { requestMenu } = require('../examples/core-client')

test('requires an externally supplied core adapter', async () => {
  await assert.rejects(requestMenu(null), /not configured/)
})

test('passes through the injected adapter result', async () => {
  const response = { items: ['示例菜'] }
  assert.equal(await requestMenu({ getMenu: async () => response }), response)
})
