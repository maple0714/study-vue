import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ClassStyle from './views/ClassStyle.vue';
import EventModifier from './views/EventModifier.vue';
import KeyModifier from './views/KeyModifier.vue';
import Computed from './views/Computed.vue';
import Condition from './views/Condition.vue';
import Test from './views/Test.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/eventModifier',
      name: 'eventModifier',
      component: EventModifier
    },
    {
      path: '/keyModifier',
      name: 'keyModifier',
      component: KeyModifier
    },
    {
      path: '/classStyle',
      name: 'classStyle',
      component: ClassStyle
    },
    {
      path: '/computed',
      name: 'computed',
      component: Computed
    },
    {
      path: '/condition',
      name: 'condition',
      component: Condition
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
