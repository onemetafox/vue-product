<template>
    <div class="post">
        <div  class="container">
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
            <page-nation />
        </div>
    </div>
</template>

<script>
    import Product from "@/components/Product.vue"
    import Pagination from "@/components/Pagination.vue"
    import { mapState } from "vuex"
    export default {
        name:"product-list",
        components:{
            'product-item' : Product,
            'page-nation' : Pagination
        },
        computed: mapState({
            // arrow functions can make the code very succinct!
            products: state => state.products.products,
        }),
    }
</script>
