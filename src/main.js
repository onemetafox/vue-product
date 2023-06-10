import { createApp } from 'vue'

import {createWebHistory, createRouter} from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.vue'

import Index from "@/view/products/Index.vue";

const routes = [
    {
        path : "/landing",
        component : Index
    },
    {
        path : "/",
        component : Index
    }
]
import store from "@/stores";

const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(router).use(store).mount('#app')
import "bootstrap/dist/js/bootstrap.js"