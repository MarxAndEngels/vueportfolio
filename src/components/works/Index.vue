<template lang="">
    <div>
        <Loader v-if='shine'/>
      <h4 class='mt-5'>Некоторые случаи работ ({{ count }})</h4>
      <h5 class='mb-3'>Выбери здесь что-то 😊:</h5>
      <div class='wrapper-butt'>
      <button class='mb-2 btn btn-dark b p' @click="filterWorksAll($event)">Все</button>
      <button class='mb-2 btn btn-danger b' @click="filterNotGit('git',$event)">Отображаемое</button>
          <button class='mb-2 btn btn-dark b' @click="filterWorks('git',$event)">Git</button>
      <button class='mb-2 btn btn-success b' @click="filterWorks('nuxt',$event)">Nuxt</button>
        <button class='mb-2 btn btn-dark b' @click="filterWorks('next',$event)">Next</button>
            <button class='mb-2 btn btn-danger b' @click="filterWorks('laravel',$event)">Laravel</button>
      <button class='mb-2 btn btn-success b' @click="filterWorks('vue',$event)">Vue</button>
      <button class='mb-2 btn btn-success b' @click="filterWorks('vuex',$event)">Vuex</button>
      <button class='mb-2 btn btn-primary b' @click="filterWorks('react',$event)">React</button>
      <button class='mb-2 btn btn-info b' @click="filterWorks('redux',$event)">Redux-toolkit</button>
      <button class='mb-2 btn btn-primary b' @click="filterWorks('react-native',$event)">React Native</button>
      <button class='mb-2 btn btn-dark b' @click="filterWorks('jwt',$event)">Jwt</button>
      <button class='mb-2 btn btn-warning b' @click="filterWorks('js',$event)">JS</button>
      <button class='mb-2 btn btn-primary b' @click="filterWorks('css',$event)">Совсем верстка</button>
      <button class='mb-2 btn btn-info b' @click="filterWorks('bootstrap',$event)">Bootstrap</button>
       </div>

      <div v-if='works' class='row shine mt-5' :class="{ active: shine }">
            <div v-for='(el,key) of works' :key='key' class='col-lg-4'>
                <a :href="el.href" target="_blank" style='text-decoration: none;'>
                <div>
                    <div class='works__relative'>
                        <!-- <img :src="`/static/skills/${skill.image}.webp`" class='image-techology' :alt="skill.name"> -->
                    <img class='works__img mb-5' :src="`/static/works/${el.img}.webp`" alt="">
                      
                                <!-- <div class='works__title'>312312</div> -->
                       <div class='works__options m'>
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
                       <div class="mobile-text">
                             <div>  <p class='mobile-text-p'> {{ el.title }}</p></div>
                                  <center><div class='line'></div></center>
                           <div><p> <span class='mobile-text-s'>{{ el.description }}</span></p></div>
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
            target: null
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
       filterWorks(name,e){
           let obj = localStorage.getItem('works');
           obj = JSON.parse(obj);
          this.works = obj.filter(el=>{ return el.skills.hasOwnProperty(name) });
          this.count = this.works.length;
         this.shineHandler();

         this.target =e.target
         this.filterButtons();
       },
       filterWorksAll(e){
           let obj = localStorage.getItem('works');
           obj = JSON.parse(obj);
           this.works = obj;
            this.count = this.works.length;
           this.shineHandler();

          this.target =e.target
         this.filterButtons();
       },
       filterNotGit(name,e){
               let obj = localStorage.getItem('works');
           obj = JSON.parse(obj);
          this.works = obj.filter(el=>{ return !el.skills.hasOwnProperty(name) });
          this.count = this.works.length;
         this.shineHandler();

         this.target =e.target
         this.filterButtons();
       },
       shineHandler(){
           this.shine = !this.shine;
           setTimeout(()=>{
                this.shine = !this.shine; 
           },300)
       },
       filterButtons(){
        let buttons = document.querySelectorAll('.b');
        for(let el of buttons){
            if(el.classList.contains('p')){
              el.classList.remove('p');
            }
        }
          this.target.classList.add('p');
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

   .wrapper-works{
    background-color: rgb(137, 136, 136);
    padding: 4px 50px;
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
   .btn{
    border-radius: 20px;
    padding: 4px 20px;
    transition: transform ease-in-out 0.3s;
   }
   .b{
     opacity: 0.6;
   }
   .btn:hover{
    transform: translateY(-2px);
   }
   .p{
          opacity: 1;
   }
   .mobile-text{
    color: black;
      margin-bottom:66px;
      margin-top: 10px;
      text-align: center;
      text-decoration: none;
      display: none;
   }
   .mobile-text-p{
  pointer-events: none;
  text-decoration: none;
  border-bottom: 1px solid snow;
  font-weight: 600;
    
   }
   .mobile-text-s{
  pointer-events: none;
  text-decoration: none;
  border-bottom: 1px solid snow;
    
   }
   .line{
    margin: -4px 0 12px 0;
       display: block;
       width: 56px;
       height: 6px;
       background: #7682df;
       border-radius: 10px;
   }
   @media(max-width: 560px){
    .works__img{
             max-height: 100%;
             margin: 0 !important;
    }
     .works__options{
        padding: 0;
     }
    .m{
        display: none;
    }
    .mobile-text{
        display: block;
    }
   }
</style>