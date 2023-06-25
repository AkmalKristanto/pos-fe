<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="content">
        <div class="container">
            <div class="search-sticky">
                <input type="text" class="form-control mb-3" placeholder="Search" >
            </div>
            <div class="row align-items-center gy-4">
                <div class="col-lg-3 col-md-6 col-6" v-for="(item, index) in 10" :key="index">
                    <a href="#" type="button" class="p-0 text-decoration-none" data-bs-target="#modalCustom" data-bs-toggle="modal">
                        <img src="https://plus.unsplash.com/premium_photo-1669374537636-518629de3b85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
                            alt="" srcset="" class="card-img-top">
                        <div class="card-body text-start">
                            <p class="m-0">Avocado Coffee</p>
                            <p class="sub sub-text m-0 mb-2">Avocado, Cappucino, Sugar</p>
                            <p class="m-0">Rp. 20000</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <!-- ADD CART -->
        <div class="modal fade" id="modalCustom" tabindex="-1" aria-labelledby="modalCustom" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Cart</h5>
                    </div>
                    <div class="modal-body text-start">
                        <div class="border-bottom mb-2">
                            <label for="" class="form-label fw-bold">Sugar</label>
                            <div class="ms-2 mb-2 d-flex align-items-center justify-content-between">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Normal Sugar
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                            </div>
                            <div class="ms-2 mb-2 d-flex align-items-center justify-content-between">
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Less Sugar
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                            </div>
                        </div>
                        <div class="border-bottom mb-2">
                            <label for="" class="form-label fw-bold">Extra Shot</label>
                            <div class="ms-2 mb-2 d-flex align-items-center justify-content-between">
                                <label class="form-label" for="flexShot1">
                                    Normal
                                </label>
                                <input class="form-check-input" type="radio" name="radioShot" id="flexShot1" checked>
                            </div>
                            <div class="ms-2 mb-2 d-flex align-items-center justify-content-between">
                                <label class="form-label" for="flexShot2">
                                    <p class="m-0">Extra</p>
                                    <p class="m-0 sub sub-text">+Rp2000</p>
                                </label>
                                <input class="form-check-input" type="radio" name="radioShot" id="flexShot2">
                            </div>
                        </div>
                        <div class=" mb-2">
                            <div class="form-group">
                              <label for="additional" class="form-label">Additional</label>
                              <input type="text" name="additional" id="additional" class="form-control" placeholder="Additional" aria-describedby="helpId">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer w-100">
                        <div class="d-flex align-items-center justify-content-end gap-2 w-100">
                            <button type="button" id="close" class="btn" data-bs-dismiss="modal">
                                <i class="fa-solid fa-xmark me-2"></i>Cancel
                            </button>
                            <button type="button" class="btn btn-primary">
                                <i class="fa fa-edit me-2" aria-hidden="true"></i>Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END ADD CART -->
    </div>
</template>
<script>
export default {

}
</script>