<template>
    <div>
        <div class="bord">
            <h1>{{toto.name}}</h1>
                <img :src="toto.picture"><br>
                    <router-link id="button" class="btn btn-success" to="/details">Consulter le Projet</router-link>
                    <li :class="{ active: toto.isActive }"><toggle-button :value="toto.isActive" @change="toto.isActive = !toto.isActive" :key="toto.id"/></li>
                    <h2 v-if="toto.isActive === true" class="green"> Actif </h2>
                    <h2 v-if="toto.isActive  === false" class="red"> Inactif </h2><br>
        </div>
    </div>
</template>

<script>
import detailsProject from "./detailsProject.vue";
export default {
  name: 'oneProject', 
  props:['toto'], // mot clé qui va me permettre d'acceder aux infos listeProjets.
  data () {
    return {
 
  } 
},

methods:{}


};

</script>




<style>
.bord {
  margin: 0 auto;
  margin-top: 5px;
  border-radius: 25px;
  border: 2px solid #0f0f0f;
  padding: 20px; 
  width: 500px;
  height: 200px; 

}

.green {
   color: rgb(8, 192, 8) 
}
.red {
    color: firebrick
}

#button {
  background-color: lightblue;
  font-size: 20px;
  color:blue;
  margin-top: 5%;
  
}

</style>
