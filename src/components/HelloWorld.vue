<template>
    <el-container>
        <el-header>{{msgheader}}
            <el-button v-model="lseen" class="btn" @click="showlogin" type="warning" plain>Login</el-button>
            or
            <el-button v-model="sseen" class="btn2" @click="showsignup" type="warning" plain>Sign-up</el-button>
        </el-header>
        <el-main class="homebody">
            <div class="signup" v-if="sseen">
                <small class="small">Kindly Log In to view our wide range of products</small>
                <form action="">
                    <label class="inputlabel" for="Email">Email:</label>
                    <input class=" inputE" type="text" placeholder="You@mail.com" v-model="user.email"/><br>
                    <label class="inputlabel" for="password">Password:</label>
                    <input class="inputE" type="password" placeholder="Password" v-model="user.password1"/><br>
                    <label class="inputlabel" for="password" placeholder="Re-enter password">Confirm password:</label>
                    <input class=" inputE" type="password" placeholder="Re-enter password"
                           v-model="user.password2"/><br>
                    <label class="inputlabel" for="mobileno.">Mobile No.:</label>
                    <input class=" inputE" type="text" placeholder="0712345678" v-model="user.mobile"/><br>
                    <label class="inputlabel" for="Username">Username:</label>
                    <input class=" inputE" type="text" placeholder="Username" v-model="user.username"/><br>

                    <el-button class="optionsbtn" @click="register" type="warning" plain>Sign up</el-button>
                    <el-button class="optionsbtn" @click="showlogin" type="warning" plain>Have an account? login here
                    </el-button>
                    <br>
                    <el-button class="optionsbtn" @click="hidesignup" type="warning" plain>Cancel</el-button>
                </form>
            </div>

            <div class="login" v-if="lseen">
                <small class="small">Kindly Log In to view our wide range of products</small>
                <small class="alert" v-if="regsuccess">Registration Succesful , Enter your credentials to sign in
                </small>
                <form action="">
                    <label class="inputlabel" for="Email">Email:</label>
                    <input class=" inputE" type="text" placeholder="Email" v-model="logind.username"/><br>
                    <label class="inputlabel" for="password">Password:</label>
                    <input class="inputE" type="password" placeholder="Password" v-model="logind.password"/><br>
                    <el-button class="optionsbtn" @click="login" type="warning" plain>Login</el-button>
                    <el-button class="optionsbtn" @click="showsignup" type="warning" plain>
                        Don`t have an account? Sign up here
                    </el-button>
                    <br>
                    <el-button class="optionsbtn" @click="hidelogin" type="warning" plain>Cancel</el-button>
                </form>
            </div>


            <div class="slide">
                <el-carousel height="300px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>

        </el-main>
    </el-container>
</template>

<script>
    import {mapGetters} from 'vuex';
    import firebase from 'firebase'
    export default {
        name: 'HelloWorld',
        computed: {
            ...mapGetters({

                user: 'user',
                logind: 'logind'

            })
        },
        data () {
            return {
                msgheader: 'Welcome to Scorpion Electronics Store',
                sseen: false,
                lseen: false,
                regsuccess: false

            }
        },
        methods: {
            showsignup: function () {
                this.sseen = true
                this.lseen = false


            },
            hidesignup: function () {
                return this.sseen = false

            },
            showlogin: function () {
                this.sseen = false
                this.lseen = true


            },
            hidelogin: function () {
                this.lseen = false
            },
            register: function () {


             this.$store.commit('ADD_USER', this.user)
                firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password1).then(() => {
                    this.sseen = false
                    this.regsuccess = true
                    this.lseen = true
                })
            },
            login: function () {
//                this.$store.commit('GET_USER', this.logind)
                //this.user = user
//                if ((user.username==logind.username)&&(user.password==logind.password)){
//                    router.push({ name: "Home"})
//                }
                let vm = this;
                firebase.auth().signInWithEmailAndPassword(this.logind.username, this.logind.password).then((resp) => {
                    vm.$router.push({name: "Home"})
                }).catch(error => {
                    console.log(error.message);
                })
            }


        }


    }

</script>

<style scoped>
    body {
        margin: 0px;

    }

    .el-header, .el-footer {
        background-color: lightgray;
        color: darkslategrey;
        text-align: center;
        /*line-height: 60px;*/
        font-family: "sans-serif";
        font-size: xx-large;
    }

    .homebody {
        background-image: url('../assets/back2back.jpg');
        background-position: center;
        height: 700px;
        background-size: cover;
        background-repeat: no-repeat;
        text-align: center;

    }

    .signup {
        background-color: aliceblue;
        width: 400px;
        float: right;
        height: 400px;
        padding: 0px;
        opacity: 1;
        filter: alpha(opacity=50);
        margin-top: -19px;
        box-shadow: cornflowerblue;
        border-radius: 2%;
        align-content: center;

    }

    .login {
        background-color: aliceblue;
        width: 400px;
        float: right;
        height: 400px;
        padding: 0px;
        opacity: 1;
        filter: alpha(opacity=50);
        margin-top: -19px;
        box-shadow: cornflowerblue;
        border-radius: 2%;
        align-content: center;

    }

    .input {
        margin-top: 10px;
    }

    .small {
        font-size: larger;
        color: darkslategrey;
        padding-top: 20%;
    }

    .btn {
        margin-left: 20%;
        margin-right: 2%;
    }

    .btn2 {
        margin-left: 2%;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .slide {
        margin-top: 20%;

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

    .inputlabel {
        display: inline-block;
        width: 140px;
        text-align: left;
        margin: 10px;
    }

    .optionsbtn {
        margin: 10px;
    }

    .alert {
        color: orange;
    }

</style>
