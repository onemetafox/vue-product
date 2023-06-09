<template>
    <div class="post">
        <div v-if="error" class="error">{{ error }}</div>
        <div v-if="products" class="container">
            <table class="table">
                <thead>
                    <th>No</th>
                    <th>thumbnail</th>
                    <th>title</th>
                    <th>description</th>
                    <th>discountPercentage</th>
                    <th>rating</th>
                    <th>stock</th>
                    <th>brand</th>
                    <th>category</th>
                </thead>
                <tbody>
                    <tr v-for = "(product, index) in products" v-bind:key="index">
                        <product-item :product = "product" :index = "index" />
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import Product from "@/components/Product.vue"
    import { mapState } from "vuex"
    export default {
        name:"product-list",
        components:{
            'product-item' : Product
        },
        data() {
            return {
                loading: true,
                filter: null,
                error: null,
            }
        },
        created() {
            // watch the params of the route to fetch the data again
            this.$watch(
                () => this.$route.params,
                () => {
                    this.fetchData()
                },
                // fetch the data when the view is created and the data is
                // already being observed
                { immediate: true }
            )
        },
        methods: {
            fetchData() {
                this.error = this.filter = null
                // replace `getPost` with your data fetching util / API wrapper
                this.$store.dispatch("products/getProducts", this.filter)
            },
        },
        computed: mapState({
            // arrow functions can make the code very succinct!
            products: state => state.products.products,
            loading: state => state.products.loading,
            error: state => state.products.status
        })
    }
</script>
