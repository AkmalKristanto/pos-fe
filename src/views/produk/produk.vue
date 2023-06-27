<template>
  <h1>daftar produk</h1>
  <TambahProduk :trigger="trigger" @get-produk="handleProduk" />

  <div class="container">
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in get_produk" :key="index">
        <div class="row">
          <div class="col-md-2">
            <img :src="item.url_logo" :alt="item.nama_produk" class="img-fluid" />
          </div>
          <div class="col-md-10">
            <h5 class="mb-1">{{ item.nama_produk }}</h5>
            <p class="mb-0">Rp. {{ formatPrice(item.harga) }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import TambahProduk from "@/page-components/produk/tambah-produk";
  import { ref, onMounted, computed } from "vue";
  import { useStore } from "vuex";
  export default {
    name: "daftarProdukComponents",
    components: {
      TambahProduk,
    },
    setup() {
      const store = useStore();

      const trigger = ref(true);
      const handleProduk = () => {
        store.dispatch("produk/produk");
      };

      const get_produk = computed(() => {
        return store.getters["produk/getProduk"];
      });

      onMounted(() => {
        store.dispatch("produk/produk");
      });

      return { handleProduk, trigger, get_produk };
    },
  };
</script>
