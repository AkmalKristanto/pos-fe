<template>
  <div class="content text-start">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <nav aria-label="breadcrumb m-0">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'settings' }">Settings</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Tambah Produk</li>
            </ol>
          </nav>
          <h5>Tambah Produk</h5>
        </div>
        <TambahProduk :trigger="trigger" @get-produk="handleProduk" />
      </div>
      <div class="row gy-4 mt-2">
        <div class="col-lg-6" v-for="(item, index) in get_produk" :key="index">
          <div class="d-flex align-items-center gap-4 flex-lg-row flex-column w-100">
            <img :src="item.url_logo" :alt="item.nama_produk" class="img-product" />
            <div class="bg-amber w-100">
              <h6 class="m-0 text-capitalize">{{ item.nama_produk }}</h6>
              <p class="sub sub-text m-0 mb-2">Avocado, Cappucino, Sugar</p>
              <p class="m-0">Rp. {{ formatPrice(item.harga) }}</p>
              <div class="d-flex gap-2 mt-3">
                <button @click="detail(item.id_produk)" class="btn btn-primary w-100">
                  Ubah
                </button>
                <button @click="hapus(item.id_produk)" class="btn btn-danger w-100">
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DetailProduk @get-produk="handleProduk" :id_produk="id_produk" :edit="detailProduk" />
</template>
<script>
  import TambahProduk from "@/page-components/produk/tambah-produk";
  import DetailProduk from "@/page-components/produk/edit-produk";
  import { reactive, ref, onMounted, computed } from "vue";
  import { useStore } from "vuex";
  import Swal from "sweetalert2";
  import { useToast } from "vue-toastification";
  export default {
    name: "daftarProdukComponents",
    components: {
      TambahProduk,
      DetailProduk,
    },
    setup() {
      const store = useStore();
      const toast = useToast();

      const trigger = ref(true);
      const id_produk = ref(0);

      const data = reactive({
        selected: null,
      });

      const detail = (id) => {
        id_produk.value = id;
        store.dispatch("produk/detail", { id_produk: id });
      };

      const handleProduk = () => {
        store.dispatch("produk/produk");
      };

      const hapus = (id) => {
        Swal.fire({
          icon: "info",
          title: "apa anda yakin ingin menghapus produk ini ?",
          showDenyButton: true,
          confirmButtonText: "Ya, saya yakin",
          denyButtonText: `Batalkan`,
        }).then((result) => {
          if (result.isConfirmed) {
            store
              .dispatch("produk/delete", { id_produk: id })
              .then((res) => {
                toast.success(res.message);
                store.dispatch("produk/produk");
              })
              .catch((err) => {
                toast.error(err);
              });
          }
        });
      };

      const get_produk = computed(() => {
        return store.getters["produk/getProduk"];
      });

      const detailProduk = computed(() => {
        return store.getters["produk/getProdukDetail"];
      });

      onMounted(() => {
        store.dispatch("produk/produk");
      });

      return {
        handleProduk,
        trigger,
        get_produk,
        data,
        hapus,
        detail,
        detailProduk,
        id_produk,
      };
    },
  };
</script>
