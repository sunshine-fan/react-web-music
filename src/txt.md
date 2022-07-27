#todo 7.18
## 第一步 全局样式重置 
css重置以及公共css的抽取  github 搜素 nomalize.css
## react脚手架 默认集成eslint
## 项目中配置别名 
yarn add @craco/craco 在不暴露webpack配置的情况下给我们的i项目进行配置
## 只要是修改配置的东西 项目需要重新跑一下

## 安装 react 路由 
yarn add react-router-dom
## 安装统一管理路由的配置管理 (路由管理器？)
yarn add react-router-config
## 安装style样式  yarn add styled-components


#todo  7.19

# 在 css 样式 引入图片时 url(${require("@assets/img///")})  引入整个模块

## NavLink标签点击时会有 class=active 标签 与 aria-current="page"  我们可以利用这个active 属性 
注意：NavLink标签 设置to ='/' 默认具有 class=active aria-current="page"  设置to='./menu' 符合业务逻辑
需要解：react Component 与 memo 的区别

## 引入antd
yarn add antd

## 引入ant-design/icons 图标库
yarn add @ant-design/icons

## 在react.css 文件中  @import '~antd/dist/ant.css';

## css技巧   
 a标签内有内容 为了优化搜索 给当前a 标签 设置 text-indent：-9999px;

## 使用路由占位 控制 子路由  传入函数组件（props）  结构    const {route} = props;    {renderRoutes(route.routes)}

## yarn add axios

7.25  引入react 状态管理
## yarn add redux   react-redux   react-thunk

