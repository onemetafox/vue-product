import { createApp } from 'vue'

import {createWebHistory, createRouter} from "vue-router";

import App from './App.vue'

import Products from "@/view/products/ProductsList.vue";

const routes = [
    {
        path : "/landing",
        component : Products
    },
    {
        path : "/",
        component : Products
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
