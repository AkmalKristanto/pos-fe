<template>
  <div class="bnb">
    <router-link :to="{name:'cart'}"  class="box"
      ><i class="fa fa-shopping-cart" aria-hidden="true"></i>
      <p class="label-bnb">Cart</p>
    </router-link>
    <router-link :to="{name:'menu'}" class="box"
      ><i class="fa fa-bars" aria-hidden="true"></i>
      <p class="label-bnb">Menu</p>
    </router-link>
    <router-link :to="{name:'history'}" class="box"
      ><i class="fa fa-history" aria-hidden="true"></i>
      <p class="label-bnb">History</p>
    </router-link>
    <router-link :to="{name:'settings'}" class="box"
      ><i class="fa fa-cog" aria-hidden="true"></i>
      <p class="label-bnb">Settings</p>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: "MenuComponents",
  };
</script>
