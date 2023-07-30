<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="content">
    <div class="container">
      <div class="search-sticky">
        <input type="text" v-model="search" @keyup="menu" class="form-control mb-3" placeholder="Search" />
      </div>
      <div class="row align-items-center gy-4">
        <div class="col-lg-3 col-md-6 col-6" v-for="(item, index) in get_menu" :key="index" @click="detail(item.id_produk, parseInt(item.harga))">
          <a href="#" type="button" class="p-0 text-decoration-none">
            <img v-if="item.url_logo!=null" :src="item.url_logo" :alt="item.nama_produk" class="card-img-top" />
            <div v-else class="card-img-top d-flex align-items-center justify-content-center" >{{ item.nama_produk }}</div>
            <div class="card-body text-start">
              <p class="m-0">{{ item.nama_produk }}</p>
              <p class="sub sub-text m-0 mb-2">Avocado, Cappucino, Sugar</p>
              <p class="m-0">Rp. {{ formatPrice(item.harga) }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- ADD CART -->
    <DetailProduk :id_produk="id_produk" />
    <!-- END ADD CART -->
  </div>
</template>
<script>
import DetailProduk from "@/page-components/menu/detail-produk";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "MenuComponents",
  components: {
    DetailProduk,
  },
  setup() {
    const store = useStore();

    const search = ref("");
    const id_produk = ref(0);

    const get_menu = computed(() => {
      return store.getters["menu/getMenu"];
    });

    const menu = async () => {
      store.dispatch("menu/daftarMenu", { search: search.value });
    };

    const detail = async (id) => {
      id_produk.value = id;
    };

    onMounted(() => {
      store.dispatch("menu/daftarMenu", { search: search.value });
    });
    return { get_menu, menu, search, id_produk, detail };
  },
};
</script>
