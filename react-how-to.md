title: 对前端『新』技术的实践
speaker: 郭永峰
url:
transition: move
theme: moon

[slide style="background-image:url('/img/bg1.png')"]

# <span class="text-info">对前端『新』技术的实践</span>

<small>**郭永峰**</small>

[slide]


> ## 2016来了，这是前端技术走向更成熟的一年

[slide]

# 技术关键字
---

<span class="label label-primary">ECMAScript 6</span>
<span class="label label-warning">Babel</span>
<span class="label label-danger">Webpack</span>
<span class="label label-default">React</span>
<span class="label label-success">React-Router</span>
<span class="label label-info">Redux</span>
<span class="label label-warning">Less</span>
<span class="label label-success">Material-ui</span>
<span class="label label-info">Mocha</span>

[slide]

# <span class="blue">拥抱ES6</span>

> 不要犹豫了，ES6的规范早已落地，新的规范从语言层面解决了很多由来已久的问题。

[slide]


### 现在有原生的 class extends 语法，从语言层面进行统一
```
export default class Point {
    // constructor方法是类的默认方法
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    // 这里定义的都是类的公共方法
    // 等同于Point.prototype.toString
    toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
}
```

[slide]

### 箭头函数避免了 this 上下文的坑
```
class Animal {
    constructor(name){
        this.name = name;
    }
    drink(type = 'water'){
        setInterval( () => {
            console.log(`${this.name} want to drink ${type}`)
        }, 1000)
    }
}
```
[slide]

### 块级的 let/const 避免了 var hoisting 的坑
```
console.log(a);
console.log(b);

let a = 1;
var b = 2;
```


[slide]

### templateString 避免繁琐的手动字符串拼接
```
let name = 'bull';
let type = 'water';

console.log(`${name} want to drink ${type}`)
```

[slide]

### ES6的 export 和 import 轻松提供良好的模块机制
```
'use strict';
import React, { Component } from 'react';

class Comment extends Component {
    render(){
        return <h1>hello world</h1>
    }
}

export default Comment
```
[slide]

> ## 学习资料推荐
1. [ES6入门](http://es6.ruanyifeng.com/)
2. [ES6语法快餐](http://guoyongfeng.github.io/idoc/html/React%E8%AF%BE%E7%A8%8B%E4%B8%93%E9%A2%98/ES6%E8%AF%AD%E6%B3%95%E5%BF%AB%E9%A4%90.html)
[slide]

# <span class="blue">用Babel来解析你的代码</span>
> Babel 是一个 JavaScript 编译器，强大的Babel解析器及其生态，助推ES6和React的推广，让我们可以更早更舒服的拥抱新技术。

[slide]

- 模块：
<span class="label label-primary" style="margin-right: 10px;">babel-core</span>
<span class="label label-warning" style="margin-right: 10px;">babel-cli</span>
<span class="label label-danger" style="margin-right: 10px;">babel-polyfill</span>
- 预设 presets：
<span class="label label-default" style="margin-right: 10px;">babel-preset-es2015</span>
<span class="label label-success" style="margin-right: 10px;">babel-preset-react</span>
<span class="label label-info" style="margin-right: 10px;">babel-preset-stage-0</span>
- 插件 plugins：
<span class="label label-warning" style="margin-right: 10px;">babel-plugin-transform-runtime</span>
<span class="label label-success" style="margin-right: 10px;">babel-plugin-transform-es2015-modules-amd</span>
<span class="label label-info" style="margin-right: 10px;">babel-plugin-syntax-decorators</span>


[slide]

- 你可以这样来用
```
$ cd my-project
$ touch .babelrc
```
- 配置你的 `.baberrc`
```
{
    "presets": ["react", "es2015"],
    "plugins": []
}
```
- 下载相应的插件
```
$ npm install --save-dev babel-core babel-preset-react babel-preset-2015 babel-cli
```
- 运行解析
```
$ babel src -d lib
```

[slide]

> ## 学习资料推荐
1. [Babel中文网](http://babeljs.cn/)
2. [Babel小书](http://guoyongfeng.github.io/my-gitbook/index.html)


[slide]


# <span class="blue">Webpack</span>

> A bundler for javascript and friends. Packs many modules into a few bundled assets.

> Webpack是一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理。

[slide]

我们一般需要创建一个`webpack.config.js`，比如这样
```
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'app/index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
      loaders: [{
          test: /\.js$/,
          loaders: ['react-hot', 'babel'],
          exclude: path.resolve(__dirname, 'node_modules')
      }]
    },
    plugins: []
};
```
[slide]


> ## 学习资料推荐
1. [Webpack官网](http://webpack.github.io/)
2. [手把手教你配置Webpack系列](http://guoyongfeng.github.io/idoc/index.html)



[slide]

# <span class="blue">在项目中使用React</span>

> 无论React火不火，我们真正最应该关心的是它能帮助我们解决哪些业务问题。


[slide]

## 我选择的理由
- **组件化**、**虚拟DOM**在**复用**以及**性能**上带来的一般好处
- React思想使得开发者之间更好的**分工与合作**，在**配合上非常顺畅**。
- **规范的接口**以及极强的约束，使得整个**代码结构清晰**，不同开发者的代码高度一致。
- **技术生态**。越来越多的开发调试工具以及JavaScript框架正在依附着react生长。
- 配合ES6的使用，可以大幅**提高编程效率**，降低很多之前的代码坑。
- 有很**优秀的开源组件库**可以使用

[slide]

## 同时也面临一些问题
- 基础组件的建设需要加强
- 服务端渲染
- 在数据层的实践经验不够

[slide]

## 一段React + ES6的普通代码
```
import React, { Component } from 'react';

class Button extends Component {
  static displayName = 'Button'

  static propTypes = {
    onClick: React.PropTypes.func
  }

  state = {
    disabled: this.props.disabled,
  }

  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    return (
      <button onClick={this.handleClick}
        disabled={this.state.disabled}
      </button>
    )
  }
}

export default Button
```

[slide]


> ## 学习资料推荐
1. [React官网](https://facebook.github.io/react/)
2. [React基础入门](http://guoyongfeng.github.io/idoc/html/React%E8%AF%BE%E7%A8%8B%E4%B8%93%E9%A2%98/React%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB.html)


[slide]

# <span class="blue">结合React-router</span>

> react-router is a complete routing library for React.


[slide]

### `app/index.js`
```
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import routes from './routes';
// Manage browser history with JavaScript
import { createHashHistory } from 'history';

const appHistory = useRouterHistory( createHashHistory )({
  queryKey: false
});

let root = document.getElementById('app');

ReactDOM.render(
  <Router
    history={appHistory}
    routes={routes}
  />, root
);
```

[slide]

### `app/routes/index.js`

```
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home, Shift, AttendancePlace} from '../containers';

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home}>
      <IndexRoute component={Shift} />
    </Route>
    <Route path="shift" component={Shift} />
    <Route path="attendancePlace" component={AttendancePlace} />
    <IndexRoute component={Home} />
    <NotFoundRoute component={NotFound} />
  </Route>
);

```
[slide]


> ## 学习资料推荐
1. [React-router on github](https://github.com/reactjs/react-router)
2. [react-router-tutorial](https://github.com/reactjs/react-router-tutorial)
3. [docs](https://github.com/reactjs/react-router/tree/master/docs)
4. [history](https://github.com/mjackson/history)

[slide]

# QAQ
[slide]
# THANKS
[slide]
[slide]
