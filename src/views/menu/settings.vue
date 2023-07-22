<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="content">
    <div class="container text-start">
      <div class="d-flex gap-4 align-items-center">
        <img src="https://avatars.githubusercontent.com/u/32454728?v=4" alt="" srcset="" class="avatar-l">
        <div class="text-start">
          <h6 class="m-0">Name</h6>
          <p class="m-0">email@email.com</p>
          <div class="d-flex align-items-center gap-2 mt-2">
            <button class="btn btn-primary">Edit Profile</button>
            <button class="btn"><i class="fa fa-sign-out me-2" aria-hidden="true"></i>Sign Out</button>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div class="divider my-4"></div>
      <p class="mb-2 fw-semibold">Akun</p>
      <router-link :to="{ name: '' }" class="btn-settings">
        Ubah Profil
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </router-link>
      <router-link :to="{ name: '' }" class="btn-settings">
        Ubah Email
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </router-link>
      <router-link :to="{ name: '' }" class="btn-settings">
        Ubah Password 
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </router-link>
      <p class="mb-2 mt-5 fw-semibold">Produk</p>
      <router-link :to="{ name: 'kelola-produk' }" class="btn-settings">
        Kelola Produk
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </router-link>
      <router-link :to="{ name: '' }" class="btn-settings">
        Stok Produk
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </router-link>
      <router-link :to="{ name: '' }" class="btn-settings">
        Stok Opname
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </router-link>
      <p class="mb-2 mt-5 fw-semibold">Customer</p>
      <router-link :to="{ name: '' }" class="btn-settings">
        Kelola Customer
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </router-link>
      <router-link :to="{ name: '' }" class="btn-settings">
        Rekap Customer
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </router-link>

    </div>
  </div>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>
