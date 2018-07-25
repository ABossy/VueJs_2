<template>
    <div>
        <h1>{{msg}}</h1><hr>   
            <router-link :to="'/projets'"><button id="back" class="btn btn-warning">Retour</button></router-link>
                <oneProject v-for="projet in myprojects" :toto="projet" :key="projet.id"></oneProject>                
    </div>
   
    
</template>


<!-- DATAS-->
<script>
import axios from "axios";
import oneProject from "./oneProject.vue";
import detailsProject from "./detailsProject.vue";

export default {
  name: "myproject",
  components: {
    oneProject: oneProject, // component de la vue oneProject que j'appelle ici.
     
  },
  data() {
    return {
      msg: "Mes Projets",
      myprojects: []
    };
  },

  created() {
    axios
      .get(
        "https://daily-standup-campus.herokuapp.com/api/projects?access_token=" +
          localStorage.getItem("userTokenKey")
      )

      .then(response => {
        console.log(response);
        this.myprojects = response.data;
      });
  },

  methods: {
  }
};


</script>







<!--Style CSS-->
<style>

</style>
