<template>
  <button
    type="button"
    id="addproduk"
    class="text-decoration-none btn btn-primary"
    data-bs-target="#tambahProduk"
    data-bs-toggle="modal"
  >
    Tambah Produk
  </button>

  <div
    class="modal fade"
    id="tambahProduk"
    tabindex="-1"
    aria-labelledby="tambahProduk"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Tambah Produk</h5>
        </div>
        <div class="modal-body text-start">
          <div class="form-group required mb-2">
            <label for="" class="form-label">Nama Produk</label>
            <input
              class="form-control"
              placeholder="Nama Produk"
              v-model="data.nama_produk"
              type="text"
            />
            <el-alert
              class="mt-2"
              v-for="error in v$.nama_produk.$errors"
              :key="error.$uid"
              :title="error.$message"
              type="error"
              show-icon
            />
          </div>
          <div class="form-group mb-2">
            <label for="" class="form-label">Add On</label>
            <Multiselect
              v-model="data.temp_addon"
              mode="tags"
              :options="[]"
              placeholder="Tambah Add On"
              :close-on-select="false"
              :searchable="true"
              :create-option="true"
              :showOptions="false"
            />
            <el-alert
              class="mt-2"
              v-show="data.temp_addon.length < 1"
              :title="'add on tidak boleh kosong'"
              type="error"
              show-icon
            />
          </div>
          <div class="form-group mb-2">
            <label for="" class="form-label">Variant</label>
            <Multiselect
              v-model="data.temp_varian"
              mode="tags"
              :options="[]"
              placeholder="Tambah Variant"
              :close-on-select="false"
              :searchable="true"
              :create-option="true"
              :showOptions="false"
            />
            <el-alert
              class="mt-2"
              v-show="data.temp_varian.length < 1"
              :title="'varian tidak boleh kosong'"
              type="error"
              show-icon
            />
          </div>
          <div class="form-group required mb-2">
            <label for="" class="form-label">Harga</label>
            <div class="custom-input-group position-relative w-100">
              <input
                class="form-control right"
                placeholder="harga"
                v-model="data.harga"
                type="text"
              />
              <el-alert
                class="mt-2"
                v-for="error in v$.harga.$errors"
                :key="error.$uid"
                :title="error.$message"
                type="error"
                show-icon
              />
              <div class="prefix">
                <p class="m-0">Rp</p>
              </div>
            </div>
          </div>
          <div class="form-group mb-2">
            <label for="url_logo" class="form-label">Foto Produk</label>
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
                v-if="data.url_logo != ''"
                :src="data.url_logo"
                :alt="data.nama_produk"
                class="mb-2"
              />
              <div v-else class="text-center">
                <img
                  class="placeholder_banner mb-2"
                  :src="require('@/assets/images/placeholder_image.svg')"
                />
                <h6 class="m-0 fw-normal">Foto Produk</h6>
              </div>
              <el-alert
                class="mt-2"
                v-for="error in v$.url_logo.$errors"
                :key="error.$uid"
                :title="error.$message"
                type="error"
                show-icon
              />
            </div>
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
<script src="./TambahProduk.js"></script>
