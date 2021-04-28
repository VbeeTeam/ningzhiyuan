# [用HBuilderX 打包 vue 项目 为 App 的步骤](https://www.cnblogs.com/taohuaya/p/10263519.html)



首先打包你的 vue 项目 生成 dist 文件夹，教程请移步 https://www.cnblogs.com/taohuaya/p/10256670.html

看完上面的教程，请确保 你是 将：

项目目录下的`config`文件夹里的`index.js`文件中,将`build`对象下的`assetsPublicPath`中的`“/”`，改为`“./”后，打包生成的 dist 文件。`

 

开始使用 HBuiderX 打包。（工具下载地址：http://www.dcloud.io/）

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113174958190-1961690000.png)

 

 ![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175047258-78712569.png)

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175107529-1990089405.png)

 这是我vue 项目打包后的dist 文件。

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175128189-177809906.png)

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175147090-1271127839.png)

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175209513-349296325.png)

 

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175225224-55482666.png)

 

 

 

 

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175239034-1174053594.png)

 

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175303217-1410223127.png)

 

 

 

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175311945-672258232.png)

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175333646-1284258744.png)

 

 设置沉浸状态栏：（什么是沉浸状态栏和设置方法 请移步： http://ask.dcloud.net.cn/article/32 地址里的 http://ask.dcloud.net.cn/article/1150）![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113180101536-1914796800.png)

 上图中添加位置的代码：

```
        "statusbar": { //应用可视区域到系统状态栏下透明显示效果
            "immersed": true
        },
```

 

 

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175356382-1462189304.png)

 

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175414183-786129909.png)

 

 