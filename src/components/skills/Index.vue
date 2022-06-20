<template lang="">
    <div>
      <Loader v-if='!stateLoad'/>
      <div v-if='stateLoad' v-for='category of categories'>
        <div class='tittle-techology mt-5'>{{ category.title }}</div>
        <center> <div class='circle'></div> </center>
        <div class="row g-5">
       <div class='col-lg-4 col-md-6 content-techology' v-for='skill of skills' :key='skill.id' v-if='skill.category_id == category.id'>

      <center> <img :src="skill.image" class='image-techology' :alt="skill.name"></center>
      <center> <div>
        <h5 class="name-techology">
    
         <i style='color:black;' class="fa fa-pencil-square" aria-hidden="true"></i> {{ skill.name }}</h5>
      </div>
      <div @click='searchTarget' class='arrow'>
        <i class="fa fa-chevron-down" aria-hidden="true"></i>
      </div>
      <div class='hidden-content'>
        <h5>Дополнительная информация: </h5>
         <h5 class="name-techology"><i style='color:black;' class="fa fa-book" aria-hidden="true"></i> {{ skill.hidden_content }}</h5>
         <div style='margin-top:20px'></div>
         </div>
      </center> 

</div>
    </div>
  </div>
  <div style='height:100px'></div>
    </div>
</template>
<script>
import {categories, skills} from './data.js';
import Loader from '../something/Loader.vue';
export default {
    name:'Create',
    data(){
        return{
           skills: null,
           categories: null,
           num:null,
           count:3,
           stateLoad: null,
        }
    },
    components:{
     Loader
    },
    mounted(){
    this.scrollMain();
    this.skills = skills;
    this.getSkills();
    setTimeout(()=>{
        this.stateLoad = true;
    },300)
    },
    methods:{
         getSkills(){
            this.categories = categories.filter((el,k)=>{return k <= this.count });
         },
        searchTarget(e){
          e.target.classList.toggle('active');
             let nexEl = e.target.nextElementSibling;
             nexEl.classList.toggle('active');
        },
        scrollMain(){
         onscroll = ()=>{ var scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
   );
   if(window.scrollY+170 >= scrollHeight - innerHeight) {
         this.count += 4;
         this.getSkills();
      };
      }

        }
    },
}
</script>
<style scoped>
.tittle-techology{
  text-align: center;
  font-size: 28px;
  font-weight: 600;
   margin-top:50px;
}
    .image-techology{
      width: 70px;
      height: 70px;
      margin: 20px 0;
            filter: grayscale(80%);
            transition-duration: .7s;
                       margin-top:36px;
    }
    .circle{
      margin-top:10px;
      width: 16px;
      height: 16px;
      border:2px solid #232323;
      background: #7682df;
      display: block;
      border-radius: 50%;
       margin-bottom:35px;
    }
    .content-techology{
      
       box-shadow: 6px 6px 6px rgba(0,0,0,0.5);
       transition-duration: .2s;
    }
    .name-techology{
      color:#727272;
    }
    .content-techology:hover{
       box-shadow: 10px 10px 10px rgba(0,0,0,0.5);
       transform: translate3d(-1px,-1px ,0);
    }
    .content-techology:hover .image-techology{
            filter: grayscale(0%);
    }
    .arrow{
      font-size: 30px;
      cursor: pointer;
      transition-duration: 0.5s;
    }
    .arrow i{
     pointer-events: none;
    }
    .arrow.active{
      font-size: 30px;
      cursor: pointer;
      transform: rotate(180deg);
    }
    .hidden-content{
      height: 100%;
      max-height: 0;
      opacity: 0;
      transition-duration: 0.5s;
        pointer-events: none;
    }
    .hidden-content.active{
      max-height: 140px;
      opacity: 1;
      cursor:text;
        pointer-events:visible;
    }
      a {
        color:black;
    text-decoration: none;
}
      a:hover {
        color:rgb(100, 100, 100);
    text-decoration: none;
}
.delButt{
  cursor: pointer;
  color: rgb(246, 72, 72);
}
.redactButt{
   cursor: pointer;
  color: rgb(38, 104, 47);
}

</style>