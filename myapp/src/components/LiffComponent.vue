<template>
  <v-container>
    <v-btn block color="primary" v-on:click="openWindow">Open window</v-btn>
    <v-btn block color="primary" v-on:click="getProfile">Get profile</v-btn>
    <v-btn block color="primary" v-on:click="sendMessage">Send message</v-btn>
    <v-btn block color="primary" v-on:click="closeWindow">Close window</v-btn>

    <div>userId : {{userId}}</div>
    <div>displayName : {{displayName}}</div>
    <div>error : {{error}}</div>
  </v-container>
</template>

<script>
import liff from "liff";

export default {
  data: () => ({
    userId: "",
    displayName: ""
  }),
  beforeCreate: function() {
    liff.init(
      data => {
        console.log("LIFF initialization succeeded.");
        console.log(data);
      },
      err => {
        this.error = `${err.code}:${err.message}`;
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
      });
    },
    sendMessage: function() {
      liff.sendMessages([{ type: "text", text: "Hello, World!" }]).then(() => {
        console.log("message sent");
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
