import { createStore } from "vuex";
import auth from "./module/auth";
import cart from "./module/cart";
import history from "./module/history";
import menu from "./module/menu";
import produk from "./module/produk";
export default createStore({
    modules: {
        auth,
        cart,
        history,
        menu,
        produk
    },
});
