<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="user-panel text-left">
        <router-link to="/home">Home</router-link>
        <router-link to="/second">Second Page</router-link>
      </div>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
        >Reservation Yap
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://5f6d939160cf97001641b049.mockapi.io/tkn/",
  headers: {
    "Content-type": "application/json",
  },
});

Vue.prototype.$axios = axiosInstance;

export default {
  name: "App",
  data() {
    return {
      hotel_name: [],
      errors: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.user-panel {
  height: 55px;
}
.user-panel {
  a {
    color: white;
    padding: 1rem;
    text-decoration: none;
  }
}
</style>