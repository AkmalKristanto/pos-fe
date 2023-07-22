<template>
  <div class="content text-start">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <nav aria-label="breadcrumb m-0">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item"><router-link :to="{ name: 'settings' }">Settings</router-link></li>
              <li class="breadcrumb-item active" aria-current="page">Tambah Produk</li>
            </ol>
          </nav>
          <h5>Tambah Produk</h5>
        </div>
        <TambahProduk :trigger="trigger" @get-produk="handleProduk" />
      </div>
      <div class="row gy-4 mt-2">
        <div class="col-lg-6" v-for="(item, index) in get_produk" :key="index" @click="detail(item.id_produk, parseInt(item.harga))">
          <div class="d-flex align-items-center gap-4 flex-lg-row flex-column w-100">
            <img :src="item.url_logo" :alt="item.nama_produk" class="img-product" />
            <div class=" bg-amber w-100">
              <h6 class="m-0 text-capitalize">{{ item.nama_produk }}</h6>
              <p class="sub sub-text m-0 mb-2">Avocado, Cappucino, Sugar</p>
              <p class="m-0">Rp. {{ formatPrice(item.harga) }}</p>
              <div class="d-flex gap-2 mt-3">
                <button class="btn btn-primary w-100">Ubah</button>
                <button class="btn btn-danger w-100">Hapus</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TambahProduk from "@/page-components/produk/tambah-produk";
import { reactive, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "daftarProdukComponents",
  components: {
    TambahProduk,
  },
  setup() {
    const store = useStore();
    const trigger = ref(true);

    const data = reactive({
      selected: null,
    })
    const handleProduk = () => {
      store.dispatch("produk/produk");
    };

    const get_produk = computed(() => {
      return store.getters["produk/getProduk"];
    });

    onMounted(() => {
      store.dispatch("produk/produk");
    });

    return { handleProduk, trigger, get_produk, data, };
  },
};
</script>
