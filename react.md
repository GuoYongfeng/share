title: 移动端框架选型之React
speaker: 郭永峰
url: 
transition: move
files: /js/demo.js,/css/demo.css,/js/zoom.js,share.css
theme: moon

[slide style="background-color: #0088A8"]
# 用友集团UAP中心
## 移动端框架选型之React
<small>分享人：**郭永峰**</small>

[slide]

# 达成几个共识
---

* 类库和框架 {:&.zoomIn}
* 组件化

[slide]
### 类库和框架

* 类库 解决的是代码或者是模块级别的复用或者对复杂度的封装问题
	* jquery
	* zepto
* 框架 对模式（如MVC、MVVM）级别的复用和对程序组织的规范
	* UI框架（view层）
		* ionic
		* react
		* framework7等
	* MVC框架
		* backbone
		* angular
		* knockout等
[slide]
### 组件化
---
* html的组件化
	* 界面的片段化和模板化
* js的组件化
	* 先分层次，层内再作切分
	* 如Angular里面分为provider、service、factory、controller
* css的组件化
	* less
	* sass
* UI组件化
	* 可插拔
	* 包含html、js、css
[slide]
# 走进React

[slide]

# 优点

* 虚拟DOM，渲染快
* JSX语法实现组件化，清爽
* FLUX实现单向响应数据流

[slide]
# 概要

* 高效渲染页面的原理
* 组件化实现思路
* demo示例
* 结论

[slide]
# 高效渲染的实现原理
	* 虚拟DOM机制
	* DOM diff算法
	* 组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。
	* 只有当它插入文档以后，才会变成真实的 DOM 。
	* 根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映在真实 DOM上，这种算法叫做**DOM diff** ，它可以极大提高网页的性能表现。

[slide]
## 应用场景：构建大数据量高复杂度的应用
[slide]
# 组件化实现思路

* React.createClass
* jsx语法封装组件（component）
* 每个组件都有一个状态机

[slide]
# demos

* https://github.com/GuoYongfeng/react-demos
* 实例

[note]
<pre><code>var React = {
  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    only: onlyChild
  },
  Component: ReactComponent,
  DOM: ReactDOM,
  PropTypes: ReactPropTypes,
  initializeTouchEvents: function(shouldUseTouch) { },
  createClass: ReactClass.createClass,
  createElement: createElement,
  cloneElement: cloneElement,
  createFactory: createFactory,
  createMixin: function(mixin) { },
  findDOMNode: findDOMNode,
  render: render,
  renderToString: ReactServerRendering.renderToString,
  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
  unmountComponentAtNode: ReactMount.unmountComponentAtNode,
  isValidElement: ReactElement.isValidElement,
  withContext: ReactContext.withContext,
  __spread: assign
};
	</code>
</pre>

[/note]

[slide]
# 国内外的应用情况

* 国外，facebook、Yahoo、Reddit等。
	* 应用较广泛
	* 具体参见https://github.com/facebook/react/wiki/Sites-Using-React

* 国内，大搜车、去哪儿网、360、蘑菇街、支付宝
	* http://www.zhihu.com/question/26387853
	* 大多以内部系统试水
* 大多技术要在国内应用起来一般是较慢的，不过React确实感觉比较特殊，特别是UI的组件化和Virtual DOM的思想

[slide]
# 别人是怎么玩的

* React+flux+react-router
* React Native
* React Component：www.youtube.com/watch?v=h3KksH8gfcQ
* tools：https://github.com/enaqx/awesome-react

[slide]
# 用React可以给我们带来什么样的收益

* 架构组可以专心做组件
* 页面渲染可以比较快
* 页面逻辑松藕，更清晰
* 如果后续考虑做web app，react native会是个不错的选择

[slide]
# 需要承担什么风险

* 团队学习成本（不过学习曲线较为平缓）
* React现在最新版是V0.13.3，后面会有升级
* 整体方案需要结合使用，React只是作为view层
* 用的pt作为单位，不能做响应式
* 技术比较新，这就意味着在使用过程中必然会踩到坑

[slide]

# Questions

* React和ionic哪个好
* React和bootstrap哪个好
* React和framework7哪个好
* 该学Angular还是React

* React的组件化思路和web component的差异
* W3C花了20年的时间让表现、样式、数据分离，React直接一夜回到解放前


[slide]

# 参考资料

* http://www.ruanyifeng.com/blog/2015/03/react.html
* http://www.th7.cn/web/html-css/201412/71996.shtml
* https://github.com/facebook/react
* http://facebook.github.io/react/
* https://github.com/enaqx/awesome-react
* http://react-components.com/
* http://www.zhihu.com/question/26387853

[slide]
# THANKS

[slide]