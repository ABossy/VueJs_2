<template>
    <div>
        <div class="col col-md-4 col-lg-4">
        <div class="bord">
            <h1>{{toto.name}}</h1><br>
                <img :src="toto.picture"><br>
                    <router-link  id="button" class="btn btn-info" :to="{name:'detailsProject', params:{totoDetails:toto,id: toto.id}}">Consulter le Projet</router-link><br>
                    <li :class="{ active: toto.isActive }"><toggle-button :value="toto.isActive" @change="toto.isActive = !toto.isActive" :key="toto.id"/></li>
                    <h2 v-if="toto.isActive === true" class="green"> Actif </h2>
                    <h2 v-if="toto.isActive  === false" class="red"> Inactif </h2><br>
                    </div>
        </div>
    </div>
</template>

<script>
import detailsProject from "./detailsProject.vue";
export default {
  name: "oneProject",
  props: ["toto"], // mot clé qui va me permettre d'acceder aux infos listeProjets.
  data() {
    return {};
  },

  methods: {}
};
</script>




<style>
.bord {
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 2px solid #0f0f0f;
  padding: 20px;
  width: 300px;
  height: 600px;
}

.green {
  color: rgb(8, 192, 8);
}
.red {
  color: firebrick;
}

#button {
  font-size: 15px;
  color: white;
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
