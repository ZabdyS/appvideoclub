// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/mantenimientos/turnos',
    name: 'Turnos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Turnos.vue'),
  },
  {
    path: '/mantenimientos/idiomas',
    name: 'Idiomas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Idiomas.vue'),
  },
  {
    path: '/mantenimientos/generos',
    name: 'Generos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Generos.vue'),
  },
  {
    path: '/mantenimientos/tipos-articulos',
    name: 'Tipos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Tipos.vue'),
  },
  {
    path: '/mantenimientos/roles',
    name: 'Roles',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Rol.vue'),
  },
  {
    path: '/mantenimientos/articulos',
    name: 'Articulos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Articulos.vue'),
  },
  {
    path: '/mantenimientos/clientes',
    name: 'Clientes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Clientes.vue'),
  },
  {
    path: '/mantenimientos/empleados',
    name: 'Empleados',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Empleados.vue'),
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
