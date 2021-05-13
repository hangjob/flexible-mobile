const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin"); // 开启压缩

const isProduction = process.env.NODE_ENV === "production";

function resolve(dir) {
    return path.join(__dirname, dir);
}
const multiple = require("./src/build/multiple.js");
const proxyApis = require("./src/build/api.setting.js");

module.exports = {
    lintOnSave: false,
    pages: multiple,
    productionSourceMap: true,
    publicPath: "./",
    transpileDependencies: [],
    chainWebpack: (config) => {
        config.resolve.alias.set("@", resolve("src"));
        config.entry("main").add("babel-polyfill");
    },
    configureWebpack: (config) => {
        const plugins = [];
        if (isProduction) {
            plugins.push(
                new CompressionWebpackPlugin({
                    filename: "[path].gz[query]",
                    algorithm: "gzip",
                    test: /\.(js|css)$/, // 匹配文件名
                    threshold: 10000, // 对超过10k的数据压缩
                    deleteOriginalAssets: false, // 删除源文件
                    minRatio: 0.8, // 压缩比
                })
            );
        }
        return { plugins };
    },
    configureWebpack: {
        devtool: "source-map",
    },
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
    devServer: {
        open: false, // 自动启动浏览器
        host: "0.0.0.0", // localhost
        port: 9044, // 端口号
        https: false,
        hotOnly: false,
        inline: false,
        disableHostCheck: true,
        proxy: proxyApis,
    },
};
