import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

function loadView(view) {
    return () =>
        import ( /*webpackChunkName:"view-[request]"*/ `@/${view}.vue`)
}
export default new Router({
    routes: [{
            path: '/',
            name: 'root',
            component: loadView('App'), //viewMainCat,
            props: false
        }
    ],
    // mode:'history'
})