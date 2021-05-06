<template>
  <div class="home">
    <div class="send" @click="send">send</div>
    <div class="close" @click="close">close</div>
    <div class="reconnect" @click="reconnect">reconnect</div>
  </div>
</template>

<script>
/* eslint-disable */

// import config from '@/config/gateway.config'
// import { initAsyn } from '@/utils/loadJs'
// import $ from 'zepto'
// console.log($)
// console.log(config)

import io from "socket.io-client";
// import { io } from "socket.io-client";

import { listPage } from "@/api/pages/home/home";

// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {};
  },
  created() {
    // initAsyn(['moment' 'eruda'], () => {
    //   console.log(moment)
    //   console.log(456)
    // })
    // console.log(123)
    //
    // console.log($)
    // listPage().then(data => {
    //   console.log(data);
    // });
    //建立websocket连接
    // const socket = io.connect("http://127.0.0.1:7001", {
    //   transports: ["websocket"], //传输方式为'websocket'
    //   query: {
    //     sessionId: "app1" //app1为房间号
    //   }
    // });
    // //收到server的连接确认
    // socket.on("open", () => {
    //   console.log("socket io is open !");
    //   // init();
    // });
  },
  mounted() {
    this.createSocket();
  },
  methods: {
    send() {
      this.socket.emit("exchange", {
        target: "exchange",
        payload: {
          msg: "test1"
        }
      });
    },
    close() {
      this.socket.disconnect();
    },
    reconnect() {
      this.createSocket();
    },
    createSocket() {
      const log = console.log;

      const socket = io("http://localhost:7001/");

      socket.on("connect", () => {
        const id = socket.id;

        log("#connect,", id, socket);

        // 监听自身 id 以实现 p2p 通讯
        socket.on(id, msg => {
          log("#receive,", msg);
        });
      });

      // 接收在线用户信息
      socket.on("online", msg => {
        log("#online,", msg);
      });
      // 系统事件
      socket.on("disconnect", msg => {
        log("#disconnect", msg);
      });

      socket.on("disconnecting", () => {
        log("#disconnecting");
      });

      socket.on("error", () => {
        log("#error");
      });

      // 接收在线用户信息
      socket.on("exchange", msg => {
        log("exchange事件");
        console.log(msg);
      });
      // 接收在线用户信息
      socket.on("hhh", msg => {
        log("hhh事件");
        console.log(msg);
      });

      this.socket = socket;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  color: #ccc;

  .img {
    width: 400px;
    height: 400px;
  }

  .test {
    width: 100%;
    height: 200px;
    @include font-all(20px, $color-font);

    transform: scale(2);
  }

  .send,
  .close,
  .reconnect {
    cursor: pointer;
  }
}
</style>
