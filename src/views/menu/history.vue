<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="content">
        <div class="container">
            <div class="search-sticky">
                <input type="text" class="form-control mb-3" placeholder="Search">
            </div>
            <div>
                <div v-for="(item) in data.list" :key="item.id" class="border-bottom mb-2 pb-2">
                    <a class="fw-semibold d-flex align-items-center" data-bs-toggle="collapse" :href="'#collapse_history' + item.id" role="button"
                        aria-expanded="false" :aria-controls="'collapse_history' + item.id">
                        <i class="fa fa-chevron-right me-2" aria-hidden="true"></i>
                        {{ item.day }}
                    </a>
                    <div class="collapse my-2 text-start" :id="'collapse_history' + item.id">
                        <router-link v-for="(value, index) in item.data_list" :key="index" :to="{ name: 'history-detail', params: { id_order: 1 } }"
                            class="d-flex align-items-start justify-content-between mb-2">
                            <div>
                                <p class="m-0">{{ value.name }}</p>
                                <p class="m-0 sub sub-text">{{ value.type }}</p>
                            </div>
                            <p class="m-0">{{ value.date }}</p>
                            <p class="m-0">{{ value.total }}</p>
                        </router-link>
                    </div>
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
            list: [
                {
                    id: 1,
                    day: 'Today',
                    data_list: [
                        {
                            name: 'Abdai',
                            type: 'Dine In',
                            date: '10-06-2023 19:40',
                            total: '100000'
                        },
                        {
                            name: 'Abdai',
                            type: 'Take Away',
                            date: '5-06-2023 14:40',
                            total: '100000'
                        },
                    ]
                },
                {
                    id: 2,
                    day: 'Yesterday',
                    data_list: [
                        {
                            name: 'Abdai',
                            type: 'Dine In',
                            date: '10-06-2023 19:40',
                            total: '100000'
                        },
                        {
                            name: 'Abdai',
                            type: 'Take Away',
                            date: '5-06-2023 14:40',
                            total: '100000'
                        },
                    ]
                },
                {
                    id: 3,
                    day: 'Last 3 Day',
                    data_list: [
                        {
                            name: 'Abdai',
                            type: 'Dine In',
                            date: '10-06-2023 19:40',
                            total: '100000'
                        },
                        {
                            name: 'Abdai',
                            type: 'Take Away',
                            date: '5-06-2023 14:40',
                            total: '100000'
                        },
                    ]
                },
                {
                    id: 4,
                    day: 'Last Week',
                    data_list: [
                        {
                            name: 'Abdai',
                            type: 'Dine In',
                            date: '10-06-2023 19:40',
                            total: '100000'
                        },
                        {
                            name: 'Abdai',
                            type: 'Take Away',
                            date: '5-06-2023 14:40',
                            total: '100000'
                        },
                    ]
                },
            ]
        })
        return {
            data,
        }
    }
}
</script>