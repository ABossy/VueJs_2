<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <!-- Formulaire AJOUT Projet-->
     <div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  New Project
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New Project</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <div class="form-group">
                <label for="titre" class="col-form-label">Titre:</label>
                <input v-model="test.name" type="text" class="form-control" id="name">
              </div>
              <div class="form-group">
                <label for="image" class="col-form-label">Image:</label>
                    <input v-model="test.picture" type="url" class="form-control" id="image" value="https://s3.amazonaws.com/uifaces/faces/twitter/aio___/128.jpg">
            </div>
              <div class="form-group">
                    <label for="description" class="col-form-label">Description:</label>
                    <input v-model="test.description" type="text" class="form-control" id="description">
                  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" @click="addProjet()" class="btn btn-primary" data-dismiss="modal">Add</button>
      </div>
    </div>
  </div>
</div>

     </div>
    <div>
      <ul>
        <oneProject v-for="projet in projetsData" :toto="projet" :key="projet.id">
        </oneProject>
      </ul>
    </div>   
  </div>
</template>




<!-- DATAS-->
<script>
import axios from "axios";
import oneProject from "./oneProject.vue";
import detailsProject from "./detailsProject.vue";

export default {
  components: {
    oneProject: oneProject, // component de la vue oneProject que j'appelle ici.
    detailsProject: detailsProject,
    
  },
  name: "projets",
  // props: ["projetsData"],
  data() {
    return {
      msg: "LISTE DES PROJETS",
      projetsData: [],
      test: {
        name: "exemple",
        picture: "",
        description:"",
        collaborators: []
        
      }
    };
  },
  created() {
    axios
      .get(
        "https://daily-standup-campus.herokuapp.com/api/projects",
        {
            headers: {
              Authorization:
                "Bearer " +
            localStorage.getItem('userTokenKey')
              //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg"
            }
          }
      )
      .then(response => {
        console.log(response.data);
        this.projetsData = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  methods: {
    addProjet: function() {
      axios
        .post("https://daily-standup-campus.herokuapp.com/api/projects", 
         this.test,
        
        {
        headers: {
      Authorization:
        "Bearer " +
            localStorage.getItem('userTokenKey')
       
      }
    })
    
        .then(function(reponse) {
          $("#exampleModal").modal("hide");
          alert("projet creation");
        });
    } // Création d'un nouvel objet dans la collection projets.
  }
};
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

li {
  margin: 0 10px;
  border-style: solid;
}

ul {
  list-style-type: none;
  padding: 0;
}

input,
select {
  padding: 4px;
  font-size: 18px;
}

.formAdd {
  padding: 20px 0;
  margin-top: 40px;
}

.baniere {
  background-color: darkgrey;
}
</style>
