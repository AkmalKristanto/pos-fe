<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="content">
        <div class="container h-100 text-start">
            <div class="row gy-4">
                <div class="col-12">
                    <h5>Draft Bill</h5>
                </div>
                <div class=" col-12 search-sticky">
                    <input type="text" v-model="search" @keyup="menu" class="form-control mb-3" placeholder="Search" />
                </div>
                <div v-for="(item, index) in 20" :key="index" class="col-lg-6 col-12">
                    <div class="card">
                        <div class="d-flex align-items-center justify-content-between">
                            <h6>Bill #00{{ index + 1 }}</h6>
                            <div class="dropdown">
                                <a class="" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="triggerId">
                                    <a class="dropdown-item" href="#">Edit</a>
                                    <a class="dropdown-item red-color" href="#">Delete</a>
                                </div>
                            </div>
                        </div>
                        <div class="divider my-2"></div>
                        <router-link :to="{name:''}" class="d-flex align-items-center justify-content-between">
                            <div>
                                <p class="m-0">Ahmad Fauzi • Dine In</p>
                                <p class="m-0 mb-1 sub">26 Agustus 2022</p>
                                <p class="m-0 mb-2">QTY:2</p>
                                <h6>Rp200.000</h6>
                            </div>
                            <i class="fa fa-chevron-right fa-1x" aria-hidden="true"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>