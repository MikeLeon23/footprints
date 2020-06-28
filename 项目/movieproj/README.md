# movieproj

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
movieproj                                // 
├─ babel.config.js                       // 
├─ package.json                          // 
├─ package-lock.json                     // 
├─ README.md                             // 
├─ public                                // 
│  ├─ favicon.ico                        // 
│  └─ index.html                         // 
└─ src                                   // 源码目录
   ├─ App.vue                            // 页面入口文件
   ├─ main.js                            // 程序入口文件，加载各种公共组件
   ├─ assets                             // 静态资源
   │  ├─ css                             // 样式文件目录
   │  └─ image                           // 图片目录
   ├─ common                             // 公共js目录
   │  ├─ const.js                        // 公共常量
   │  └─ utils.js                        // 公共函数
   ├─ components                         // 组件目录
   │  ├─ common                          // 各个项目之间可以通用的组件
   │  └─ content                         // 业务相关的组件，本项目中可以共用
   ├─ network                            // 封装的网络相关的api
   ├─ router                             // 路由
   ├─ store                              // vuex数据仓库
   └─ views                              // 所有子页面文件夹目录
      ├─ home                            // 首页
      │  ├─ childComponents              // 
      │  └─ Home.vue                     // 
      ├─ category                        // 分类页面
      │  ├─ childComponents              // 
      │  └─ Category.vue                 // 
      ├─ goodsDetail                     // 商品详情页 
      │  ├─ childComps                   // 
      │  └─ goodsDetail.vue              // 
      ├─ shopcart                        // 购物车
      │  ├─ childComponents              // 
      │  └─ Shopcart.vue                 // 
      └─ profile                         // 个人中心
         ├─ childComponents              // 
         └─ Profile.vue                  // 

```