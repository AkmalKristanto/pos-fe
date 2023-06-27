<template>
  <a
    href="#"
    type="button"
    id="addproduk"
    class="p-0 text-decoration-none"
    data-bs-target="#tambahProduk"
    data-bs-toggle="modal"
    >tambah produk</a
  >

  <div
    class="modal fade"
    id="tambahProduk"
    tabindex="-1"
    aria-labelledby="tambahProduk"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Cart</h5>
        </div>
        <div class="modal-body text-start">
          <input
            class="form-control mt-3"
            placeholder="nama produk"
            v-model="data.nama_produk"
            type="text"
          />
          <div class="row">
            <div class="col-6">
              <input
                class="form-control mt-3"
                placeholder="add on"
                v-model="data.temp_addon"
                type="text"
              />
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-primary mt-3" @click="tambahAddon">
                + tambah
              </button>
            </div>
          </div>
          <span
            v-show="data.add_on.length > 0"
            v-for="(item, index) in data.add_on"
            :key="index"
            class="badge badge-warning mt-3 text-dark"
            >{{ item }}</span
          >

          <div class="row">
            <div class="col-6">
              <input
                class="form-control mt-3"
                placeholder="varian"
                type="text"
                v-model="data.temp_varian"
              />
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-primary mt-3" @click="tambahVarian">
                + tambah
              </button>
            </div>
          </div>
          <span
            v-show="data.varian.length > 0"
            v-for="(item, index) in data.varian"
            :key="index"
            class="badge badge-warning mt-3 text-dark"
            >{{ item }}</span
          >
          <input
            class="form-control mt-3"
            placeholder="harga"
            v-model="data.harga"
            type="text"
          />
          <input
            class="form-control mt-3"
            placeholder="harga"
            id="url_logo"
            type="file"
            @change="set_logo"
          />
          <div class="text-center mt-4">
            <img
              v-show="data.url_logo != ''"
              :src="data.url_logo"
              :alt="data.nama_produk"
              :height="200"
              :width="200"
            />
          </div>
        </div>
        <div class="modal-footer w-100">
          <div class="d-flex align-items-center justify-content-end gap-2 w-100">
            <button type="button" id="close" class="btn" data-bs-dismiss="modal">
              <i class="fa-solid fa-xmark me-2"></i>Cancel
            </button>
            <button type="button" class="btn btn-primary" @click="save">
              <i class="fa fa-edit me-2" aria-hidden="true"></i>Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { reactive } from "vue";
  import { useStore } from "vuex";
  import { useToast } from "vue-toastification";
  export default {
    name: "ModalTambahProdukComponents",
    props: {
      trigger: {
        type: Boolean,
        required: false,
      },
    },
    setup(props, { emit }) {
      const toast = useToast();
      const store = useStore();

      const data = reactive({
        isLoading: false,
        nama_produk: "",
        id_kategori: 1,
        temp_addon: "",
        temp_varian: "",
        add_on: [],
        varian: [],
        harga: "",
        url_logo: "",
      });

      const tambahAddon = async () => {
        data.add_on.push(data.temp_addon);
        data.temp_addon = "";
      };

      const tambahVarian = async () => {
        data.varian.push(data.temp_varian);
        data.temp_varian = "";
      };

      const set_logo = async () => {
        let a = document.getElementById("url_logo");
        let b = document.getElementById("url_logo").files[0];
        const [file] = a.files;
        if (file) {
          a.src = URL.createObjectURL(file);

          const reader = new FileReader();
          var rawImg;
          reader.onloadend = () => {
            rawImg = reader.result;
            data.url_logo = rawImg;
          };
          reader.readAsDataURL(b);
        }
      };

      const save = async () => {
        data.isLoading = true;
        data.add_on = data.add_on.join(", ");
        data.varian = data.varian.join(", ");
        store
          .dispatch("produk/tambahProduk", data)
          .then((res) => {
            document.getElementById("close").click();
            toast.success(res.message);
            data.isLoading = false;
            emit("get-produk", true);
          })
          .catch((error) => {
            toast.error(error);
            data.isLoading = false;
          });
      };

      return { data, tambahAddon, tambahVarian, set_logo, save };
    },
  };
</script>
