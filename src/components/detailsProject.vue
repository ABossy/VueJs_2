<template>
    <div class="details">
        <h1>{{msg}}</h1>
        <h2>{{totoDetails.name}}</h2><br>
         <img :src="totoDetails.creator.picture"><br>
         {{totoDetails.description}}<br>
         <router-link :to="'/projets'"><button id="back" class="btn btn-warning">Retour</button></router-link>
    </div>
</template>




<!-- DATAS-->
<script>
import oneProject from "./oneProject.vue";
export default {
  name: "detailsProject",
  props: ["totoDetails"],
  data() {
    return {
      msg: "Details du Projets"
    };
  }
};
</script>





<!--Style CSS-->
<style>
h1 {
  font-weight: normal;
}
.details {
  margin: 0 auto;
  margin-top: 5px;
  border-radius: 5px;
  border: 2px solid #0f0f0f;
  padding: 20px;
  width: 800px;
  height: 800px;
  background-color: lightgrey;
}


</style>
