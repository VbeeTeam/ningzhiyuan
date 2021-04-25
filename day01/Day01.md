# Day01  开班  

## Web前端实训安排 （B2C商城）

- 第一天：vue路由、组件、Vuex基础回顾、在线商城页面还原
- 第二天：在线商城逻辑功能实现
- 第三天：项目实战及项目汇报
- 项目考核：平时成绩+项目成绩+演讲能力

一、O2O商城系统模式

是指在线离线或者线上到线下的一种模式，使企业可以通过互联网将线下的商务机会和线上结合，让线上成为线下交易的平台。作为线下商务与互联网相结合的新模式，O2O模式解决了传统行业的电子商务问题。O2O模式能否成功在很大程度上取决于企业的线下能力。目前比较有代表性的企业有美团和饿了么两个平台。

二、B2C商城系统模式

B2C是最典型的商城模式，即企业直接面向消费者的模式。使用B2C这种商城系统的企业一般都有自己的货源，在商城上销售自己的产品，树立自己的品牌，具有代表性的企业是苏宁商城。

三、B2B商城系统模式

B2B模式是指企业与企业之间通过互联网进行产品、服务和信息交流的商业模式，主要是批发采购。网上B2B商城是一个可以将企业内网与客户紧密结合的平台。是电子商务中历史最长，最完善的商业模式。典型的代表企业是阿里巴巴。

四、B2B2C商城系统模式

第一个B是指货物或服务的供应商。第二个B是指从事电子商务的企业，C指消费者。

B2B2C商城系统又称多用户商城系统。以京东、天猫商城为例。

## 前端技术栈



![](C:\Users\susu\Desktop\温州商学院\day01\img\微信图片_20210327203659.png)





## 开发工具的使用

### 1.Vscode的下载、安装

（1）官网https://code.visualstudio.com/Download下载最新版   最好下载zip格式

（2）解压到非系统盘，文件夹最好不要出现中文和空格，我解压到D:\VSCode-win32-x64-1.31.1，直接运行code.exe即可

### 2.安装常用插件

- Chinese (Simplified) Language：中文（简体）语言包为 VS Code 提供本地化界面

- html CSS Support ：提供基础的语法知识编写辅助

- Open-In-Browser：在vscode中打开浏览器访问

- Prettier - Code formatter:格式化代码

- Beautify：美化代码

## Nodejs

- JavaScript是什么？ 

- JavaScript可以运行在哪里？ 

  - JavaScript一种在浏览器中解释运行的脚本语言，它的解释器被称为JavaScript引擎，为浏览器的一部分，是广泛用于

  客户端的脚本语言，最早是在HTML网页上使用，用来给HTML（HTML5）网页增加动态功能

## Node.js的诞生

- 作者Ryan Dahl 瑞恩·达尔
  + 2004 纽约 读数学博士 
  + 2006 退学到智利 转向开发 
  + 2009.5对外宣布node项目，年底js大会发表演讲 
  + 2010 加入Joyent云计算公司 
  + 2012 退居幕后

> 1.简单的说 Node.js 就是运行在服务端的 JavaScript。
>
> 2.Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。
>
> 3.Node.js是一个事件驱动I/O的服务端JavaScript环境（由C++编写），基于Google的V8引擎设计，V8引擎执行Javascript的速度非常快，性能非常好。

## Node.js可以用来做什么？

- 具有复杂逻辑的动态网站 
- WebSocket服务器 
- 命令行工具 
- 带有图形界面的本地应用程序 
- ......

## Node.js开发环境准备

1. 普通安装方式[官方网站](https://nodejs.org/zh-cn/)

2. 配置环境变量

   （1）node.js的msi包是一路next就可以了

   （2）安装完后，可以在命令行中输入node -v 来查看安装版本和是否安装成功，再输入npm-v查看npm模块是否正常

   （3）配置npm的全局模块（新建文件夹node_global、node_cache）

     npm config set prefix "D:\nodejs\node_global"  》模块配置位置
     npm config set cache "D:\nodejs\node_cache"   》缓存文件

   （4）配置环境变量

   进入环境变量对话框，在【系统变量】下新建【NODE_PATH】，输入D:\nodejs\node_global\node_modules

   将【用户变量】下的【Path】修改为 D:\nodejs\node_global

   (6) 配置完后，安装个module测试下，我们就安装最常用的express模块，打开cmd窗口输入命令，进行模块的全局安装

   npm install express -g      # -g是全局安装的意思

## Vue-cli的使用

https://cn.vuejs.org/

### 1.vue脚手架搭建

### 2.vue路由基础复习

### 3.vue组件基础复习

### 4.vuex的基本使用

- state：存储状态（变量）
- getters：对数据获取之前的再次编译，可以理解为state的计算属性。我们在组件中使用 $sotre.getters.fun()
- mutations：修改状态，并且是同步的。在组件中使用$store.commit('',params)。这个和我们组件中的自定义事件类似。
- actions：异步操作。在组件中使用是$store.dispath('')
- modules：store的子模块，为了开发大型项目，方便状态管理而使用的。

 ```js

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
     mutationsAddCount(state, n = 0) {
        return (state.count += n)
    },
    mutationsReduceCount(state, n = 0) {
        return (state.count -= n)
    }
  },
  actions: {
      actionsAddCount(context, n = 0) {
        console.log(context)
        return context.commit('mutationsAddCount', n)
      },
      actionsReduceCount({ commit }, n = 0) {
        return commit('mutationsReduceCount', n)
      }
  },
    getters:{//计算属性，用于对store中的数据进行处理形成新的数据,不会修改数据源
        getterCount(state) {
       	 return "当前的数据是" + state.count
   		}
    },
  modules: {//方便管理。配置公共模块
  }
})

 ```

```js
 <h3>{{$store.state.count}}</h3>
<h3>{{$sotre.getters.getterCount}}</h3>
methods: {
    handleAddClick(n){
      this.$store.commit('mutationsAddCount',n);
    },
    handleReduceClick(n){
      this.$store.commit('mutationsReduceCount',n);
    }
  }
methods:{
handleActionsAdd(n){
      this.$store.dispatch('actionsAddCount',n)
    },
    handleActionsReduce(n){
      this.$store.dispatch('actionsReduceCount',n)
    }
}


```



## 商城页面还原

### 1.配置Vant-ui

https://vant-contrib.gitee.io/vant/#/zh-CN/

### 2.还原页面