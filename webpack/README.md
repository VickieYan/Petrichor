# v-webpack-practice
练习使用webpack

安装
```
npm install -g webpack
```
初始化一个package.json文件
```
npm init 
```
app存放原始数据以及将来写的JavaScript模板
public存放之后供浏览器读取的文件


# webpack-dev-server 
webpack启动的一个服务器

安装
```
npm install --save-dev webpack-dev-server
```

 package.json
 ```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack",//打包
    "server": "webpack-dev-server --open"//启动服务器，实时监控数据变换
  },
 ```
 # Loader
* babel-loader
* css-loader
* style-loader
* Less Loader
* Sass Loader
* Stylus Loader

# Plugins
```
HtmlWebpackPlugin  //帮忙构建一个html引用打包好的js
Hot Module Replacement //热更新
```

# 产品阶段的构建
```
npm run build
```
