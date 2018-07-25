<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">VueJS</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="/">Home</a></li>
      <li><router-link :to="{name:'projets'}">Liste des projets</router-link></li>
      <li><router-link :to="{name:'myproject'}">Mes Projets</router-link></li>
      <li><router-link :to="{name:'login'}">Login</router-link></li>
    </ul>
  </div>
</nav>
   <router-view class="container" :projetsData="listeProjets"></router-view>
  </div>
  
</template>

<script>
import oneProject from "./components/oneProject.vue";
import detailsProject from "./components/detailsProject.vue";
import myproject from "./components/myproject.vue";

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
