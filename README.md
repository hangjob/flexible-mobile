### 移动端适配

下载，安装依赖

### 安装
```js
npm i
```

### 运行

```js
npm run serve
```

### 打包

``` js
npm run build
```

### 转换Rem
在 vue.config.js 中设置
```js
css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("postcss-pxtorem")({
                        rootValue: 75, // 换算的基数 1rem = 75px 这个是根据750px设计稿来的，如果是620 的就写 62
                        // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用selectorBlackList字段，来过滤
                        //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
                        selectorBlackList: ['van-'],
                        propList: ["*"], // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
                    }),
                ],
            },
        },
    },
```

### 设置根节点字体
在main.js中引入
```js
import 'lib-flexible' 
```
### 开发

设计给的是750px的设计稿
是多少填多少，比如这个框的高度是96px就直接写96px

![微信图片_20210513095722.png](https://i.loli.net/2021/05/13/7TtzcmVKJSA8bfE.png)



