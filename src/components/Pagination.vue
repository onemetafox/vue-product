<template>
    <div class="overflow-auto">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link"  @click.prevent="selectedPage('Pre')" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item">
                    <a class="page-link"  @click.prevent="selectedPage('Next')" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
    export default {
        name: "page-nation",
        data(){
            return {
                filter: {
                    skip: 0,
                    limit: 10
                }
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                // replace `getPost` with your data fetching util / API wrapper
                this.$store.dispatch("products/getProducts", this.filter)
            },
            selectedPage(index){
                if(index == "Next"){
                    this.filter.skip += 10
                }else{
                    this.filter.skip -= 10
                }
                this.fetchData();
            }
        },
    }
</script>