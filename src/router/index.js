import { createRouter, createWebHistory } from "vue-router";
// import store from "@/store";
const routes = [
   {
      path: "/",
      name: "login",
      component: () => import("@/views/auth/login.vue"),
      meta: {
         title: "Login",
         requiresAuth: false,
      },
   },
   {
      path: "/menu",
      name: "menu",
      component: () => import("@/views/menu/menu.vue"),
      meta: {
         title: "Menu",
         requiresAuth: true,
      },
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
   linkActiveClass: "router-link-active",
});

// const DEFAULT_TITLE = "POS";

export default router;
