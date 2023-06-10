<template>
    <div class="post">
        <div  class="container">
            <label for="exampleInputEmail1" class="form-label">Input the search words</label>
            <input type="email" v-model="searchQuery" class="form-control" id="exampleInputEmail1" @keyup="submitSearch" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">It will return search result</div>
            <div v-if = "searchView" class = "row">
                <product-search :queryStr = "searchQuery" />
            </div>
            <div v-if = "listView" class="row">
                <product-list :pageNum = "1" />
            </div>
        </div>

    </div>
</template>

<script>
    import ProductSearch from "@/view/products/ProductSearch.vue"
    import ProductsList from "@/view/products/ProductsList.vue"

    import { mapState } from "vuex"
    export default {
        name:"index-view",
        components:{
            'product-list' : ProductsList,
            'product-search' : ProductSearch
        },
        data() {
            return {
                searchQuery: "",
                searchView : false,
                listView : true
            }
        },
        methods : {
            submitSearch() {
                if(this.searchQuery != ""){
                    this.searchView = true
                    this.listView = false
                }else{
                    this.searchView = false
                    this.listView = true
                }
            }
        }
    }
</script>
