# websock：egg-websocket + vue 脚手架

## 后台socket项目(基于egg的node框架)：
### 1.后台egg-socket.io项目和前台调用socket.io-client的版本要严格对应，否则vue项目无法调用websocket接口。
```
egg-socket.io使用4.1.6版本，
需要搭配的socket.io-client的版本为2.1.1；
```

### 2.先本地安装redis：
安装redis教程：https://note.youdao.com/ynoteshare1/index.html?id=f7a3265d41ac2ab0e0b2fc75f9cbf5d0&type=note

### 3.项目中egg_websocket_test是egg的socket版本项目。

### 4.执行：
```
npm run dev_socket
```
### 5.socket接口启动成功：
![在这里插入图片描述](https://tpdoc.cn/api_2020_public/img/saveImg/553zuqdymod1620324781470.png)


## 前台vue项目：
### 1.项目中vue_websocket_test是基于vue的前台调用websocket的项目
### 2.启动项目：
```
npm run serve
```
### 3.打开两个tab，分别点击页面send、close、reconnect按钮就可以收到实时推送消息：
![在这里插入图片描述](https://tpdoc.cn/api_2020_public/img/saveImg/s7g9l6b9cuk1620324871221.png)


## 3.启动前后台项目成功。