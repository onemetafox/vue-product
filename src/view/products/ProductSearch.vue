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
    export default {
        name:"product-search",
        components:{
            'product-item' : Product
        },
        setup(){
            watch(queryStr, debounce(() => {
                console.log(queryStr)
            }, 500))
        },
        // watch : {
        //     queryStr(newQuestion, oldQuestion) {
        //         // if(newQuestion != ""){
        //         //     setTimeout( ()=>{
        //         //         this.$store.dispatch("products/searchProducts", this.queryStr)
        //         //     },  500);
        //         // }
        //         console.log(newQuestion + ":::::" + oldQuestion);
        //         debounce(() => {
        //             console.log(newQuestion)
        //         }, 500)
        //     },
        // },
        computed:mapState({
            // arrow functions can make the code very succinct!
            products: state => state.products.products,
            error: state => state.products.status,
            
        }),
    }
</script>
