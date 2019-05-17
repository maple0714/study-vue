/**
 * 该模块不允许导入multiPageHelper.js
 * 因为该JS已经导入了本js
 * 如果你这么做multiPageHelper.js内将无法获取本js属性
 */

/**
 * 服务端地址
 */
// const server_path = 'http://192.168.0.111:8080/';
// const server_path = 'http://localhost:8877/';
// const server_path = 'http://localhost:8870/';
// const server_path = 'http://192.168.1.106:8080/';
const server_path = 'http://192.168.0.14:8088/';
// const server_path = 'http://localhost:8887/';
// const server_path = 'http://localhost:8081/';

const serverPath = function () {
  // return existsBasePath ? '' : server_path;
  return server_path;
}();

module.exports = {

  /**
   * 是否使用微服务
   * 如果开启了微服务,所有请求根路径应全部加上  `route-`  前缀
   * 如权限模块非微服务模式请求根路径是gar, 开启微服务模式后, 根路径为 route-gar
   * 该功能需后端配合
   */
  microService: false,

  /**
   * 服务端地址
   */
  serverPath: serverPath,

  /**
   * 使用的项目名
   * 只有使用的项目才会被编译执行
   * 如果不指定,默认编译所有项目
   */
  includeProjectNames: [
    "dms"
  ],

  /**
   * 排除的项目名
   * 被排除的项目不会被编译
   */
  excludeProjectNames: [],

  /**
   * 编译的模块名
   * 如果不指定默认编译所有模块(前提是模块所属项目被编译)
   */
  includeModuleNames: {
    dms: []
  },

  /**
   * 排除的模块名
   * 被排除的模块不会被编译
   * 可以有效提升开发编译效率
   */
  excludeModuleNames: {
    dms: []
  },

  /**
   * 使用cdn加载的第三方模块(默认使用unpkg)
   * 第三方模块的入口见 library.json文件,如果该文件内找不到对应模块的全局变量,则该模块不使用cdn
   * true - 将所有dependencies依赖转为cdn加载
   * [] - 按需指定需要转为cdn加载的模块
   * 按需时数组内可以传字符串(模块名如：weview),也可以传对象进行细节配置
   */
  cdn: false,

  /**
   * 是否已经存在根路径
   * 一般用于区分包含base标签的JSP页面和Html页面
   */
  existsBasePath: false,

  /**
   * 是否是开发环境
   * 打包时改为false
   * 用来控制如axios的代理地址映射
   * 默认根据系统环境变量来判断
   */
  development_environment: true,

  /**
   * 前端打包目标文件夹
   * 所有前端文件将会打包进该配置目录下
   */
  assetsRoot: './dist',

  /**
   * 所有页面文件所在的文件夹名
   * 如果配置为view,则页面文件将打包进 ${assetsRoot}/${assetsSubDirectory}/view 文件夹下
   */
  htmlSubDirectory: 'view'

};
