/*!
 * Title: 
 * Description:
 * author: Sev7en
 * date: 2019/5/16
 * version: v1.0
 */
const goods = require("./data/goods.json");
const ratings = require("./data/ratings.json");
const seller = require("./data/seller.json");
const AxiosConfig = require("./config/axios.js");

module.exports = {
    // 根路径
    publicPath: '/',
    // 构建输出目录
    outputDir: 'dist',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'assets',
    // 是否开启eslint保存检测，有效值：true || false || 'error'
    lintOnSave: false,

    devServer: {
        // 自动打开页面
        open: false,
        // 主机名称 localhost || 127.0.0.0
        host: "localhost",
        // 端口号
        port: 8081,
        // 默认情况下，dev-server通过HTTP提供服务。也可以选择带有HTTPS的HTTP/2提供服务，启用后浏览器会有警告
        https: false,
        // 某些模块不支持热更新的情况下，会自动刷新页面
        hot: true,
        // 某些模块不支持热更新的情况下，不会刷新页面，而是在控制台输出热更新失败
        hotOnly: false,
        // 允许使用外网访问
        disableHostCheck: true,
        // 与监视文件相关的控制选项。webpack 使用文件系统(file system)获取文件改动的通知。在某些情况下，不会正常工作。、
        watchOptions: {
            poll: false
        }
        // 配置跨域
        // proxy: {
            // ...AxiosConfig.getProxys(),
            // "/api": {
            //     target: "http://192.168.0.14:8088/",
            //     pathRewrite: {"^/api" : ""}
            // },
            // quiet: true, // necessary for FriendlyErrorsPlugin
            // before(app) {
            //     // http://localhost:8081/api/goods
            //     app.get("/api/goods", (req, res) => {
            //         res.json(goods);
            //     });
            //
            //     app.get("/api/ratings", (req, res) => {
            //         res.json(ratings);
            //     });
            //
            //     app.get("/api/seller", (req, res) => {
            //         res.json(seller);
            //     });
            // },
            // '/api': {
            //     target: 'http//localhost:5000/api/',
            //     ws: true,
            //     changOrigin: true,
            //     pathRewrite: {
            //         '^/api': ''
            //     }
            // },
            // before(app) {
            //     // http://localhost:8081/api/goods
            //     app.get("/api/goods", (req, res) => {
            //         res.json(goods);
            //     });
            //
            //     app.get("/api/ratings", (req, res) => {
            //         res.json(ratings);
            //     });
            //
            //     app.get("/api/seller", (req, res) => {
            //         res.json(seller);
            //     });
            // }
        // }
    }
};