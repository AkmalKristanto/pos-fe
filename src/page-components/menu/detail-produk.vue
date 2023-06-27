<template>
  <button
    style="display: none"
    data-bs-target="#modalCustom"
    data-bs-toggle="modal"
    id="buka"
  ></button>

  <div
    class="modal fade"
    id="modalCustom"
    tabindex="-1"
    aria-labelledby="modalCustom"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Cart</h5>
        </div>
        <div class="modal-body text-start">
          <div class="border-bottom mb-2">
            <label for="" class="form-label fw-bold">Add On</label>
            <div
              class="ms-2 mb-2 d-flex align-items-center justify-content-between"
              v-for="(item, index) in get_detail.add_on"
              :key="index"
            >
              <label class="form-check-label" for="flexRadioDefault1">
                {{ item.nama }}
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                :value="`${item.id_produk_add_on}#${item.nama}`"
                v-model="id_produk_add_on"
                checked
              />
            </div>
          </div>
          <div class="border-bottom mb-2">
            <label for="" class="form-label fw-bold">Varian</label>
            <div
              class="ms-2 mb-2 d-flex align-items-center justify-content-between"
              v-for="(item, index) in get_detail.varian"
              :key="index"
            >
              <label class="form-label" for="flexShot1"> {{ item.nama_varian }} </label>
              <input
                class="form-check-input"
                type="radio"
                name="radioShot"
                id="flexShot1"
                :value="`${item.id_produk_varian}#${item.nama_varian}`"
                v-model="id_produk_varian"
                checked
              />
            </div>
          </div>
          <div class="mb-2">
            <div class="form-group">
              <label for="additional" class="form-label">Additional</label>
              <input
                type="text"
                name="additional"
                id="additional"
                v-model="keterangan"
                class="form-control"
                placeholder="Additional"
                aria-describedby="helpId"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer w-100">
          <div class="d-flex align-items-center justify-content-end gap-2 w-100">
            <button type="button" id="close" class="btn" data-bs-dismiss="modal">
              <i class="fa-solid fa-xmark me-2"></i>Cancel
            </button>
            <button type="button" @click="simpan" class="btn btn-primary">
              <i class="fa fa-edit me-2" aria-hidden="true"></i>Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { watch, ref, computed } from "vue";
  import { useStore } from "vuex";
  import { useToast } from "vue-toastification";
  import { useRouter } from "vue-router";
  export default {
    name: "DetailProdukComponents",
    props: {
      id_produk: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      const toast = useToast();
      const store = useStore();
      const router = useRouter();

      const id = ref("");
      const id_produk_add_on = ref("");
      const id_produk_varian = ref("");
      const nama_produk = ref("");
      const harga = ref("");
      const keterangan = ref("");
      const cart = ref(JSON.parse(localStorage.getItem("posfe_cart")) || []);

      watch(
        () => props.id_produk,
        (newValue) => {
          id.value = newValue;

          detail();
          document.getElementById("buka").click();
        }
      );

      const get_detail = computed(() => {
        return store.getters["menu/getDetailProduk"];
      });

      const detail = async () => {
        store.dispatch("menu/detailProduk", { id: id.value }).then((result) => {
          harga.value = result.harga;
          nama_produk.value = result.nama_produk;
        });
      };

      const simpan = async () => {
        let addons = id_produk_add_on.value.split("#");
        let varian = id_produk_varian.value.split("#");
        const temp = {
          id_produk: id.value,
          id_produk_add_on: addons[0],
          id_produk_varian: varian[0],
          label_add_on: addons[1],
          label_varian: varian[1],
          nama_produk: nama_produk.value,
          qty: 1,
          harga: harga.value,
          harga_total: harga.value * 1,
          keterangan: keterangan.value,
        };

        cart.value.push(temp);
        localStorage.setItem("posfe_cart", JSON.stringify(cart.value));
        toast.success("berhasil add to cart!");

        reset_form();

        router.push({
          name: "cart",
        });
      };

      function reset_form() {
        id_produk_add_on.value = "";
        id_produk_varian.value = "";
        nama_produk.value = "";
        harga.value = "";
        keterangan.value = "";

        document.getElementById("close").click();
      }

      return {
        detail,
        get_detail,
        id_produk_add_on,
        id_produk_varian,
        keterangan,
        simpan,
        harga,
      };
    },
  };
</script>
