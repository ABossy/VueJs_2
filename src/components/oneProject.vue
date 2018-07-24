<template>
    <div>
        <div class="col col-md-4 col-lg-4">
            
          <div class="bord">
            <h3>{{toto.name}}</h3><br>
                <img :src="toto.creator.picture"><br>
                    <router-link  id="button" class="btn btn-info" :to="{name:'detailsProject', params:{totoDetails:toto,id: toto.id}}">Consulter le Projet</router-link><br>
                    <p>{{toto.description}}</p>
                    <button id="back"  @click="deleteProjet(toto.id)" class="btn btn-danger">Delete</button>
          </div>
        </div>
    </div>
    
</template>

<script>
import axios from "axios";
import detailsProject from "./detailsProject.vue";
export default {
  name: "oneProject",
  props: ["toto"], // mot clé qui va me permettre d'acceder aux infos listeProjets.
  data() {
    return {
      hideOffProjet: false,
      projets: [], // au début la liste des machines est vide
      loading: false,
      error: null
    };
  },

  methods: {
    deleteProjet: function(id) {
      axios
        .delete(
          "https://daily-standup-campus.herokuapp.com/api/projects/" + id,
          {
            headers: {
              Authorization:
                "Bearer " + localStorage.getItem('userTokenKey')
                //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg"
            }
          }
        )
        .then(function(reponse) {
          alert("delete creation");
        });
    }
  }
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
  height: 850px;
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
