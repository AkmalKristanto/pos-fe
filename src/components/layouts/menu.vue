<template>
  <div class="bnb">
    <router-link :to="{ name: 'cart' }" class="bnb-menu"><i class="fa fa-shopping-cart" aria-hidden="true"></i>
      <p class="label-bnb">Cart</p>
    </router-link>
    <router-link :to="{ name: 'menu' }" class="bnb-menu"><i class="fa fa-bars" aria-hidden="true"></i>
      <p class="label-bnb">Menu</p>
    </router-link>
    <router-link :to="{ name: 'draft' }" class="bnb-menu"><i class="fa fa-file" aria-hidden="true"></i>
      <p class="label-bnb">Draft Bill</p>
    </router-link>
    <router-link :to="{ name: 'history' }" class="bnb-menu"><i class="fa fa-history" aria-hidden="true"></i>
      <p class="label-bnb">History</p>
    </router-link>
    <router-link :to="{ name: 'settings' }" class="bnb-menu"><i class="fa fa-cog" aria-hidden="true"></i>
      <p class="label-bnb">Settings</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "MenuComponents",
};
</script>
