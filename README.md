# 饭踏实滴 · 作品集演示 / Portfolio Demo

「饭踏实滴」是一款围绕日常选菜与共享餐桌设计的微信小程序。本仓库展示奶白与雾蓝主题的**静态界面**、合成的示例菜单，以及一个私有核心接口的接入示例。

Fantashidi is a WeChat mini program concept for choosing dishes together. This public repository contains a static interface, fictional sample data, and an example adapter boundary.

> **演示边界 / Demo scope**  
> 本项目的按钮只显示演示提示。邀请码、共享菜单、盲盒、订单、登录与云端同步未在本仓库实现或接入。  
> The buttons display demo notices. Invitation, shared menus, blind boxes, orders, authentication, and cloud sync are not implemented or connected in this repository.

## 目录 / Structure

```text
.
├── miniprogram/
│   ├── app.js / app.json / app.wxss
│   └── pages/index/                 # 静态示例界面
├── examples/
│   ├── core-client.js              # 私有内核接口占位与注入边界
│   └── call-core.js                # 调用示例，默认提示未配置
├── fixtures/menu.json              # 虚构示例数据
├── tests/core-client.test.js       # 接口边界测试
├── project.config.json             # 游客 AppID 配置
├── package.json
├── .gitignore
└── LICENSE
```

## 本地体验 / Preview

1. 安装微信开发者工具并选择“导入项目”。
2. 选择本仓库目录。`project.config.json` 使用 `touristappid`，可按开发工具提示使用游客模式。
3. 编译后浏览静态首页，点击卡片可看到演示提示。展示数据在 `miniprogram/pages/index/index.js` 中。

测试需要支持 `node:test` 的 Node.js（建议 Node.js 18 或更高版本）。在仓库根目录运行：

```bash
node --test tests/*.test.js
```

## 核心接口示例 / Core adapter example

`examples/core-client.js` 展示依赖注入形式。仓库中不提供实际适配器；`node examples/call-core.js` 会输出未配置提示。

```js
const { requestMenu } = require('./examples/core-client')
// core 由私有环境提供；此仓库不包含实现。
const menu = await requestMenu(core)
```

公开演示不需要云环境。若将私有核心接入自己的部署环境，请由拥有者在私有工程中完成授权、认证、配置和接入，并遵守微信平台的部署要求。本仓库不能单独部署为具备上述业务能力的完整小程序。

## 版权与许可 / Copyright and licensing

**中文声明。** 本仓库仅为作品集演示。原项目的核心引擎、算法、业务逻辑及其源码为专有闭源，不在本仓库公开，也不通过本仓库许可。未经权利人事先书面许可，禁止对专有核心进行逆向工程或商业使用。仓库中实际提供的外围示例代码和文档采用 [MIT License](LICENSE)，允许包括商业使用在内的 MIT 许可行为；该许可不授予对未公开核心、商标或其他未包含内容的权利。

**English notice.** This repository is a portfolio demo. The original project's core engine, algorithms, business logic, and source code are proprietary and closed source. They are not included or licensed here. Reverse engineering or commercial use of the proprietary core is prohibited without the rights holder's prior written permission. The peripheral example code and documentation actually included in this repository are licensed under the [MIT License](LICENSE), which permits commercial use. The MIT license grants no rights to undisclosed core components, trademarks, or other material not included in this repository.

“饭踏实滴”名称仅用于标识本作品集项目。本仓库不包含真实用户数据、小程序 AppID、云环境或密钥。
