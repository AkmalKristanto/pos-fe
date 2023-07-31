import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
import Multiselect from '@vueform/multiselect'
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
export default {
  name: "ModalTambahProdukComponents",
  props: {
    trigger: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    Multiselect,
  },
  setup(props, { emit }) {
    const toast = useToast();
    const store = useStore();

    const data = reactive({
      isLoading: false,
      nama_produk: "",
      id_kategori: 1,
      temp_addon: [],
      temp_varian: [],
      add_on: [],
      varian: [],
      harga: "",
      url_logo: "",
    });

    const rules = computed(() => {
      return {
        nama_produk: {
          required: helpers.withMessage("nama produk tidak boleh kosong", required),
        },
        harga: {
          required: helpers.withMessage("harga tidak boleh kosong", required),
        },
        url_logo: {
          required: helpers.withMessage("foto produk tidak boleh kosong", required),
        },
      };
    });

    const v$ = useVuelidate(rules, data);

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

      const res_form = await v$.value.$validate();

      if (!res_form) {
        data.isLoading = false;
        return;
      }

      data.add_on = data.temp_addon.join(", ");
      data.varian = data.temp_varian.join(", ");

      store
        .dispatch("produk/tambahProduk", data)
        .then((res) => {
          document.getElementById("close").click();
          toast.success(res.message);

          data.isLoading = false
          data.nama_produk = ""
          data.id_kategori = 1
          data.temp_addon = []
          data.temp_varian = []
          data.add_on = []
          data.varian = []
          data.harga = ""
          data.url_logo = ""

          emit("get-produk", true);
        })
        .catch((error) => {
          toast.error(error);
          data.isLoading = false;
        });
    };

    return { v$, data, set_logo, save };
  },
};