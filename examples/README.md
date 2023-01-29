# 运行 vue 、 react 示例
## 1. 安装依赖
切换到对应目录。
npm i 或 yarn

## 2. 运行项目
查看 package.json 确认运行命令。

# 运行 es5 示例

更新：
```
npm init -y
npm i meta2d.js -S
```
拷贝node_modules下meta2d.js文件至es5根目录并修改在index.html的引用即可


**以下作废**
## 1. 安装全部依赖
凡是有 package.json 的地方都需要安装依赖。
npm i 或 yarn

## 2. 打包 meta2d.js
执行最外层 package.json 中的 bulid 命令。
cd 到最外层， npm run build or yarn build
若报错，可能是 node 版本问题，推荐将版本升级到 16
确保执行后 dist/meta2d/meta2d.js 存在


## 3. 运行示例项目
### es5
推荐使用 live server.