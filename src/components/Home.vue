<template>
    <el-container style="height: 700px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']">

                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>Products Categories</template>
                    <el-menu-item-group>
                        <template slot="title">Gadgets</template>
                        <el-menu-item index="2-1">Phones</el-menu-item>
                        <el-menu-item index="2-2">Watches</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Home accesories">
                        <el-menu-item index="2-3">Option 3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="2-4">
                        <template slot="title">Option 4</template>
                        <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>

            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">


                    <div class="col-md-3">
                        <ShoppingCart />
                    </div>
                <div>
                    <button @click="showProductForm" class="btn btn-primary" >Add Product</button>
                </div>
                <div v-if="addproduct">
                    <form action="">
                        <label class="inputlabel" for="invId">Item Id:</label>
                        <input class=" inputE" type="number" v-model="forSale.id"/><br>
                        <label class="inputlabel" for="name">Product name:</label>
                        <input class="inputE" type="text" v-model="forSale.name"/><br>
                        <label class="inputlabel" for="price">Product price:</label>
                        <input class="inputE" type="number"  v-model="forSale.price"/><br>
                        <el-button class="optionsbtn" @click="addProduct" type="warning" plain>Add</el-button>
                        <el-button class="optionsbtn" @click="hideProductForm" type="warning" plain>
                            Cancel
                        </el-button>


                    </form>

                </div>

            </el-header>

            <el-main>
                <div class="row" v-if="homeoff" >

                    <item
                            v-for="item in forSale"
                            :key="item.invId"
                            :invId="item.invId"
                            :name="item.name"
                            :image="item.image"
                            :price="item.price" />
                </div>

            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    import item from './item.vue';
    import ShoppingCart from './ShoppingCart.vue';
    import {mapGetters} from 'vuex';
    //import store from '../store/store.js'
    export default {

        data () {
            return{
                addproduct: false,
//                forSale:[],
                homeoff:true

            }

        },
        methods:{
            showProductForm: function(){
                this.homeoff= false,
                this.addproduct = true
            },
            hideProductForm: function(){
                this.homeoff=true,
                this.addproduct =false
            },
            addProduct: function() {


                this.$store.dispatch("addforSale", this);

            }


        },
        computed: {
            forSale() { return this.$store.getters.forSale; },
            ...mapGetters({

            //forSale:'forSale'


            })
        },
        components:{
            item,
            ShoppingCart

        }

    };
</script>
<style>
    .el-header {
        background-color:  lightgray;
        color: #333;
        line-height: 60px;
    }
    .inputE {
        width: 200px;
        margin: 10px;
        border-radius: 3%;
        border: solid orange 1px;
        height: 27px;
        background-color: aliceblue;
        text-indent: 10px;
    }


    .el-aside {
        color: lightgray;
    }
</style>