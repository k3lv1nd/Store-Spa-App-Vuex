<template>
    <div>
        <el-button type="text" @click="dialogVisible = true">Shopping cart ({{numInCart}})</el-button>

        <el-dialog
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>Shopping cart</span>
            <table class="table">

                <tbody>
                <tr v-for="item in cart">
                    <td>{{ item.name }}</td>
                    <td>{{ item.price  }}</td>
                </tr>
                <tr>
                    <th></th>
                    <td>Total</td><td>{{ total  }}</td>
                </tr>
                </tbody>
            </table>

            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">Keep Shopping</el-button>
  </span>
        </el-dialog>
    </div>

        <!--<button @click="revealCart" style="margin-left: 950px;" class="btn btn-primary" >Cart ({{ numInCart }})</button>-->
        <!--<div id="shoppingCart" class="modal fade">-->
        <!--<div  v-if="modalseen" class="modal-dialog">-->
        <!--<div class="modal-content">-->
        <!--<div class="modal-header">-->
        <!--<h4 class="modal-title">-->
        <!--Shopping Cart-->
        <!--</h4>-->
        <!--</div>-->
        <!--</div>-->

        <!--</div>-->
        <!--</div>-->
    </div>
</template>
<script>
    export default {
        name: 'shoppingCart',
        data(){
            return {
                modalseen: false,
                dialogVisible: false
            }
        },


        computed: {
            inCart() {
                return this.$store.getters.inCart;
            },
            numInCart() {
                return this.inCart.length;
            },
            cart() {
                return this.$store.getters.inCart.map((cartItem) => {
                    return this.$store.getters.forSale.find((forSaleItem) => {
                        return cartItem === forSaleItem.invId;
                    });
                });
            },
            total() {
                return this.cart.reduce((acc, cur) => acc + cur.price, 0);
            },
        },
        methods: {
            revealCart: function () {
                this.modalseen = true;
            },
            handleClose(done) {
                this.$confirm('Are you sure to close this dialog?')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            }
        }
    };
</script>