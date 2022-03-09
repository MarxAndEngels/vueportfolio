import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);


export default new VueRouter({
    mode:'history',
    routes: [
    {
        path: "/send", 
        component: ()=>{return import('./components/send/Index')},
        name: 'send.index'  
    },
    {
        path: "/", 
        component: ()=>{return import('./components/skills/Index')},
        name: 'skills.index'  
    },
    {
        path: "/code/js", 
        component: ()=>{return import('./components/code/js/Index')},
        name: 'code.js.index'    
    },
    {
        path: "/code/php", 
        component: ()=>{return import('./components/code/php/Index')},
        name: 'code.php.index'    
    },
    {
        path: "/about", 
        component: ()=>{return import('./components/about/Index')},
        name: 'about.index'    
    },
    {
        path: "/works", 
        component: ()=>{return import('./components/works/Index')},
        name: 'works.index'    
    },
   ]
});
