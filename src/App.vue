<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <Navbar :token=token @stateNavbar='stateNavbarFucn'></Navbar>
         <div class='wrap-content' :class='{active: stateNavbar}'>
                <div class="container">
        <!-- <router-link :to="{ name: 'send.index' }">main</router-link>
        <br>
        <router-link :to="{ name: 'new.index' }">new</router-link>
        <br> -->
    
              <router-view></router-view>
  </div>
  </div>
  </div>
</template>

<script>
import Navbar from './components/something/Navbar';
export default {
  name: 'App',
  components: {
    Navbar
  },
  data(){
        return{
            token: null,
            stateNavbar: true
        }
    },
     methods:{
        stateNavbarFucn(state){
             this.stateNavbar = state
        }
    }
}
</script>

<style scoped>
.wrap-content{
    position: absolute;
    left: 180px;
    width:calc(100% - 190px);
    height: 100vh;
    transition-duration: 0.5s;
}
.wrap-content.active{
    left: 80px;
    width:calc(100% - 80px);
}
    
</style>
