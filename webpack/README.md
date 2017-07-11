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