<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <ul>
   <oneProject v-for="projet in toto" :toto="projet" :key="projet.id"
    v-if="!hideOffProjets || toto.isActive"></oneProject>
   </ul>
     <!-- Formulaire AJOUT Projet-->
  <form @submit.prevent="addMachine" class="form">
      <input type="text" placeholder="Nom du Projet" v-model="exemple.name">
      <select name="status" v-model="exemple.isActive">
        <option v-bind:value="true">ON</option>
        <option v-bind:value="false">OFF</option>
      </select>
      <input type="submit" value="Ajouter">
    </form>
  </div>
</template>




<!-- DATAS-->
<script>
import oneProject from "./oneProject.vue";
import detailsProject from "./detailsProject.vue";

export default {
  components:{
 "oneProject": oneProject, // component de la vue oneProject que j'appelle ici.
 "detailsProject": detailsProject
  },
  name: 'projets',
  props:['toto'],
  data () {
    return {

      msg: 'Liste des Projets',
      hideOffProjets: false,
       exemple: {
        id:3,
        name: '', 
        isActive: true
      },

    
    
  } 
},

methods:{
 // Création d'un nouvel objet dans la collection machines
addMachine: function(e) {
    this.exemple.id += 1
    this.listeProjets.push({ id: this.exemple.id,
                        name: this.exemple.name,
                        isActive: this.exemple.etat
                         });
    }
  }
 


}

</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  
}

li {
  margin: 0 10px;
  border-style:solid;
}
a {
  color: #42b983;
}
.color {
  color: rgb(32, 190, 18);
}
.form {
    background-color: #35485d;
    padding: 20px 0;
    margin-top: 40px;
}  

ul {
  list-style-type: none;
  padding: 0;
}

input, select {
      padding: 4px;
      font-size: 18px;
    }




</style>
