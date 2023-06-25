<template>
  <div id="login">
    <div class="row h-100">
      <div class="d-none d-md-block d-lg-block col-md-6 h-100">
        <div class="d-flex flex-column justify-content-center gap-4 h-100 p-5 ">
          <h1 class="text-white text-left w95">
            Selamat Datang, Silahkan Login!
          </h1>
          <!-- <img :src="require('@/assets/images/login/login-img.png')" alt="" class="login-img" /> -->
        </div>
      </div>
      <div class="col-md-6 col-12 h-100">
        <div class="card text-start rounded-0 no-shadow h-100 p-5 d-flex flex-column justify-content-center overflow-y-auto">
            <h4 class=" fw-bold m-0 mb-4">Masuk</h4>
          <form @submit.prevent="login">
            <div class="mb-3 w-100">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" v-model="data.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <el-alert class="mt-2" v-for="error in v$.email.$errors" :key="error.$uid" :title="error.$message" type="error" show-icon />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input v-model="data.password" type="password" class="form-control" id="exampleInputPassword1" />
              <el-alert class="mt-2" v-for="error in v$.password.$errors" :key="error.$uid" :title="error.$message" type="error" show-icon />
            </div>
            <button v-show="!data.isLoading" type="submit" class="btn btn-primary w-100">
              Submit
            </button>
            <button type="submit" v-show="data.isLoading" class="btn btn-primary w-100 mb-4 block disabled" style="background-color: #0d6dfda2">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

export default {
  name: "LoginComponents",
  setup() {
    const toast = useToast();
    const store = useStore();
    const router = useRouter();

    const data = reactive({
      isLoading: false,
      email: "",
      password: "",
    });

    const rules = computed(() => {
      return {
        email: {
          required: helpers.withMessage("email tidak boleh kosong", required),
          email: helpers.withMessage("format email tidak valid", email),
        },
        password: {
          required: helpers.withMessage("password tidak boleh kosong", required),
        },
      };
    });

    const v$ = useVuelidate(rules, data);

    const login = async () => {
      data.isLoading = true;
      const res_form = await v$.value.$validate();

      if (!res_form) {
        data.isLoading = false;
        return;
      }

      store
        .dispatch("auth/login", data)
        .then((res) => {
          toast.success(res.message);
          data.isLoading = false;
          router.push({
            name: "menu",
          });
        })
        .catch((error) => {
          toast.error(error);
          data.isLoading = false;
        });
    };

    return {
      v$,
      data,
      login,
    };
  },
};
</script>
