title: 拥抱React
speaker: yongfeng
url: 
transition: move
files: /js/demo.js,/css/demo.css,/js/zoom.js,share.css
theme: moon

[slide style="background-color: #0088A8"]
# 用友集团UAP中心
## 拥抱React
<small>分享人：**郭永峰**</small>

[slide]
# 架构说明

[slide]
# 构建
* gulp
	* 项目构建
	* 支持文件监听、实时解析、文件合并、自动刷新、模块打包等功能

[slide]
# 包管理
* bower
	* 前端包管理器
	* 为模块的安装、升级和删除，提供一种统一的、可维护的管理模式
* npm
	* NodeJS包管理和分发工具

[slide]
# 模块化
* browserify
	* 支持前端CommonJS规范写代码
	* 实现前后端JS代码风格统一，无缝引用npm包代码
* less
	* 模块化css
	* 快捷书写样式及解析

[slide]
# 组件化
* React
	* 组件化UI框架
	* 具有完美组件化实现、JSX、Virtual DOM、单向数据流等功能
* reflux
	* Reflux是根据React的flux创建的单向数据流类库
	* Flux思想的实现，单向数据流，事件机制驱动数据流动

[slide]
# 库
* bootstrap
* lodash
	* 一个比underscore更高性能的JavaScript 实用工具库，提供一致性，模块化，性能和配件等功能
	* npm包仓库中依赖最多的库

[slide]
# reflux的实现说明

╔═════════╗       ╔════════╗       ╔═════════════════╗
║ Actions ║──────>║ Stores ║──────>║ View Components ║
╚═════════╝       ╚════════╝       ╚═════════════════╝
     ^                                      │
     └──────────────────────────────────────┘

[slide]
<img src="/images/components.png" >


