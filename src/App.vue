<template>
  <div v-if="$route.meta.requiresAuth">
    <nav class="navbar navbar-expand-lg"></nav>
    <div class="content text-center container">
      <!-- Content -->
      <router-view></router-view>
      <!-- End Content -->
    </div>
    <Menu />
  </div>

  <div v-else>
    <router-view></router-view>
  </div>
</template>
<script>
  import "./index.css";
  import Menu from "@/components/layouts/menu";
  export default {
    name: "AppComponents",
    components: { Menu },
  };
</script>
