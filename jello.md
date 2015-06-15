title: 基于后端JAVA的前端集成解决方案jello的
speaker: yongfeng
url: 
transition: move
files: /js/demo.js,/css/demo.css,/js/zoom.js,share.css
theme: moon

[slide style="background-color: #0088A8"]
# 用友集团UAP中心
## 前端集成解决方案
<small>分享人：**郭永峰**</small>

[slide style="background-color: #C71585;"]
# 来喝杯82年的雪碧，坐下来聊聊未来
---

* 我们目前的前端开发都有什么样的优势
* 我们的前端开发还有哪些问题没有得到解决
* 你希望解决哪些问题
* 目前有的前端方案分析
* 使用jello能够给我们带来什么样的收益
* 学习的成本
* 使用jello的话我们需要考虑的问题
* 结论

[slide]

# 要是得不到反馈，以下纯属个人YY，所以请多拍砖
---

<img src="/images/yao.png">

[slide]
# 我们的**优点**
---

* 代码组织风格一致，可读性好
* 插件丰富，功能强大
* JS面向对象封装
* 使用less编写样式，结构清晰

[slide]
# 还有哪些问题没有得到解决
---

* 模块化方式的代码管理和使用
* 通用化的组件使用和编写方式
* others

[slide]
# 你希望解决哪些问题

## 额，let me think think
---
* 要什么功能，require一个插件进来，new个对象传几个参数就能解决
* 我看到其他页面已经有个小模块了，我想直接require过来就能用
* 写html结构体好烦啊，我只想写需要我关心的那部分
* 天知道那些老旧的css文件哪里能改，我想可以精确控制我页面的css资源
* 嗯，我想灵活的模拟测试数据来验证我的插件功能（就是你们常说的是参照么）

[slide]
# 现有各种前端方案分析
[slide]
### 构建工具
* Grunt 基于task的构建工具，依赖众多插件进行配置组织，社区成熟、插件丰富
* gulp 文件流式的工作模式，高效，学习成本低
* fis 实现开发规范/目录规范/最佳实践、模块化开发框架(模块，js，css模块化)、自动化工具、辅助开发工具(本地调试、数据模拟、部署上传)和性能优化等一系列需求的整套前端解决方案

[slide]
### 模块加载器
* requirejs（amd）、seajs（cmd）、umd
* 很好的划分模块、降低模块间的耦合
* 手工添加闭包
* 合并打包的复杂性，因为模块化拆分、异步加载和匿名闭包等特性，导致合并打包并不像以前一样简单
[slide]
### 包管理器
* bower（客户端）、component、browserify（浏览器端加载nodejs模块）
[slide]
### 框架（分ui框架、mvc框架等，需要和类库的概念区分）
* ionic、framework7、knockoutjs、backbonejs、bootstrap
* 仅仅依靠框架来解决问题会导致框架臃肿、性能低下、开发效率低，只有工具和框架相互结合才能发挥出最大的效果，既能发挥出框架的运行时、开发时的优势也能极大降低使用成本，提高开发效率

[slide]

# 有这么多牛逼开源的工具和方案，为何不直接拿来使用起来呢，你是不是又想装逼了。

<img src="/images/zb.jpg">

[slide]

<img src="/images/compare.png">

[slide]
# 使用jello能够给我们带来什么样的**收益**

* jello是基于是在fis基础上的二次开发
* 服务端为 JAVA + Velocity/jsp的定制解决方案
* 实现前后端开发分离、自动性能优化、模块化开发机制等功能
* 
[slide]
# 学习的**成本**

[slide]
# 使用jello的话我们需要考虑的问题

[slide]
# 结论


