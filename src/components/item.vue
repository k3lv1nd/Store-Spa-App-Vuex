<template>
    <div class="col-md-3">
        <div class=" imgp card">
            <!--<img   class="card-img-top ">-->
            <div class="card-body">

                </div>

            </div>
        <h4 class="titlec card-title ">{{ name }}</h4>
        <div class="titlec card-text">Ksh{{
            price
            }}</div>
        <div class="row justify-content-end">
            <button class="btn btn-primary" @click="addToCart(invId)">Add to cart</button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'item',
        props: ['invId', 'name', 'image', 'price'],

        filters: {
            dollars: num => `{num / 100}`,
        },
        methods: {
            addToCart(invId){
                this.$store.dispatch('addToCart', invId);
            }
        }
    };
</script>
<style>
    .imgp{
        background-image: url('../assets/product.jpg') ;
        background-size: contain;
        height:200px;

    }
    .titlec{
        margin-top:4%;
    }
</style>