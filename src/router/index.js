import Vue from 'vue'
import Router from 'vue-router'
import projets from '@/components/projets'
import detailsProject from '@/components/detailsProject.vue';
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'projets',
      component: projets,
      //recupere component 'projets' de la vue projets

    },

    {
      path: '/details/:id',
      name: 'detailsProject',
      component: detailsProject,
      props: true
    },
  ]
})
