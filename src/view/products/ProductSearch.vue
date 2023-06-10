<template>
    <table class="table table-striped" v-if="products">
        <thead class="thead-dark">
            <tr>
                <th scope="col">id</th>
                <th scope="col">thumbnail</th>
                <th scope="col">title</th>
                <th scope="col">description</th>
                <th scope="col">discountPercentage</th>
                <th scope="col">rating</th>
                <th scope="col">stock</th>
                <th scope="col">brand</th>
                <th scope="col">category</th>
            </tr>
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
    import debounce from 'lodash.debounce'

    import { mapState } from "vuex"
    import { watch } from "vue"
    export default {
        name:"product-search",
        components:{
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
