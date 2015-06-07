title: 从互联网+到前端研发
speaker: yongfeng
url: 
transition: move
files: /js/demo.js,/css/demo.css,/js/zoom.js,share.css
theme: moon

[slide style="background-color: #0088A8"]
# 用友集团UAP中心
## 从互联网+到前端研发
<small>分享人：**郭永峰**</small>

[slide style="background-color: #C71585;"]
## 咱们开始吧
----
<img src="/images/begin.jpg" height="399" width="450">

[slide]

# 转型！

[slide]

# 怎么转？

[slide]

# <span class="text-danger">我也不知道啊</span> 

<img src="/images/know.jpg" height="150" width="150">

[slide]
## <span class="text-success">先了解下互联网公司现在是怎么运转的</span>
# <span class="text-primary">知己知彼</span>

[slide style="background-color: #DDA0DD"]
# 主要内容
----

* 互联网公司的工作模式分析 {:&.zoomIn}
* web研发模式的发展
* 前端架构
* 前端工作流

[slide]

# 互联网公司的工作模式*分析*

[slide style="background-color: #9932CC"]

# 角色组成
---

* pm 产品经理 {:&.zoomIn}
* ue 设计
* fe 前端
* rd 服务端
* qa 测试 
* data 数据
* op 运维
* dba 数据库管理

[slide data-transition="zoomin" style="background-color: #EE82EE"]

# pm 
----

* 产品经理，昵称产品狗 {:&.zoomIn}
* 主要会负责细分方向的产品策略、数据分析、调研等工作
* 对产品的开发和后续工作负责
* 会细分多个方向，如产品运营、产品推广、产品研发
[slide data-transition="zoomin" style="background-color: #FA8072"]
# ue
---

* 射鸡师 {:&.zoomIn}
* 用户交互设计
* 视觉设计
* uber、airbnb的设计师
* .........

[slide style="background-color: #0088A8"]
# fe 
----

* 前端制作 （html css） {:&.zoomIn}
* 中级前端研发（原生js jq zepto 插件 html5 css3）
* 高级前端研发 （服务端语言 模块化 组件化 性能 angular nodejs ）
* 前端架构 （多维 多技能）

[slide data-transition="vertical3d"]
# rd 
----

* php 糙快猛（互联网公司用的较多） {:&.zoomIn}
* java 稳 （企业级采用较多）
* python 多功能
* go 高性能 
* nodejs （初创类公司采用较多）

[slide style="background-color: #0088A8"]
# qa 
----

* 项目开发完成自测后 {:&.zoomIn}
* 提交qa进入测试阶段
* 测试完成后上线
* 自动化测试 jenkins 部署

[slide]
# data
----

* 数据统计 {:&.zoomIn}
* 分析
* 挖掘
* 上报

[slide style="background-color: #0088A8"]
* OP && DBA

[slide style="background-color: #EE82EE"]

## 互联网公司的那群**码农**到底是怎么**媾和**在一起的呢
---
<img src="/images/nima.jpg" height="115" width="117">

[slide]

<img src="/images/co.png" height="378" width="407">

[slide]
# 工作模式
[slide]

## 横向开发
----

* 任务随机分配
* 有什么项目开发什么项目
* 有什么需求做什么需求
* 粗放

[slide]
## 业务线模式
----

* 比如同一产品的不同业务可以细分为流程、供应链、成长引擎、保险保障、风险控制等不同的指标
* 这群人会持续的对该业务的工作进行优化、开发
* 不同业务线下会有完备的各职位技术人员构成

[slide style="background-color: #0088A8"]

## 项目制
---

* 项目经理
* 对该项目负责
* 固定的一群人
* 也会有完备的各职位技术人员构成

[slide style="background-image:url('/img/bg1.png')"]

# web研发模式的发展
[slide]

# 吐槽一下目前的研发过程中很不爽的地方
[note]

* 需求太多，做不完
* 别人写的代码太乱，不好改
* 设计师太矫情，调页面真麻烦
* 产品狗又新增需求了
* QA提了一堆bug过来
* 这是什么破接口啊，srv
* 我擦，这代码以后可怎么维护啊
* blablabla.....

[/note]

[slide style="background-color: #009FCC"]

## 简单明快的早期时代
## 后端为主的 MVC 时代
## Ajax 带来的 SPA 时代
## 前端为主的 MV* 时代
## Node 带来的全栈时代

--总结来自阿里架构师玉伯

