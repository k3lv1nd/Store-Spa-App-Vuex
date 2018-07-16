// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import App from './App'
//import '../node_modules/bootstrap/less/bootstrap.less'
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss'
import router from './router'
import  store  from './store/store'
import firebase from 'firebase'
import './firebase_init'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale });

/* eslint-disable no-new */

let app;
firebase.auth().onAuthStateChanged(function (user) {

  if(!app){

    app= new Vue({
          el: '#app',
          router,
          store,
          components: { App },
          template: '<App/>'
      })
  }

})


