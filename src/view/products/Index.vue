<template>
    <div class="post">
        <div  class="container">
            <label for="exampleInputEmail1" class="form-label">Input the search words</label>
            <input type="email" v-model="searchQuery" class="form-control" id="exampleInputEmail1" @keyup="submitSearch" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">It will return search result  "{{searchQuery}}"</div>
            <div v-if = "searchQuery != ''" class = "row">
                <product-search :queryStr="searchQuery" />
            </div>
            <div v-if = "searchQuery == ''" class="row">
                <product-list :pageNum = "1" />
            </div>
        </div>

    </div>
</template>

<script>
    import ProductSearch from "@/view/products/ProductSearch.vue"
    import ProductsList from "@/view/products/ProductsList.vue"
    import useDebouncedRef from '@/utilities/useDebouncedRef'
    import { watch } from "vue"
    import debounce from 'lodash.debounce'
    import { mapState } from "vuex"
    export default {
        name:"index-view",
        setup() {
            const searchQuery = useDebouncedRef('', 500)
            watch(searchQuery, newQuery => {
            })
            return {
                searchQuery,
            }
        },
        components:{
            'product-list' : ProductsList,
            'product-search' : ProductSearch
        },
    }
</script>
