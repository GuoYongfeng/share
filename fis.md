title: 前端架构分析
speaker: yongfeng
url: 
transition: move
files: /js/demo.js,/css/demo.css,/js/zoom.js,share.css
theme: moon

[slide style="background-color: #0088A8"]
# 用友集团UAP中心
## 前端架构分析
<small>分享人：**郭永峰**</small>

[slide]
## 主题
---
* 开发痛点
* 结合思考
* 工作方向
* 提出的方案
* 放眼市场
* 为什么提FIS
* FIS简介
* FIS功能概述
* demo

[slide]
## 开发痛点讨论
---

* Q: 页面复杂度高，一个页面会有几十个乃至上百个控件
	* 组件化，高度重用，可移植性好
	* 模块化，统一代码风格
	* 自动化工具处理打包、压缩、代码校验等繁琐任务
* Q: 页面数据体量大，交互复杂
	* 确定前后端的交互方式
	* 引用资源多，需要做性能优化，减少HTTP请求
* Q: 跨部门合作
	* 确定规范，包括目录规范和代码规范
	* 确定类库和框架
	* 业务系统拆分明确
	* 实现并行开发，不相互依赖：数据模拟、支持本地调试


[slide]
## 思考 
---

* 针对以上提出的问题是否考虑一步到位的解决
* 还是针对现有业务，遇到什么问题提出特定的解决方案
* 是否考虑使用成熟方案
* 还是我们自己摸索开发出针对UAP乃至用友适用的前端解决方案


[slide]
## 基于以上考虑，我们的方向
---

* 前端框架
	* 提供组件加载及管理框架支持
	* 提供前端基础类库及组件库（即常说的Web UI框架）
* 模板框架
	* 提供组件化开发模式支持
	* 配合前端框架收集页面所需要的最小静态资源需求
	* 留有充分的性能优化空间，性能优化对工程师透明。
* 自动化工具
	* 提供基本优化能力；为前端框架、模板框架提供辅助支持。
* 辅助开发工具
	* 提升工程师的开发体验，降低调试、部署成本。

[slide]
## UAP前端解决方案的考虑
---

* 规范与设计
	* 定制必要的开发规范
	* 定制项目的组件化拆分方案
* 技术选型
	* 选择前端模块化框架
	* 选择前端基础类库（jquery, zepto, tangram, ...）
	* 选择模板语言（java, velocity, jsp, FreeMarker ...）
* 自动化与拆分
	* 选择或开发自动化工具（打包，压缩，代码校验）
	* 将业务拆分为几个子系统，以便团队并行开发
	* 适当调整框架以适应工具产出
* 性能优化
	* 优化HTTP请求、使用架构级优化方案、适当调整自动化工具以适应性能优化

[slide]
## 放眼市场
---

* 以上的问题，任何一个前端团队都会遇到，无论团队大小；国内外大型互联网公司都会抽调最顶尖的工程师去攻克这些问题，以产出适用于公司级别的解决方案，提高码农的生产效率
* 就国内而言
	* 2011年底，百度web前端研发部成立F.I.S团队，汇集了来自各产品线的精英工程师，该团队的任务是寻找提升前端工业生产力水平的解决方案
	* 京东2014年产出自己的前端解决方案JDF，https://github.com/putaoshu/jdf
	* 2012年淘宝UED团队打造一个完全自底向上开发起来的框架KISSY
	* 去哪儿网的avalon
	* .....

[slide]
## 选型
---

* 构架工具：自动化、本地调试、项目部署
	* FIS、Grunt、Gulp、JDF...
* 模块化方案：统一代码模块化规范
	* AMD、CMD、CommonJS、UMD...
* 组件化：实现复杂页面细粒度、可拆分、可自由插拔使用
	* React、Web Component、FIS中的组件化实现...
* MVC框架：实现前端MVC
	* Angular、Backbone、ember、knockout、avalon(MVVM)...
* 类库：封装的底层API接口，一种工具
	* Jquery、Zepto、自己攒一个...


[slide]
## 构架工具

| 方案 | 自动化程度 | 插件 | 上手程度 | 重量级 | 备注 |
|-------|------|-------|------|------|--------|
|Grunt|高|第一|第二|轻量|插件丰富，全|
|Gulp|高|第二|第一|轻量|流式工作，快|
|FIS|高|第三|第三|重量|提供解决方案，强|

[slide]
## FIS是什么
---

* FIS全称为Front-end Integrated Solution，即前端集成解决方案
* 由百度web前端研发部的F.I.S团队开发并在2013年初开源
* 目前FIS已应用到百度40多个产品线及众多互联网公司，覆盖了从PC到无线终端的应用
* FIS是专为解决前端开发中自动化工具、性能优化、模块化框架、开发规范、代码部署、开发流程等问题的**前端工程化构建工具**
* 文档全，语言解决方案全，相对熟悉

[slide]
## demo功能展示

* 演示第一部分：资源打包，资源压缩，资源合并，添加文件版本
* 演示第二部分：辅助开发(语言扩展)、文件监听、自动刷新、快速部署
* 演示第三部分：资源定位、内容嵌入、依赖声明
* 演示第四部分：前端模块化和前端组件化
* 演示第五部分：语言解决方案

[slide]

## demo演示时间
[slide]
## 方案比对

* http://segmentfault.com/q/1010000002923454?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly

[slide]

## THANKS

[slide]
