<template>
    <td>{{ index + 1}} </td>
    <td><img class="img-thumbnail" :src = "product.thumbnail" /> </td>
    <td>{{ product.title}} </td>
    <td>{{ product.description}} </td>
    <td>{{ product.discountPercentage}} </td>
    <td>{{ product.rating}} </td>
    <td>{{ product.stock}} </td>
    <td>{{ product.brand}} </td>
    <td>{{ product.category}} </td>
</template>
<script setup>
    defineProps({product: Object(), index: String})
</script>
<script>
    export default{
        name: 'product-item'
    }
</script>
<style>
    
</style>