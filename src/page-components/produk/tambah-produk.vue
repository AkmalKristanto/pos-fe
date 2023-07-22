<template>
  <button type="button" id="addproduk" class=" text-decoration-none btn btn-primary" data-bs-target="#tambahProduk" data-bs-toggle="modal">Tambah
    Produk</button>

  <div class="modal fade" id="tambahProduk" tabindex="-1" aria-labelledby="tambahProduk" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Tambah Produk</h5>
        </div>
        <div class="modal-body text-start">
          <div class="form-group required mb-2">
            <label for="" class="form-label">Nama Produk</label>
            <input class="form-control" placeholder="Nama Produk" v-model="data.nama_produk" type="text" />
          </div>
          <div class="form-group mb-2">
            <label for="" class="form-label">Add On</label>
            <Multiselect v-model="data.add_on" mode="tags" :options="[]" placeholder="Tambah Add On" :close-on-select="false" :searchable="true"
              :create-option="true" />
          </div>
          <div class="form-group mb-2">
            <label for="" class="form-label">Variant</label>
            <Multiselect v-model="data.varian" mode="tags" :options="[]" placeholder="Tambah Variant" :close-on-select="false" :searchable="true"
              :create-option="true" />
          </div>
          <div class="form-group required mb-2">
            <label for="" class="form-label">Harga</label>
            <div class="custom-input-group position-relative w-100">
              <input class="form-control right" placeholder="harga" v-model="data.harga" type="text" />
              <div class="prefix">
                <p class="m-0">Rp</p>
              </div>
            </div>
          </div>
          <div class="form-group mb-2">
            <label for="" class="form-label">Variant</label>
            <input class="form-control" placeholder="harga" id="url_logo" type="file" @change="set_logo" />
            <img v-show="data.url_logo != ''" :src="data.url_logo" :alt="data.nama_produk" :height="200" :width="200" />

          </div>
        </div>
        <div class="modal-footer w-100">
          <div class="d-flex align-items-center justify-content-end gap-2 w-100">
            <button type="button" id="close" class="btn" data-bs-dismiss="modal">
              <i class="fa-solid fa-xmark me-2"></i>Cancel
            </button>
            <button type="button" class="btn btn-primary" @click="save">
              <i class="fa fa-edit me-2" aria-hidden="true"></i>Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="@vueform/multiselect/themes/default.css"></style>
<script src="./TambahProduk.js">

</script>
