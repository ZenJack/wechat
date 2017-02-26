# WeChat

> 一个基于 Vue2.× 的单页面应用实例

### 安装步骤

``` bash
# 安装依赖包
npm install

# 运行实例，访问：http://localhost:8080 即可
npm run dev

# 压缩源码并打包，终极代码在 dist 目录下
npm run build

```

### 项目说明
---
#### 简要
```
这是一个模仿微信的实例。
整个实例使用了 vue2.x 开发栈的大部分技术。
包括基本的指令、vue-router、vuex等等。下面会具体说明。
```

#### 1. 微信页面
![](./docs/printscreen/wechat.gif)
```
如图所示，系统默认进入聊天页面。

本页功能：
  1. 显示当前最近聊天列表
  2. 下拉刷新列表

技术实现：
  1. 列表展示，使用 vue 内置指令 "v-for" 渲染页面，数据来自服务端。
  2. 下拉刷新，使用 better-scroll 触发下拉事件，
     调用 mint-ui 的 Indicator 显示刷新等待，当服务器返回数据关闭 Indicator
```

#### 2. 联系人列表
![](./docs/printscreen/contact.gif)
