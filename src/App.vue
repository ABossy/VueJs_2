<template>
  <div id="app">
   <router-view class="container" :toto="listeProjets"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
 listeProjets: [{
    'id': '1',
    'isActive': true,
    'picture': 'http://placehold.it/32x32',
    'name': 'ZENTURY',
    'creation': 'Sat May 25 1974 16:52:45 GMT+0100 (Central European Standard Time)'
  },
  {
    'id': '2',
    'isActive': false,
    'picture': 'http://placehold.it/32x32',
    'name': 'POLARAX',
    'creation': 'Mon Jun 27 1988 07:42:07 GMT+0200 (Central European Summer Time)'
  },
  {
    'id': '3',
    'isActive': true,
    'picture': 'http://placehold.it/32x32',
    'name': 'BICOL',
    'creation': 'Sat Feb 28 2009 15:57:42 GMT+0100 (Central European Standard Time)'
  }],
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
