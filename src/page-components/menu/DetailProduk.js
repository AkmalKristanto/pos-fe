import { reactive, watch, ref, computed } from "vue";
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

    const data = reactive({
      qty: 0,
    });

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

    function incrementQty() {
      data.qty = data.qty + 1;
    }
    function decrementQty() {
      if (data.qty > 0) {
        data.qty = data.qty - 1;
      }
    }

    return {
      incrementQty,
      decrementQty,
      data,
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
