<template>
  <div class="content cart">
    <div class="container h-100">
      <div
        class="d-flex align-items-center justify-content-between border-bottom py-1 mb-4"
      >
        <a href="#" data-bs-toggle="modal" data-bs-target="#customerModal" type="button"
          >{{ nama_customer }}<i class="fas fa-edit ms-2"></i
        ></a>
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
            <span v-else>Tipe Order</span>
          </a>
          <ul class="dropdown-menu text-start">
            <li @click="status = 1"><button class="dropdown-item">Dine In</button></li>
            <li @click="status = 2"><button class="dropdown-item">Take Away</button></li>
          </ul>
        </div>
      </div>
      <div class="row gy-4 h-100">
        <div :class="[{ 'col-md-8': cart.length != 0, 'col-md-12': cart.length == 0 }]">
          <p v-if="cart.length == 0">Tidak Ada Produk</p>
          <div v-else class="text-start">
            <h6>Keranjang</h6>
            <div class="divider my-3"></div>
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
        <div v-show="cart.length != 0" class="col-md-4">
          <div class="card white">
            <div class="text-start">
              <h6>Ringkasan</h6>
              <div class="divider my-3"></div>
              <div v-show="cart.length > 0">
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
            </div>

            <div class="mt-4">
              <div class="d-flex align-items-center">
                <button
                  @click="draftBill"
                  class="btn w-100"
                  :class="[{ disable: cart.length <= 0 }]"
                >
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
              <button
                @click="checkout"
                class="btn btn-primary w-100"
                :class="[{ disable: cart.length <= 0 }]"
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <p v-if="cart.length == 0">Tidak Ada Produk</p>
      <div v-else class="cart-content overflow-y-auto">
        <div v-for="(item, index) in cart" :key="index" class="d-flex gap-2 align-items-center justify-content-between mb-3">
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
      </div> -->
  <!-- <div class="summary">
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
      <button @click="clearBill" class="btn w-100" :class="[{ disable: cart.length <= 0 }]">
        Clear Bill
      </button>
    </div>
    <button @click="checkout" class="btn btn-primary w-100" :class="[{ disable: cart.length <= 0 }]">
      Check Out
    </button>
  </div> -->

  <div
    class="modal fade"
    id="customerModal"
    tabindex="-1"
    aria-labelledby="customerModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="customerModalLabel"></h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-start">
          <div class="form-group">
            <label for="" class="form-label">Customer Name</label>
            <input
              type="text"
              name=""
              id=""
              v-model="nama_customer"
              class="form-control"
              placeholder=""
              aria-describedby="helpId"
            />
          </div>
        </div>
        <div class="modal-footer w-100">
          <div class="d-flex align-items-center justify-content-end gap-2 w-100">
            <button type="button" id="close" class="btn" data-bs-dismiss="modal">
              <i class="fa-solid fa-xmark me-2"></i>Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              id="close"
              data-bs-dismiss="modal"
            >
              <i class="fa fa-check me-2" aria-hidden="true"></i>Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { ref, onMounted } from "vue";
  import { useToast } from "vue-toastification";
  import Swal from "sweetalert2";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  export default {
    name: "MenuComponents",
    setup() {
      const toast = useToast();
      const store = useStore();
      const router = useRouter();

      const total = ref(0);
      const subtotal = ref(0);
      const tax = ref(0);
      const service = ref(0);
      const status = ref(0);
      const nama_customer = ref("New Customer");
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

      const checkout = async () => {
        if (status.value < 1) {
          Swal.fire({
            icon: "error",
            text: "pilih tipe order terlebih dahulu!",
          }).then(() => {
            return;
          });
        }

        var param = {
          nama_order: nama_customer.value,
          jumlah: subtotal.value,
          tax: 0,
          service: 0,
          total: subtotal.value,
          array_produk: JSON.stringify(cart.value),
          payment_method: 1, //1 Cash
          type_order: status.value,
        };

        Swal.fire({
          icon: "info",
          title: "apa anda yakin ingin checkout pesanan ?",
          showDenyButton: true,
          confirmButtonText: "Ya, saya yakin",
          denyButtonText: `Batalkan`,
        }).then((result) => {
          if (result.isConfirmed) {
            store
              .dispatch("cart/create_transaksi", param)
              .then((res) => {
                toast.success(res.message);
                localStorage.removeItem("posfe_cart");
                cart.value = [];
                router.push({
                  name: "menu",
                });
              })
              .catch((error) => {
                toast.error(error);
              });
          }
        });
      };

      const draftBill = async () => {
        if (status.value < 1) {
          Swal.fire({
            icon: "error",
            text: "pilih tipe order terlebih dahulu!",
          }).then(() => {
            return;
          });
        }

        var param = {
          nama_order: nama_customer.value,
          jumlah: subtotal.value,
          tax: 0,
          service: 0,
          total: subtotal.value,
          array_produk: JSON.stringify(cart.value),
          payment_method: 1, //1 Cash
          type_order: status.value,
        };

        Swal.fire({
          icon: "info",
          title: "apa anda yakin ingin menyimpan pesanan sebagai draft ?",
          showDenyButton: true,
          confirmButtonText: "Ya, saya yakin",
          denyButtonText: `Batalkan`,
        }).then((result) => {
          if (result.isConfirmed) {
            store
              .dispatch("cart/draft_transaksi", param)
              .then((res) => {
                toast.success(res.message);
                localStorage.removeItem("posfe_cart");
                cart.value = [];
                router.push({
                  name: "menu",
                });
              })
              .catch((error) => {
                toast.error(error);
              });
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
        nama_customer,
        clearBill,
        draftBill,
        cart,
        checkout,
      };
    },
  };
</script>
