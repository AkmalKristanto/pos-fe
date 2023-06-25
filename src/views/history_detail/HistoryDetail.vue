<template>
    <div class="content">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link :to="{ name: 'history' }">History</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Order Details</li>
                </ol>
            </nav>
            <div class="divider my-2"></div>
            <div class="d-flex align-items-center justify-content-between gap-2 mb-2">
                <p class="m-0 sub">Order No.</p>
                <p class="m-0">20231001-1-ABCD</p>
            </div>
            <div class="d-flex align-items-center justify-content-between gap-2 mb-2">
                <p class="m-0 sub">Order Type</p>
                <p class="m-0">Dine In</p>
            </div>
            <div class="d-flex align-items-center justify-content-between gap-2 mb-2">
                <p class="m-0 sub">Order Time</p>
                <p class="m-0">10-06-2023 19:40</p>
            </div>
            <div class="d-flex align-items-center justify-content-between gap-2 mb-2">
                <p class="m-0 sub">Cashier Name</p>
                <p class="m-0">Cashier A</p>
            </div>
            <div class="d-flex align-items-center justify-content-between gap-2">
                <p class="m-0 sub">Payment Method</p>
                <p class="m-0">Cash</p>
            </div>
            <div class="divider my-2"></div>
            <h6 class="text-start fw-semibold mb-2">Items</h6>
            <div v-for="(item, index) in data.cart" :key="index" class="d-flex gap-2 align-items-center justify-content-between mb-3">

                <div class="text-start">
                    <p class="m-0">{{ item.type }} • <span class="sub sub-text">{{ item.temp }}</span></p>
                    <p class="m-0 sub sub-text">{{ item.add_on }}</p>
                </div>
                <p class="m-0 sub">{{ item.qty }}x</p>


                <p class="m-0 sub">{{ item.price }}</p>
                <p class="m-0">{{ item.price * item.qty }}</p>

            </div>
            <div>
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
        </div>
    </div>
</template>
<script>
import { reactive } from "vue";

export default {
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
                    temp: 'Cold',
                    add_on: 'toraja, example',
                    price: '20000',
                },
            ],
        })
        return {
            data,
        }
    }
}
</script>