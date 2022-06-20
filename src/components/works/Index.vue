<template lang="">
    <div>
        <Loader v-if='shine'/>
      <h4 class='mt-5'>Некоторые работы({{ count }})</h4>
      <p>(Чтоб что-то нормальное задеплоить нужны деньги получается... Или компутер работающий...)</p>
      <button class='mb-1 btn btn-dark' @click="filterWorksAll()">Все</button>
      <button class='mb-1 btn btn-danger' @click="filterNotGit('git')">Отображаемое</button>
          <button class='mb-1 btn btn-dark' @click="filterWorks('git')">Git</button>
      <button class='mb-1 btn btn-success' @click="filterWorks('nuxt')">Nuxt</button>
        <button class='mb-1 btn btn-dark' @click="filterWorks('next')">Next</button>
            <button class='mb-1 btn btn-danger' @click="filterWorks('laravel')">Laravel</button>
      <button class='mb-1 btn btn-success' @click="filterWorks('vue')">Vue</button>
      <button class='mb-1 btn btn-success' @click="filterWorks('vuex')">Vuex</button>
      <button class='mb-1 btn btn-primary' @click="filterWorks('react')">React</button>
      <button class='mb-1 btn btn-info' @click="filterWorks('redux')">Redux-toolkit</button>
      <button class='mb-1 btn btn-primary' @click="filterWorks('react-native')">React Native</button>
      <button class='mb-1 btn btn-dark' @click="filterWorks('jwt')">Jwt</button>
      <button class='mb-1 btn btn-warning' @click="filterWorks('js')">JS</button>
      <button class='mb-1 btn btn-primary' @click="filterWorks('css')">Совсем верстка</button>
      <button class='mb-1 btn btn-info' @click="filterWorks('bootstrap')">Bootstrap</button>

      <div v-if='works' class='row shine mt-5' :class="{ active: shine }">
            <div v-for='(el,key) of works' :key='key' class='col-lg-4'>
                <a :href="el.href" target="_blank">
                <div>
                    <div class='works__relative'>
                    <img class='works__img mb-5' :src="el.img" alt="">
                      
                       <div class='works__options'>
                           <div><p>{{ el.title }}</p></div>
                           <div><p><span>{{ el.description }}</span></p></div>
                           <div class='d-flex justify-content-center'>
                           <span v-for='(option, name) in el.skills' :key='name'>
                               <button v-if="option=='primary'" class='btn btn-primary'>{{ name }}</button>
                               <button v-if="option=='success'" class='btn btn-success'>{{ name }}</button>
                               <button v-if="option=='dark'" type="button" class="btn btn-dark">{{ name }}</button>
                               <button v-if="option=='danger'" class='btn btn-danger'>{{ name }}</button>
                               <button v-if="option=='warning'" class='btn btn-warning'>{{ name }}</button>
                               <button v-if="option=='info'" class='btn btn-info'>{{ name }}</button>
                           </span>
                           </div>
                    </div>
                    </div>
                   
                </div>
                </a>
            </div>
            </div>
    </div>
</template>
<script>
import works from './data.js';
import Loader from '../something/Loader';
export default {
    name:'Index',
    data(){
        return{
            standartWorks: null,
            works:null,
            shine:false,
            count: 0,
        }
    },
    components:{
     Loader
    },
    beforeMount() {
        this.works = works;  
    },
    mounted(){
    //  this.works = works;
     localStorage.setItem('works', JSON.stringify(this.works));
     this.filterWorksAll();
    },
    methods:{
       filterWorks(name){
           let obj = localStorage.getItem('works');
           obj = JSON.parse(obj);
          this.works = obj.filter(el=>{ return el.skills.hasOwnProperty(name) });
          this.count = this.works.length;
         this.shineHandler();
       },
       filterWorksAll(){
           let obj = localStorage.getItem('works');
           obj = JSON.parse(obj);
           this.works = obj;
            this.count = this.works.length;
           this.shineHandler();
       },
       filterNotGit(name){
               let obj = localStorage.getItem('works');
           obj = JSON.parse(obj);
          this.works = obj.filter(el=>{ return !el.skills.hasOwnProperty(name) });
          this.count = this.works.length;
         this.shineHandler();
       },
       shineHandler(){
           this.shine = !this.shine;
           setTimeout(()=>{
                this.shine = !this.shine; 
           },300)
       }
    }
}
</script>
<style scoped>
.works__relative{
    position: relative;
}
    .works__img{
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        max-height: 220px;
        border-radius: 10px;
    }
    .works__options{
        position: absolute;
        top:70px;
         left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
        background-color: rgb(0, 0, 0,.8);
        width: 100%;
        height: 100%;
          max-height: 220px;
    text-align: center;
    padding-top:40px;
    color:snow;
    font-size: 18px;
    padding-left: 10px;
    padding-right: 10px;
     opacity: 0;
     transition-duration: 0.8s;
      border-radius: 10px;
    }
    .works__options div span {
         font-size: 15px;
    }
    .works__relative:hover > .works__options{
         top:110px;
        opacity: 1;
    }
   button{
       
       margin: 0 4px;
   }
   .shine.active{
       animation: opacity 0.3s ease-in-out;
   }
   @keyframes opacity {
       from{
         opacity: 0;
       }
       to{
         opacity: 1;
       }
   }
</style>