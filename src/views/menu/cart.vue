<template>
  <div class="content">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between border-bottom py-1 mb-4">
        <a href="#" type="button">New Customer<i class="fas fa-edit ms-2"></i></a>
        <div class="dropdown">
          <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            -
          </a>
          <ul class="dropdown-menu text-start">
            <li><button class="dropdown-item">Dine In</button></li>
            <li><button class="dropdown-item">Take Away</button></li>
          </ul>
        </div>
      </div>
      <p v-if="data.cart.length == 0">
        Tidak Ada Produk
      </p>
      <div v-else class="cart-content overflow-y-auto">
        <div v-for="(item, index) in data.cart" :key="index" class="d-flex gap-2 align-items-center justify-content-between mb-3">
          <div class="d-flex gap-3 align-items-center">
            <div class="border p-1 rounded-1 ">
              <p class="m-0 sub">{{ item.qty }}x</p>
            </div>
            <div class="text-start">
              <p class="m-0">{{ item.type }} • <span class="sub sub-text">{{ item.temp }}</span></p>
              <p class="m-0 sub sub-text">{{ item.add_on }}</p>
            </div>
          </div>
          <div class="d-flex align-items-center justify-end gap-4">
            <p class="m-0 sub">{{ item.price }}</p>
            <p class="m-0">{{ item.price * item.qty }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="summary">
    <div v-show="data.cart.length > 0" class="container">
      <div class="divider mb-1"></div>
      <div class="d-flex align-items-center justify-content-between">
        <p class="m-0">Sub Total</p>
        <p class="m-0">100000</p>
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
        <p class="m-0">100000</p>
      </div>
    </div>

    <div class="d-flex align-items-center">
      <button class="btn w-100" :class="[{ 'disable': data.cart.length <= 0 }]">Draft Bill</button>
      <button class="btn w-100" :class="[{ 'disable': data.cart.length <= 0 }]">Clear Bill</button>
    </div>
    <button class="btn btn-primary w-100" :class="[{ 'disable': data.cart.length <= 0 }]">Check Out</button>
  </div>
</template>
<script>
import { reactive } from "vue";

export default {
  name: "MenuComponents",
  setup() {
    const data = reactive({
      cart: [
        {
          qty: 1,
          type: 'V60',
          temp: 'Hot',
          add_on: 'toraja, example',
          price: '20000',
        },
        {
          qty: 2,
          type: 'V60',
          temp: 'Hot',
          add_on: 'toraja, example',
          price: '20000',
        },
        {
          qty: 2,
          type: 'V60',
          temp: 'Hot',
          add_on: 'toraja, example',
          price: '20000',
        },
        {
          qty: 2,
          type: 'V60',
          temp: 'Hot',
          add_on: 'toraja, example',
          price: '20000',
        },
        {
          qty: 2,
          type: 'V60',
          temp: 'Hot',
          add_on: 'toraja, example',
          price: '20000',
        },
        {
          qty: 2,
          type: 'V60',
          temp: 'Hot',
          add_on: 'toraja, example',
          price: '20000',
        },
        {
          qty: 2,
          type: 'V60',
          temp: 'Hot',
          add_on: 'toraja, example',
          price: '20000',
        },
        {
          qty: 2,
          type: 'V60',
          temp: 'Hot',
          add_on: 'toraja, example',
          price: '20000',
        },
        {
          qty: 2,
          type: 'V60',
          temp: 'Hot',
          add_on: 'toraja, example',
          price: '20000',
        },
        {
          qty: 2,
          type: 'V60',
          temp: 'Hot',
          add_on: 'toraja, example',
          price: '20000',
        },
        {
          qty: 2,
          type: 'V60',
          temp: 'Hot',
          add_on: 'toraja, example',
          price: '20000',
        },
        {
          qty: 2,
          type: 'V60',
          temp: 'Hot',
          add_on: 'toraja, example',
          price: '20000',
        },
        {
          qty: 2,
          type: 'V60',
          temp: 'Hot',
          add_on: 'toraja, example',
          price: '20000',
        },
      ],
    })
    return {
      data,
    }
  }
};
</script>
