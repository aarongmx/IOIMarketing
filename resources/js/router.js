import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes:[
        {
            path:'/',
            component: () => import('./components/landingpage.vue'),
            name:'default'
        },
        // {
        //     path:'/campañanueva',
        //     component: () => import('./components/campañanueva.vue'),
        //     name:'campañanueva'
        // },
        // {
        //     path:'/campañaprevia',
        //     component: () => import('./components/campañaprevia.vue'),
        //     name:'campañaprevia'
        // },
        // {
        //     path:'/campañas',
        //     component: () => import('./components/campañas.vue'),
        //     name:'campañas'
        // },
        // {
        //     path:'/cuentas',
        //     component: () => import('./components/cuentas.vue'),
        //     name:'cuentas'
        // },
        // {
        //     path:'/dashboard',
        //     component: () => import('./components/dashboard.vue'),
        //     name:'dashboard'
        // },
        // {
        //     path:'/datosbancarios',
        //     component: () => import('./components/datosbancarios.vue'),
        //     name:'datosbancarios'
        // },
        // {
        //     path:'/editarcampañas',
        //     component: () => import('./components/editarcampañas.vue'),
        //     name:'editarcampañas'
        // },
        // {
        //     path:'/editarperfil',
        //     component: () => import('./components/editarperfil.vue'),
        //     name:'editarperfil'
        // },
        // {
        //     path:'/empresaperfil',
        //     component: () => import('./components/empresaperfil.vue'),
        //     name:'empresaperfil'
        // },
        // {
        //     path:'/empresaperfilnuevo',
        //     component: () => import('./components/empresaperfilnuevo.vue'),
        //     name:'empresaperfilnuevo'
        // },
        // {
        //     path:'/empresaperfilprevio',
        //     component: () => import('./components/empresaperfilprevio.vue'),
        //     name:'empresaperfilprevio'
        // },
        {
            path:'/login',
            component: () => import('./components/login.vue'),
            name:'login'
        },
        // {
        //     path:'/navegacion',
        //     component: () => import('./components/navegacion.vue'),
        //     name:'navegacion'
        // },
        // {
        //     path:'/navegacion2',
        //     component: () => import('./components/navegacion2.vue'),
        //     name:'navegacion2'
        // },
        // {
        //     path:'/piedepagina',
        //     component: () => import('./components/piedepagina.vue'),
        //     name:'piedepagina'
        // },
        // {
        //     path:'/planes',
        //     component: () => import('./components/planes.vue'),
        //     name:'planes'
        // },
        // {
        //     path:'/registro',
        //     component: () => import('./components/registro.vue'),
        //     name:'registro'
        // },
        // {
        //     path:'/wordexpress',
        //     component: () => import('./components/wordexpress.vue'),
        //     name:'wordexpress'
        // },
        //
        //
        //
        //
        //
        // {
        //     path:'/administrador/login',
        //     component: () => import('./components/administrador/login.vue'),
        //     name:'login-admin'
        // },
        // {
        //     path:'/administrador/dashboard',
        //     component: () => import('./components/administrador/dashboard.vue'),
        //     name:'dashboard-admin'
        // },

    ]
})
export default router;
