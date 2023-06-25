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
      path: "/cart",
      name: "cart",
      component: () => import("@/views/menu/cart.vue"),
      meta: {
         title: "Cart",
         requiresAuth: true,
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
   {
      path: "/history",
      name: "history",
      component: () => import("@/views/menu/history.vue"),
      meta: {
         title: "History",
         requiresAuth: true,
      },
   },
   {
      path: "/history/:id_order",
      name: "history-detail",
      component: () => import("@/views/history_detail/HistoryDetail.vue"),
      meta: {
         title: "History Detail",
         requiresAuth: true,
      },
   },
   {
      path: "/settings",
      name: "settings",
      component: () => import("@/views/menu/settings.vue"),
      meta: {
         title: "Settings",
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
