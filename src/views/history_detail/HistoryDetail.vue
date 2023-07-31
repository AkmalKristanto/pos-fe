<template>
  <div class="content">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'history' }">History</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Order Details</li>
        </ol>
      </nav>
      <div class="divider my-2"></div>
      <div class="d-flex align-items-center justify-content-between gap-2 mb-2">
        <p class="m-0 sub">Order No.</p>
        <p class="m-0">{{ detail.no_order }}</p>
      </div>
      <div class="d-flex align-items-center justify-content-between gap-2 mb-2">
        <p class="m-0 sub">Order Type</p>
        <p class="m-0">{{ detail.type_order }}</p>
      </div>
      <div class="d-flex align-items-center justify-content-between gap-2 mb-2">
        <p class="m-0 sub">Order Time</p>
        <p class="m-0">{{ detail.created_at }}</p>
      </div>
      <div class="d-flex align-items-center justify-content-between gap-2 mb-2">
        <p class="m-0 sub">Cashier Name</p>
        <p class="m-0">Cashier A</p>
      </div>
      <div class="d-flex align-items-center justify-content-between gap-2">
        <p class="m-0 sub">Payment Method</p>
        <p class="m-0">{{ detail.payment_method }}</p>
      </div>
      <div class="divider my-2"></div>
      <h6 class="text-start fw-semibold mb-2">Items</h6>
      <div
        v-for="(item, index) in detail.item"
        :key="index"
        class="d-flex gap-2 align-items-center justify-content-between mb-3"
      >
        <div class="text-start">
          <p class="m-0">
            {{ item.nama_produk }} •
            <span class="sub sub-text">{{ item.nama_varian }}</span>
          </p>
          <p class="m-0 sub sub-text">{{ item.nama_add_on }}</p>
        </div>
        <p class="m-0 sub">{{ item.qty }}x</p>

        <p class="m-0 sub">Rp. {{ formatPrice(item.harga) }}</p>
        <p class="m-0">Rp. {{ formatPrice(item.harga_total) }}</p>
      </div>
      <div>
        <div class="divider mb-1"></div>
        <div class="d-flex align-items-center justify-content-between">
          <p class="m-0">Sub Total</p>
          <p class="m-0">Rp. {{ formatPrice(detail.jumlah) }}</p>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <p class="m-0 ps-4">Tax</p>
          <p class="sub m-0">Rp. {{ detail.tax }}</p>
        </div>
        <div class="d-flex align-items-center justify-content-between mb-2">
          <p class="m-0 ps-4">Services</p>
          <p class="sub m-0">Rp {{ formatPrice(detail.service) }}</p>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <p class="m-0">Total</p>
          <p class="m-0">Rp. {{ formatPrice(detail.total) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { reactive, onMounted, computed } from "vue";
  import { useRoute } from "vue-router";
  import { useStore } from "vuex";
  export default {
    setup() {
      const route = useRoute();
      const store = useStore();

      const data = reactive({
        cart: [
          {
            qty: 1,
            type: "V60",
            temp: "Hot",
            add_on: "toraja, example",
            price: "20000",
          },
          {
            qty: 2,
            type: "V60",
            temp: "Cold",
            add_on: "toraja, example",
            price: "20000",
          },
        ],
      });

      const detail = computed(() => {
        return store.getters["history/getDetail"];
      });

      onMounted(() => {
        store.dispatch("history/detail", { id: route.params.id_order });
      });
      return {
        data,
        detail,
      };
    },
  };
</script>
