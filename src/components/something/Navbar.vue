<template lang="">
    <div>
       <div class='vnav' :class='{active: isNavbar}'>
           <div class='vnav-burg' @click='togglNavbar' :class='{active: isNavbar}'> <span>It'sMyPortfolio :3 </span>
           <i class="fa fa-bars"></i>
           <center>

<!-- <div id="nav-icon3">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div> -->

           </center>
           </div>
            
             <div class='vnav-opt' :class='{active: isNavbar}'>
                 <div> <router-link :to="{ name: 'skills.index' }" ><i class="fa fa-cog" aria-hidden="true"></i>  <span> Skills </span></router-link> </div>
                 <div> <router-link :to="{ name: 'works.index' }" ><i class="fa fa-briefcase" aria-hidden="true"></i>  <span> Some cases </span></router-link> </div>
                  <div> <router-link :to="{ name: 'about.index' }" ><i class="fa fa-user-circle-o" aria-hidden="true"></i>  <span> About me </span></router-link> </div>
                 <div> <router-link :to="{ name: 'send.index' }" > <i class="fa fa-envelope-o" aria-hidden="true"></i> <span> Send offer</span> </router-link></div>
                 <div> <router-link :to="{ name: 'code.js.index' }" > <i class="fa fa-code" aria-hidden="true"></i> <span> Code</span> </router-link></div>
                 <div> <a href="https://t.me/qwerty_maks" target="_blank"><i class="fa fa-telegram" aria-hidden="true"></i> <span> Мой Telegram</span></a></div>
                 <div> <a href="https://wa.me/79200230922" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i> <span> Мой WhatsApp</span></a></div>
                 <div> <a data-bs-toggle="modal" data-bs-target="#exampleModal" href="#"><i class="fa fa-qrcode" aria-hidden="true"></i> <span> Мессенджеры</span></a></div>
             </div>
       </div>
    </div>
</template>
<script>

export default {

    name:'Navbar',
    data(){
        return{
           isNavbar: true,
           admin: false,
        }
    },
    props:[
        'token'
    ],

    mounted(){

    },
    methods:{
        togglNavbar(){
          this.isNavbar = !this.isNavbar;

          this.$emit('stateNavbar', this.isNavbar);
        //   this.openMenu();
        },
        // openMenu(){
        //     let menu = document.querySelector('#nav-icon3');
        //     menu.classList.toggle('open');
        // }
    }
}
</script>
<style scoped>
  *{
    box-sizing: border-box;
  }
  .vnav{
      position: fixed;
      top:0;
      left:0;
      width:100%;
      max-width:190px;
      height: 100%;
      background: #232323;
      display: flex;
      align-items: center;
      justify-content: center;
      transition-duration: 0.6s;
  }
  .vnav.active{
      max-width:70px;
  }
  .vnav-opt div{

      margin-top: 10px;
  }
  a {
    text-decoration: none;
}
  .vnav-opt div span, .vnav-opt div i{
      text-decoration: none;
      color:snow;
      font-size: 18px;
      cursor: pointer;
      transition-duration: 0.7s;
  }
  .vnav-burg{
      position:absolute;
      top:0;
      padding-top: 20px;
      color:snow;
      font-size: 30px;
      cursor: pointer;
      transition-duration: 1s;
  }
  .vnav-burg span{
      font-size: 20px;
      animation: fade 1s ease-in;
      display: inline-block;
      margin-bottom: 16px;
  }

  .vnav-burg.active span{
      display: none;
      margin-bottom: 0px;
  }
 @keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

  .vnav-burg i{
      display: flex;
      justify-content: center; 
      color:snow;
  }
  .vnav-opt.active span{
      display: none;
  }
  .vnav-opt.active{
       transition-duration: 1s;
      text-align: center;
  }
/* 
#nav-icon3 {
    width: 26px;
    height: 22px;
    position: relative;
    margin: 10px;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
} 
#nav-icon3 span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: snow;
    border-radius: 9px;
    left: 0;
    transform: rotate(0deg);
    transition: .75s ease-in-out;
        opacity: 1;
}
#nav-icon3 span:nth-child(1) {
    top: 0px;
}
#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
    top: 10px;
}
#nav-icon3 span:nth-child(4) {
    top: 20px;
}
#nav-icon3.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
    opacity: 0.05;
}
#nav-icon3.open span:nth-child(2) {
    transform: rotate(45deg);
        opacity: 0.05;
}
#nav-icon3.open span:nth-child(3) {
    transform: rotate(-45deg);
        opacity: 0.05;
}
#nav-icon3.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
    opacity: 0.05;
} */

</style>