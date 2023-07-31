<template>
  <button
    type="button"
    id="bukaeditproduk"
    class="text-decoration-none btn btn-primary"
    data-bs-target="#editProduk"
    data-bs-toggle="modal"
    style="display: none"
  >
    Ubah Produk
  </button>

  <div
    class="modal fade"
    id="editProduk"
    tabindex="-1"
    aria-labelledby="editProduk"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Ubah Produk</h5>
        </div>
        <div class="modal-body text-start">
          <div class="form-group required mb-2">
            <label for="" class="form-label">Nama Produk</label>
            <input
              class="form-control"
              placeholder="Nama Produk"
              v-model="data.edit.nama_produk"
              type="text"
            />
          </div>
          <div class="form-group mb-2">
            <label for="" class="form-label">Add On</label>
            <Multiselect
              mode="tags"
              v-model="data.add_on"
              :object="true"
              placeholder="Tambah Add On"
              :close-on-select="false"
              :searchable="true"
              :create-option="true"
              :showOptions="false"
            />
          </div>
          <div class="form-group mb-2">
            <label for="" class="form-label">Variant</label>
            <Multiselect
              mode="tags"
              :options="[]"
              v-model="data.varian"
              :object="true"
              placeholder="Tambah Variant"
              :close-on-select="false"
              :searchable="true"
              :create-option="true"
              :showOptions="false"
            />
          </div>
          <div class="form-group required mb-2">
            <label for="" class="form-label">Harga</label>
            <div class="custom-input-group position-relative w-100">
              <input
                class="form-control right"
                v-model="data.edit.harga"
                placeholder="harga"
                type="text"
              />
              <div class="prefix">
                <p class="m-0">Rp</p>
              </div>
            </div>
          </div>
          <div class="form-group mb-2">
            <label for="" class="form-label">Gambar Produk</label>
            <div
              class="card search pointer w-auto text-center"
              @click="$refs.fileInput.click()"
            >
              <input
                type="file"
                id="url_logo"
                ref="fileInput"
                class="d-none"
                aria-describedby="helpId"
                @change="set_logo"
              />
              <img
                v-if="data.edit.url_logo != ''"
                :src="data.edit.url_logo"
                :alt="data.edit.nama_produk"
                class="mb-2"
              />
              <div v-else class="text-center">
                <img
                  class="placeholder_banner mb-2"
                  :src="require('@/assets/images/placeholder_image.svg')"
                />
                <h6 class="m-0 fw-normal">Foto Produk</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer w-100">
          <div class="d-flex align-items-center justify-content-end gap-2 w-100">
            <button type="button" id="close_update" class="btn" data-bs-dismiss="modal">
              <i class="fa-solid fa-xmark me-2"></i>Cancel
            </button>
            <button type="button" class="btn btn-primary" @click="save">
              <i class="fa fa-edit me-2" aria-hidden="true"></i>Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="@vueform/multiselect/themes/default.css"></style>
<script src="./EditProduk.js"></script>
