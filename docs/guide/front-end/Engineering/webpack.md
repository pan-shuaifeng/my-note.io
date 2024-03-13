#  webpack
## 安装本地依赖
```shell
 npm install webpack webpack-cli -D # 安装到本地依赖
```
## 打包项目
```shell
npx webpack
```

## Loader
```shell
npm install css-loader -D //处理css
npm install style-loader -D //将处理好的css加载到style标签上
npm install postcss-loader postcss -D //兼容css 添加厂商前缀
npm install postcss postcss-loader postcss-preset-env -D //兼容css 添加厂商前缀报错使用这个命令
npm install less-loader -D //less
npm install sass-loader node-sass //sass
npm install file-loader -D //解决图片引入问题 将图片copy到指定目录 默认为dist


```
## plugin
``` shell
npm install html-webpack-plugin -D //js或者css自动引入到html模板中
npm install clean-webpack-plugin -D //每次打包前将dist目录清空
npm install mini-css-extract-plugin -D //以css文件方式引入到页面上

```
## 区分环境
```shell   
npm install cross-env -D
```
```json
"scripts": {
    "dev": "cross-env NODE_ENV=dev webpack serve --mode development", 
    "test": "cross-env NODE_ENV=test webpack --mode production",
    "build": "cross-env NODE_ENV=prod webpack --mode production"
  },
```
## 启动devServer
```shell
npm intall webpack-dev-server@3.11.2 -D
```


## 完整配置
```json



```


