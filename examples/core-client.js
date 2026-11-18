// ========== Core Proprietary Module (NOT OPEN SOURCE) ==========
// 核心专有模块，源码不公开，仅提供接口调用示例。
// 这里替换为你自己的私有闭源内核。此文件不包含核心实现。
async function requestMenu(core) {
  if (!core || typeof core.getMenu !== 'function') {
    throw new Error('Private core adapter is not configured')
  }
  return core.getMenu()
}

module.exports = { requestMenu }
