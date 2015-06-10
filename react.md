title: 移动端技术选型之React篇
speaker: 郭永峰
url: 
transition: move
files: /js/demo.js,/css/demo.css,/js/zoom.js,share.css
theme: moon

[slide style="background-color: #0088A8"]
# 用友集团UAP中心
## 移动端技术选型之React篇
<small>分享人：**郭永峰**</small>

[slide style="background-color: #C71585;"]

# React的发展
----

* facebook内部项目
* 公司不满目前市场上现有的js框架，所有准备自己攒一套
* React出现后，于今年三月份，基于 React 的 React Native 发布，赢得市场喝彩
* 特点：设计思想独特，创新，性能好，逻辑简单


[slide]
# 走进React

[slide]
A declarative, efficient, and flexible JavaScript library for building user interfaces.
一款开源、高效、灵活的JS库，它致力于打造良好用户交互

[slide]

# 它的魅力

* 负责MVC架构的View层
* 虚拟DOM，渲染快
* JSX语法实现组件化，清爽
* FLUX实现单向响应数据流

[slide]

# Examples
# 举个栗子

<a href="https://github.com/ruanyf/react-demos">送上一个简单的demo地址</a>

[slide]
# demo1
## 将模板转为 HTML 语言，并插入指定的 DOM 节点
----

<a href="https://github.com/ruanyf/react-demos/blob/master/demo01/index.html">戳我看demo示例</a>
[slide]
# demo2
## jsx语法，JSX 的语法，它允许 HTML 与 JavaScript 的混写
---

<a href="https://github.com/ruanyf/react-demos/blob/master/demo02/index.html">戳我看demo示例</a>
[slide]
# demo3
## 代码封装成组件化
---

<a href="https://github.com/ruanyf/react-demos/blob/master/demo03/index.html">戳我看demo示例</a>
[slide]
# 虚拟DOM概念

* 刚才所说的组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。
* 只有当它插入文档以后，才会变成真实的 DOM 。
* 根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映在真实 DOM上，这种算法叫做**DOM diff** ，它可以极大提高网页的性能表现。

[slide]
# 给React打了这么多广告，那么接下来是吐槽时间了，大家准备好瓜子板凳汽水
[slide]

* 它只是一个View层，其他的，自己用其他技术实现去吧
* 文件大，144kb，不过gzip能压到40kb以内
* 但是，我说的是但是，以上文件大小不包括react的插件，要用react就得用它的很多插件，插件比较大，移动端你能忍吗
* 刚出来不久，浏览器支持不好
* 技术文档嘛，咳咳，不是一般的不完善…
* 不支持ie8以下，现在不会，以后也不会
* 需要自己造很多轮子

[slide]

# 技术尝鲜的前提是有一颗顽强填坑的心



