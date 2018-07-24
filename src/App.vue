<template>
  <div id="app">
   <router-view class="container" :projetsData="listeProjets"></router-view>
  </div>
</template>

<script>

import oneProject from "./components/oneProject.vue";
import detailsProject from "./components/detailsProject.vue";


export default {
  name: "App",
  data() {
    return {
      listeProjets: []  
      
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
