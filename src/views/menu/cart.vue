<template>
  <div class="content">
    <div class="container">
      <div
        class="d-flex align-items-center justify-content-between border-bottom py-1 mb-4"
      >
        <a href="#" type="button">New Customer<i class="fas fa-edit ms-2"></i></a>
        <div class="dropdown">
          <a
            class="dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span v-if="status == 1">Dine In</span>
            <span v-else-if="status == 2">Take Away</span>
            <span v-else>-</span>
          </a>
          <ul class="dropdown-menu text-start">
            <li @click="status = 1"><button class="dropdown-item">Dine In</button></li>
            <li @click="status = 2"><button class="dropdown-item">Take Away</button></li>
          </ul>
        </div>
      </div>
      <p v-if="cart.length == 0">Tidak Ada Produk</p>
      <div v-else class="cart-content overflow-y-auto">
        <div
          v-for="(item, index) in cart"
          :key="index"
          class="d-flex gap-2 align-items-center justify-content-between mb-3"
        >
          <div class="d-flex gap-3 align-items-center">
            <div class="border p-1 rounded-1">
              <p class="m-0 sub">{{ item.qty }}x</p>
            </div>
            <div class="text-start">
              <p class="m-0">
                {{ item.nama_produk }} •
                <span class="sub sub-text">{{ item.label_varian }}</span>
              </p>
              <p class="m-0 sub sub-text">{{ item.label_add_on }}</p>
            </div>
          </div>
          <div class="d-flex align-items-center justify-end gap-4">
            <p class="m-0 sub">Rp. {{ formatPrice(item.harga) }}</p>
            <p class="m-0">Rp. {{ formatPrice(item.harga_total) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="summary">
    <div v-show="cart.length > 0" class="container">
      <div class="divider mb-1"></div>
      <div class="d-flex align-items-center justify-content-between">
        <p class="m-0">Sub Total</p>
        <p class="m-0">Rp. {{ formatPrice(subtotal) }}</p>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <p class="m-0 ps-4">Tax</p>
        <p class="sub m-0">0</p>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <p class="m-0 ps-4">Services</p>
        <p class="sub m-0">0</p>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <p class="m-0">Total</p>
        <p class="m-0">Rp. {{ formatPrice(total) }}</p>
      </div>
    </div>

    <div class="d-flex align-items-center">
      <button class="btn w-100" :class="[{ disable: cart.length <= 0 }]">
        Draft Bill
      </button>
      <button
        @click="clearBill"
        class="btn w-100"
        :class="[{ disable: cart.length <= 0 }]"
      >
        Clear Bill
      </button>
    </div>
    <button class="btn btn-primary w-100" :class="[{ disable: cart.length <= 0 }]">
      Check Out
    </button>
  </div>
</template>
<script>
  import { ref, onMounted } from "vue";
  import { useToast } from "vue-toastification";
  import Swal from "sweetalert2";
  export default {
    name: "MenuComponents",
    setup() {
      const toast = useToast();
      const total = ref(0);
      const subtotal = ref(0);
      const tax = ref(0);
      const service = ref(0);
      const status = ref(0);
      const cart = ref([]);

      const clearBill = async () => {
        if (cart.value.length < 1) {
          return;
        }

        Swal.fire({
          icon: "info",
          title: "apa anda yakin ingin menghapus bill ?",
          showDenyButton: true,
          confirmButtonText: "Ya, saya yakin",
          denyButtonText: `Batalkan`,
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem("posfe_cart");
            cart.value = [];
            toast.success("berhasil mengosongkan bill");
          }
        });
      };

      onMounted(() => {
        if (JSON.parse(localStorage.getItem("posfe_cart"))?.length) {
          cart.value = JSON.parse(localStorage.getItem("posfe_cart"));

          cart.value.forEach((el) => {
            subtotal.value = subtotal.value + el.harga_total;
          });

          total.value = subtotal.value + tax.value + service.value;
        }
      });

      return {
        total,
        status,
        subtotal,
        clearBill,
        cart,
      };
    },
  };
</script>
