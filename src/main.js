import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import { createPopper } from '@popperjs/core';
window.createPopper = createPopper;

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import "./assets/css/main.css";

import mixins from "./mixins";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VueSweetalert2);
app.use(ElementPlus);
app.use(Toast)
app.use(store);
app.use(router);
app.mixin(mixins);
app.mount('#app')