[slide]

# 结合PP租车业务发展
# 聊聊研发模式的变迁

[slide]
# 简单明快的早期时代
---

<img src="/images/web10.jpg" >
[note]

* 不分前后端
* 只要业务不复杂，本地起个服务，还是很方便的

----------没错，我是分割线----------

* service多，调用复杂
* 前端搭服务都觉得费劲
* JSP代码越来越不好维护了

[/note]

[slide]
* 为了提高可维护性，可以通过下面的方式实现前端的组件化
<br>
<img src="/images/web11.jpg" >

[slide style="background-color: #0088A8"]
# 后端为主的 MVC 时代
---

[note]
* 没错，这是套模板的时期
* 前后端不清晰，controller的灰色地带

[/note]
<img src="/images/web20.jpg" >
[slide style="background-color: #009FCC"]
# Ajax 带来的 SPA 时代
---

[note]
* 前后端定接口
* 前端开发的复杂度可控
* 可以相对独立的部署
* backbone
[/note]

<img src="/images/web30.jpg" > 

[slide]

<img src="/images/web31.jpg" >

[slide]
# 前端为主的 MV* 时代
---

[note]

* EmberJS、KnockoutJS、AngularJS
* 按类型分层，比如Templates、Controllers、Models
* 然后再在层内做切分

[/note]

<img src="/images/web40.jpg" >
[slide style="background-color: #0088A8"]
# Node 带来的全栈时代
---

[note]
* Front-end UI layer 处理浏览器层的展现逻辑。通过 CSS 渲染样式，通过 JavaScript 添加交互功能，HTML 的生成也可以放在这层，具体看应用场景。

* Back-end UI layer 处理路由、模板、数据获取、cookie 等。通过路由，前端终于可以自主把控 URL Design，这样无论是单页面应用还是多页面应用，前端都可以自由调控。后端也终于可以摆脱对展现的强关注，转而可以专心于业务逻辑层的开发。

[/note]
<img src="/images/web50.png" >

[slide]

# 模式没有好坏高下之分，只有合不合适
# 业务决定模式，同时还决定架构

[slide style="background-color: #009FCC"]

# 前端架构

[slide]
# 当前端已经进入工业化时期

* 我们应该把页面当成一台机器
* 每一个区块都应该拆分成独立的小部件
* 随时拿来组装，随时拆卸下线
* 细粒度化，灵活掌控，精确控制


[slide]

# THANKS

[slide]
# 精彩预告
---

* 开发规范
* 开发模型
* 模块化开发
* 开发工具
* 项目部署
* 组件化和组件生态
* 前端统计
* 前端安全
* 性能优化
* 系统测试

[slide style="background-color: #0088A8"]
# 开发规范
---

* 开发、部署的目录规范
* 编码规范
[slide style="background-color: #009FCC"]
# 开发模型
---

* 本地开发调试
* 视觉走查确认
* 前后端联调
* 提测
* 上线

[slide]
# 模块化开发
---

* 针对js、css，以功能或业务为单元组织代码
* js方面解决独立作用域、依赖管理、api暴露、按需加载与执行、安全合并等问题
* css方面解决依赖管理、组件内部样式管理等问题
* 模块化框架有requirejs、seajs、modjs等

[slide style="background-color: #0088A8"]
# 开发工具
---

* 这里指的是工程工具，不是开发的IDE
* 构建工具
* 优化工具
* 组件库获取和提交
* 运营、文档、配置发布等平台工具

[slide style="background-color: #009FCC"]
# 项目部署
---

* 静态资源缓存
* cdn
* 非覆盖式发布

[slide]
# 组件化和组件生态


### **组件化**

* 在模块化基础上，以页面小部件(component)为单位将页面小部件的js、css、html代码片段放在一起进行开发、维护
* 组件单元是资源独立的
* 组件在系统内可复用
### **组件生态**
* 头部(header) 尾部(footer) 搜索框(searchbar) 导航(menu) 对话框(dialog)......
### **组件仓库**
* bower
* component

[slide style="background-color: #0088A8"]
# 前端统计
---

* 性能统计
* 访问统计
* 用户行为统计
* 错误统计
* 安全监控
* 前端研发方向需要数据做指导
[slide style="background-color: #009FCC"]

# 前端工作流
---

* 接到需求
* 需求评审
* ue图确认
* 与后端沟通确定接口
* 开发
* 自测
* 联调
* 提测
* 上线