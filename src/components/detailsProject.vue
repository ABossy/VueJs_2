<template>
    <div class="details">
        <h1>Details projet</h1>
        {{totoDetails.name}}<br>
         <img :src="totoDetails.picture1"><br>
         {{totoDetails.texte}}<br>
         <router-link :to="'/'"><button id="back" class="btn btn-warning">Retour</button></router-link>
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
      msg: "Details des Projets"
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
