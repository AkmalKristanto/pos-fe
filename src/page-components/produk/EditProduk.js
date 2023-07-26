import { reactive, watch, computed } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
import Multiselect from '@vueform/multiselect'

export default {
  name: "ModalTambahProdukComponents",
  props: {
    id_produk: {
      type: Number,
      required: false,
    },
    edit: {
      type: Object,
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
      edit: "",
      id_produk: "",
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

    watch(
      () => [props.id_produk, props.edit],
      (newValue) => {
        data.id_produk = newValue[0]
        data.edit = newValue[1]
        // console.log(newValue[1])
        document.getElementById("bukaeditproduk").click();
      }
    );

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

    const addon = computed(() => {
      return store.getters["produk/getDetailAddon"];
    });

    return { data, tambahAddon, tambahVarian, set_logo, save, addon };
  },
};