<template>
    <div class="details">
        <h1>Details projet</h1>
        {{toto.name}}
    </div>
</template>




<!-- DATAS-->
<script>
import oneProject from "./oneProject.vue";
export default {
    name:'detailsProject',
    props:['toto'],
    data () {
    return {

      msg: 'Details des Projets',

    }
},

}
</script>









<!--Style CSS-->
<style>

</style>
