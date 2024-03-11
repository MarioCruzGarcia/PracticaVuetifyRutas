import { createRouter, createWebHistory } from "vue-router";
import inicio from "../views/Inicio.vue";
import Perfil from "../views/Perfil.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Inicio",
      component: inicio,
    },
    {
      path: "/perfil/:id",
      name: "Perfil",
      component: Perfil,
      props: true,
    },
    
  ],
});

export default router;
