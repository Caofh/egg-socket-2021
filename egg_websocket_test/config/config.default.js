/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1564041448006_8555';

  // 关闭csrf防御
  config.security = {
    csrf: false
  };

  // add your middleware config here
  config.middleware = [];

  config.mysql = {
    client: {
      host: '118.190.207.166', // 数据库ip：可以连接远端云服务器ip（如：12.222.222.343）
      port: '3306', // 数据库端口
      user: 'root', // 数据库user
      password: 'Cfh691073', // 数据库密码
      database: 'api_2020_test', // 数据库名称
    },
    app: true,
    agent: false,
  }

  config.bodyParser = {
    jsonLimit: '10mb',
    formLimit: '10mb',
  }

  // 代码中cors不可和nginx重复配置跨域
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  config.alinode = {
    // 从 `Node.js 性能平台` 获取对应的接入参数
    appid: '81306',
    secret: '72b775ca6630764cf3a84387042a4e5f8ef1dbd3',
  }

  // config.io = {
  //   namespace: {
  //     '/chat': {
  //         connectionMiddleware: [ 'auth' ],
  //         packetMiddleware: [ 'filter' ],
  //     },
  // }
  // }
  config.io = {
    init: { }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [ 'auth' ],
        packetMiddleware: [ ],
    },
    },
  
    // cluster 模式下，通过 redis 实现数据共享
    redis: {
      host: '127.0.0.1',
      port: 6379,
    },
  }

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
    },
  }

  return config
};





