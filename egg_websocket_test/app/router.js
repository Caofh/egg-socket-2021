'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;

  // demo示例
  router.get('/', controller.demo.index);

  // 示例接口
  router.get('/front/getUserInfo', controller.front.login.getUserInfo); // 获取用户信息，返回用户信息（?openId=..... 或 ?phoneNumber=...）

  // socket.io
  // io.of('/').route('server', io.controller.home.server);

  io.of('/').route('exchange', io.controller.nsp.exchange);

  // // 这里表示对于监听到的 chat 事件，将由 app/io/controller/chat.js 处理
  // // app.io.of('/').route('chat', app.io.controller.chat);

  // // app.io.of('/')
  // io.route('chat', app.io.controller.chat.index);

  // // app.io.of('/chat')
  // io.of('/chat').route('chat', app.io.controller.chat.index);

  // io.on('connection', socket => {
  //   const data= {
  //     txt:'new user login',
  //     time:new Date()
  //   }
  //   socket.emit('connection',data);
  //  });
  // io.on('hhh', socket => {
  //   const data= '花擦泪'
  //   socket.emit('hhh',data);
  //  });

};

