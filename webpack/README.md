## 安装webpack,一般采用本地安装
- 不会导致版本冲突 (开发依赖) 上线不需要

## 安装webpack
```
npm install webpack --save-dev
```

> package-lock.json不需要理会

## 创建一个webpack.config.js的文件

## 让js 转化成es5代码，需要使用babel
```
npm install babel-core babel-loader --save-dev
```

## 需要将es6-> es5
```
npm install babel-preset-es2015 --save-dev

```
## 需要将es7-> es5
```
npm install babel-preset-stage-0 --save-dev
```

## 解析css 
```
npm install css-loader style-loader --save-dev
```

## 解析less
```
npm install less less-loader --save-dev
```

## webpack服务 在内存中打包，可以时刻拿到最新的改动
```
npm install webpack-dev-server --save-dev
```
## html-webpack-plugin 插件
```
npm install html-webpack-plugin --save-dev
```
## 解析图片
```
npm install file-loader url-loader --save-dev
```

## 安装vue-cli
```
npm install vue-cli -g
```


## 没实现自动重启 需要自动重启
## 自动将src下的html打包到dist下
## 图片的问题
## vue-cli自动生成webpack，
## vue的使用方式 (1.html+ css+ js ) (2.工程化)


