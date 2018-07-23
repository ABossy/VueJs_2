<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <!-- Formulaire AJOUT Projet-->
     <div class="baniere">
  <form @submit.prevent="addMachine">
      <input type="text" placeholder="Nom du Projet" v-model="exemple.name" id="addInput">
      <select name="status" v-model="exemple.isActive">
        <option v-bind:value="true">ON</option>
        <option v-bind:value="false">OFF</option>
      </select>
      <input type="submit" value="Ajouter">
    </form>
      <ul>
   <oneProject v-for="projet in projetsData" :toto="projet" :key="projet.id"
    v-if="!hideOffProjets || toto.isActive"></oneProject>
   </ul>
  </div>
</div>
  
    
</template>




<!-- DATAS-->
<script>
import oneProject from "./oneProject.vue";
import detailsProject from "./detailsProject.vue";

export default {
  components: {
    oneProject: oneProject, // component de la vue oneProject que j'appelle ici.
    detailsProject: detailsProject
  },
  name: "projets",
  props: ["projetsData"],
  data() {
    return {
      msg: "LISTE DES PROJETS",
      hideOffProjets: false,
      exemple: {
        id: 3,
        name: "",
        picture: "https://picsum.photos/200/300/?random",
        isActive: true
      }
    };
  },

  methods: {
    // Création d'un nouvel objet dans la collection machines
    addMachine: function(e) {
      this.exemple.id += 1;
      this.projetsData.push({
        id: this.exemple.id,
        isActive: this.exemple.isActive,
        name: this.exemple.name,
        picture: "https://picsum.photos/200/300/?random",
        picture1: "https://picsum.photos/200/300/?random",
        texte:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
      });
    }
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
  background-color: darkgrey
}
</style>
