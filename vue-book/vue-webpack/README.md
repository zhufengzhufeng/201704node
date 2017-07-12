# vue-webpack

> A Vue.js project

## containers是容器级组件 页面级组件
- views
- pages

> 每个页面级组件 以名字大写开头
## components基础组件 可复用
- base

## 组件的特点 可维护 可复用

## 使用less 
```
npm install less less-loader --save-dev
```


## main.js最后会打包成js文件插入到index.html


## 后台提供接口
- vue + node 前后台分离，后端只需返回对应的数据
-  /api/getSliders


## axios
- 不支持跨域，不支持jsonp，如果想支持需要在安装jsonp模块，别人写的模块
```
npm install axios --save
```
```
axios.post().then(function(res){
})
```
