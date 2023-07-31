<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="content">
    <div class="container">
      <div class="search-sticky">
        <input
          type="text"
          class="form-control mb-3"
          v-model="search"
          placeholder="Search"
        />
      </div>

      <div v-if="search != ''">
        <router-link
          v-for="(value, index) in history"
          :key="index"
          :to="{ name: 'history-detail', params: { id_order: value.id_order } }"
          class="d-flex align-items-start justify-content-between mb-2"
        >
          <div>
            <p class="m-0">{{ value.nama_order }}</p>
            <p class="m-0 sub sub-text">{{ value.type_order }}</p>
          </div>
          <p class="m-0">{{ value.created_at }}</p>
          <p class="m-0">{{ formatPrice(value.total) }}</p>
        </router-link>
      </div>

      <div v-else>
        <div v-for="item in data.list" :key="item.id" class="border-bottom mb-2 pb-2">
          <a
            class="fw-semibold d-flex align-items-center"
            data-bs-toggle="collapse"
            :href="'#collapse_history' + item.id"
            role="button"
            aria-expanded="false"
            :aria-controls="'collapse_history' + item.id"
          >
            <i class="fa fa-chevron-right me-2" aria-hidden="true"></i>
            {{ item.day }}
          </a>
          <div class="collapse my-2 text-start" :id="'collapse_history' + item.id"></div>
          <div v-if="item.id == 1">
            <router-link
              v-for="(value, index) in today"
              :key="index"
              :to="{ name: 'history-detail', params: { id_order: value.id_order } }"
              class="d-flex align-items-start justify-content-between mb-2"
            >
              <div>
                <p class="m-0">{{ value.nama_order }}</p>
                <p class="m-0 sub sub-text">{{ value.type_order }}</p>
              </div>
              <p class="m-0">{{ value.created_at }}</p>
              <p class="m-0">{{ formatPrice(value.total) }}</p>
            </router-link>
          </div>

          <div v-else-if="item.id == 2">
            <router-link
              v-for="(value, index) in yesterday"
              :key="index"
              :to="{ name: 'history-detail', params: { id_order: value.id_order } }"
              class="d-flex align-items-start justify-content-between mb-2"
            >
              <div>
                <p class="m-0">{{ value.nama_order }}</p>
                <p class="m-0 sub sub-text">{{ value.type_order }}</p>
              </div>
              <p class="m-0">{{ value.created_at }}</p>
              <p class="m-0">{{ formatPrice(value.total) }}</p>
            </router-link>
          </div>

          <div v-else-if="item.id == 3">
            <router-link
              v-for="(value, index) in this_week"
              :key="index"
              :to="{ name: 'history-detail', params: { id_order: value.id_order } }"
              class="d-flex align-items-start justify-content-between mb-2"
            >
              <div>
                <p class="m-0">{{ value.nama_order }}</p>
                <p class="m-0 sub sub-text">{{ value.type_order }}</p>
              </div>
              <p class="m-0">{{ value.created_at }}</p>
              <p class="m-0">{{ formatPrice(value.total) }}</p>
            </router-link>
          </div>

          <div v-else-if="item.id == 4">
            <router-link
              v-for="(value, index) in last_week"
              :key="index"
              :to="{ name: 'history-detail', params: { id_order: value.id_order } }"
              class="d-flex align-items-start justify-content-between mb-2"
            >
              <div>
                <p class="m-0">{{ value.nama_order }}</p>
                <p class="m-0 sub sub-text">{{ value.type_order }}</p>
              </div>
              <p class="m-0">{{ value.created_at }}</p>
              <p class="m-0">{{ formatPrice(value.total) }}</p>
            </router-link>
          </div>

          <div v-else-if="item.id == 5">
            <router-link
              v-for="(value, index) in this_month"
              :key="index"
              :to="{ name: 'history-detail', params: { id_order: value.id_order } }"
              class="d-flex align-items-start justify-content-between mb-2"
            >
              <div>
                <p class="m-0">{{ value.nama_order }}</p>
                <p class="m-0 sub sub-text">{{ value.type_order }}</p>
              </div>
              <p class="m-0">{{ value.created_at }}</p>
              <p class="m-0">{{ formatPrice(value.total) }}</p>
            </router-link>
          </div>

          <div v-else-if="item.id == 6">
            <router-link
              v-for="(value, index) in last_month"
              :key="index"
              :to="{ name: 'history-detail', params: { id_order: value.id_order } }"
              class="d-flex align-items-start justify-content-between mb-2"
            >
              <div>
                <p class="m-0">{{ value.nama_order }}</p>
                <p class="m-0 sub sub-text">{{ value.type_order }}</p>
              </div>
              <p class="m-0">{{ value.created_at }}</p>
              <p class="m-0">Rp. {{ formatPrice(value.total) }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { reactive, onMounted, computed, ref, watch } from "vue";
  import { useStore } from "vuex";
  export default {
    setup() {
      const store = useStore();
      const search = ref("");

      const data = reactive({
        list: [
          {
            id: 1,
            day: "Today",
            data_list: [],
          },
          {
            id: 2,
            day: "Yesterday",
            data_list: [],
          },
          {
            id: 3,
            day: "Minggu Ini",
            data_list: [],
          },
          {
            id: 4,
            day: "Minggu Lalu",
            data_list: [],
          },
          {
            id: 5,
            day: "Bulan Ini",
            data_list: [],
          },
          {
            id: 6,
            day: "Bulan Lalu",
            data_list: [],
          },
        ],
      });

      const history = computed(() => {
        return store.getters["history/getHistory"];
      });

      const today = computed(() => {
        return history.value.filter((item) => item.kategori === 1);
      });

      const yesterday = computed(() => {
        return history.value.filter((item) => item.kategori === 2);
      });

      const this_week = computed(() => {
        return history.value.filter((item) => item.kategori === 3);
      });

      const last_week = computed(() => {
        return history.value.filter((item) => item.kategori === 4);
      });

      const this_month = computed(() => {
        return history.value.filter((item) => item.kategori === 5);
      });

      const last_month = computed(() => {
        return history.value.filter((item) => item.kategori === 6);
      });

      const get_history = () => {
        store.dispatch("history/list", { search: search.value });
      };

      watch(
        () => [search.value],
        () => {
          get_history();
        }
      );

      onMounted(() => {
        store.dispatch("history/list", { search: search.value });
      });

      return {
        data,
        search,
        get_history,
        today,
        yesterday,
        this_week,
        last_week,
        this_month,
        last_month,
      };
    },
  };
</script>
