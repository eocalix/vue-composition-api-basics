import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeleportSlotsView from '../views/TeleportSlotsView.vue'
import PropsEmitsView from '../views/PropsEmitsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/options-api',
      name: 'options-api',
      component: () => import('../views/OptionsAPIView.vue')
    },
    {
      path: '/composition-api',
      name: 'composition-api',
      component: () => import('../views/CompositionAPIView.vue')
    },
    {
      path: '/data-ref-reactive',
      name: 'data-ref-reactive',
      component: () => import('../views/DataRefReactiveView.vue')
    },
    {
      path: '/method-computed-watch',
      name: 'method-computed-watch',
      component: () => import('../views/MethodComputedWatchView.vue')
    },
    {
      path: '/lifecycle-hooks',
      name: 'lifecycle-hooks',
      component: () => import('../views/LifecycleHooksView.vue')
    },
    {
      path: '/directives',
      name: 'directives',
      component: () => import('../views/DirectivesView.vue')
    },
    {
      path: '/routes',
      name: 'routes',
      component: () => import('../views/RoutesView.vue')
    },
    {
      path: '/routeDetail/:id',
      name: 'routeDetail',
      component: () => import('../views/RouteDetailView.vue')
    },
    {
      path: '/lists',
      name: 'lists',
      component: () => import('../views/ListsView.vue')
    },
    {
      path: '/template-refs',
      name: 'template-refs',
      component: () => import('../views/TemplateRefsView.vue')
    },
    {
      path: '/teleport-slots',
      name: 'teleport-slots',
      component: TeleportSlotsView
    },
    {
      path: '/props-emits',
      name:'props-emits',
      component: PropsEmitsView
    }

  ]
})

export default router
