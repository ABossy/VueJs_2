import Vue from 'vue'
import Router from 'vue-router'
import projets from '@/components/projets'
import detailsProject from '@/components/detailsProject.vue';
import login from '@/components/login';
import myproject from '@/components/myproject';
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
     
    },
    
    {
      path: '/projets',
      name: 'projets',
      component: projets,
    

    },

    {
      path: '/details/:id',
      name: 'detailsProject',
      component: detailsProject,
      props: true
    },

    {
      path: '/myproject',
      name: 'myproject',
      component: myproject,
      
    },
  ]
})
