<template>
  <button
    style="display: none"
    data-bs-target="#modalCustom"
    data-bs-toggle="modal"
    id="buka"
  ></button>

  <div
    class="modal fade"
    id="modalCustom"
    tabindex="-1"
    aria-labelledby="modalCustom"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Cart</h5>
        </div>
        <div class="modal-body text-start">
          <div class="border-bottom mb-2">
            <label for="" class="form-label fw-bold">Add On</label>
            <div
              class="ms-2 mb-2 d-flex align-items-center justify-content-between"
              v-for="(item, index) in get_detail.add_on"
              :key="index"
            >
              <label class="form-check-label" for="flexRadioDefault1">
                {{ item.nama }}
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                :value="`${item.id_produk_add_on}#${item.nama}`"
                v-model="id_produk_add_on"
                checked
              />
            </div>
          </div>
          <div class="border-bottom mb-2">
            <label for="" class="form-label fw-bold">Varian</label>
            <div
              class="ms-2 mb-2 d-flex align-items-center justify-content-between"
              v-for="(item, index) in get_detail.varian"
              :key="index"
            >
              <label class="form-label" for="flexShot1"> {{ item.nama_varian }} </label>
              <input
                class="form-check-input"
                type="radio"
                name="radioShot"
                id="flexShot1"
                :value="`${item.id_produk_varian}#${item.nama_varian}`"
                v-model="id_produk_varian"
                checked
              />
            </div>
          </div>
          <div class="border-bottom mb-2">
            <div class="form-group mb-2">
              <label for="additional" class="form-label">Additional</label>
              <input
                type="text"
                name="additional"
                id="additional"
                v-model="keterangan"
                class="form-control"
                placeholder="Additional"
                aria-describedby="helpId"
              />
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <label for="" class="form-label m-0">QTY</label>
            <div class="d-flex align-items-center justify-content-end gap-3">
              <button :disabled="data.qty === 1" class="btn" @click="decrementQty">
                <i class="fa fa-minus" aria-hidden="true"></i>
              </button>
              <h6 class="m-0">{{ data.qty }}</h6>
              <button class="btn" @click="incrementQty">
                <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="modal-footer w-100">
          <div class="d-flex align-items-center justify-content-end gap-2 w-100">
            <button type="button" id="close" class="btn" data-bs-dismiss="modal">
              <i class="fa-solid fa-xmark me-2"></i>Cancel
            </button>
            <button
              :disabled="id_produk_add_on == 0 || id_produk_varian == 0"
              type="button"
              @click="simpan"
              class="btn btn-primary"
            >
              <i class="fa fa-edit me-2" aria-hidden="true"></i>Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./DetailProduk.js"></script>
