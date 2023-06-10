<template>
    <table class="table table-striped" v-if="products">
        <thead class="thead-dark">
            <product-header />
        </thead>
        <tbody>
            <tr v-for = "(product, index) in products">
                <product-item :product = "product" />
            </tr>
        </tbody>
    </table>
</template>
<script setup>
    defineProps({queryStr : String})
</script>
<script>
    import Product from "@/components/Product.vue"
    import ProductHeader from "@/components/ProductHearder.vue"
    import debounce from 'lodash.debounce'

    import { mapState } from "vuex"
    import { watch } from "vue"
    export default {
        name:"product-search",
        components:{
            'product-hearder': ProductHeader,
            'product-item' : Product
        },
        watch : {
            queryStr:{
                handler(newVal, oldVal){
                    this.fetchData()
                },
            },
        },
        methods: {
            fetchData(){
                this.$store.dispatch("products/searchProducts", this.queryStr)
            }
        },
        computed:mapState({
            products: state => state.products.products
        }),
    }
</script>
