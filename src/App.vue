<template>
  <div v-if="$route.meta.requiresAuth">
    <nav class="navbar fixed-top navbar-light bg-light p-0">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Header</a>
      </div>
    </nav>
    <div class="">
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&family=Righteous&family=Roboto:wght@100;300;400;500;700;900&display=swap');


</style>
