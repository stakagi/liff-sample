<template>
  <v-container>
    <v-btn block color="primary" v-on:click="openWindow">Open window</v-btn>
    <v-btn block color="primary" v-on:click="getProfile">Get profile</v-btn>
    <v-btn block color="primary" v-on:click="sendMessage">Send message</v-btn>
    <v-btn block color="primary" v-on:click="closeWindow">Close window</v-btn>

    <div>userId : {{userId}}</div>
    <div>displayName : {{displayName}}</div>
    <div>message : {{message}}</div>
  </v-container>
</template>

<script>
import liff from "liff";

export default {
  data: () => ({
    userId: "",
    displayName: "",
    message: ""
  }),
  beforeCreate: function() {
    liff.init(
      data => {
        console.log("LIFF initialization succeeded.");
        console.log(data);
      },
      err => {
        this.message = `${err.code}:${err.message}`;
      }
    );
  },
  methods: {
    openWindow: function() {
      liff.openWindow({
        url: "https://line.me/ja/",
        external: true
      });
    },
    getProfile: function() {
      liff.getProfile().then(profile => {
        this.userId = profile.userId;
        this.displayName = profile.displayName;
      }).catch(err=>{
        this.message = `${err.code}:${err.message}`;
      });
    },
    sendMessage: function() {
      liff.sendMessages([{ type: "text", text: "Hello, World!" }]).then(() => {
        console.log("message sent");
      }).catch(err=>{
        this.message = `${err.code}:${err.message}`;
      });
    },
    closeWindow: function() {
      liff.closeWindow();
    }
  }
};
</script>

<style>
</style>
