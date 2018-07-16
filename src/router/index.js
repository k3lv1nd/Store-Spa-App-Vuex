import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
Vue.use(Router)
import firebase from 'firebase'

let router=  new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
        path: '/home',
          name: 'Home',
          component: Home,
          meta:{
              requireAuth:true,
          }
      }

  ],
    mode: 'history'
})

router.beforeEach((to,from,next)=>{
  let currentUser= firebase.auth().currentUser;
  if(to.matched.some(record=>record.meta.requireAuth)){

    if(!currentUser){
      next({
          path:'/',
          query:{redirect: to.fullPath}
      })
    }else {
      next();
    }
  }else {
    next();
  }

})

export default router;

