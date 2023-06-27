import { createStore } from "vuex";
import auth from "./module/auth";
import menu from "./module/menu";
import produk from "./module/produk";
export default createStore({
    modules: {
        auth,
        menu,
        produk
    },
});
