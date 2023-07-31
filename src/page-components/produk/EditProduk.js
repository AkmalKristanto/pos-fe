import { reactive, watch, ref } from "vue";
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
    const fileInput = ref(null);
    watch(
      () => [props.id_produk, props.edit],
      (newValue, oldValues) => {
        data.id_produk = newValue[0]
        data.edit = newValue[1]

        var temp = []
        var temp2 = []
        if (newValue[1] != oldValues[1]) {
          newValue[1].add_on.forEach(el => {
            let data = {
              label: el.nama,
              value: el.id_produk_add_on
            }
            temp.push(data)
          });
          data.add_on = temp
          newValue[1].varian.forEach(el => {
            let data = {
              label: el.nama_varian,
              value: el.id_produk_varian
            }
            temp2.push(data)
          });
          data.varian = temp2
        }

        document.getElementById("bukaeditproduk").click();
      }
    );

    const set_logo = async () => {
      let a = document.getElementById("url_logo");
      let b = fileInput.value.files[0];

      if (b) {
        a.src = URL.createObjectURL(b);

        const reader = new FileReader();
        var rawImg;
        reader.onloadend = () => {
          rawImg = reader.result;
          data.edit.url_logo = rawImg;
        };
        reader.readAsDataURL(b);
      }
    };

    const save = async () => {
      data.isLoading = true;
      var a = data.add_on.map(obj => obj.label);
      var b = data.varian.map(obj => obj.label);
      data.edit.add_on = a.join(",");
      data.edit.varian = b.join(",");
      store
        .dispatch("produk/ubahProduk", data.edit)
        .then((res) => {
          document.getElementById("close_update").click();
          toast.success(res.message);
          data.isLoading = false;
          emit("get-produk", true);
        })
        .catch((error) => {
          toast.error(error);
          data.isLoading = false;
        });
    };

    return { data, set_logo, save, fileInput };
  },
};