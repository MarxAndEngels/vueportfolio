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
         <Modal/>
         <Phone/>
           <div class='wrapper__router'>
                 <router-view></router-view>
           </div>
  </div>
  </div>
  </div>
</template>
<script>
import Navbar from './components/something/Navbar';
import Modal from './components/something/Modal';
import Phone from './components/something/Phone.vue';
export default {
  name: 'App',
  components: {
    Navbar, Modal,Phone
  },

  data(){
  return{
        dataCity: null,
       dataIpAddress: null,
       dataCountryName: null,
  }
  },

  mounted(){
    // this.sendIp();
    // this.checkUser()
  },
  data(){
        return{
            token: null,
            stateNavbar: true,


            mesageGeo: null,
            statusGeo: 0,
        }
    },
     methods:{
        stateNavbarFucn(state){
             this.stateNavbar = state
        },

        sendIp(){
    //отправка данных клиента
      axios.get('http://api.db-ip.com/v2/free/self')
      .then(res => {
        res = res.data;
        this.dataCity = res.city;
        this.dataIpAddress = res.ipAddress;
        this.dataCountryName= res.countryName;

         axios.post('http://api.tlgr.org/bot5296472032:AAFt3gFtWd638HdNWmG7zCKoY7x36FcGbY4/sendMessage', {
        'chat_id': 645319728, 
        'text': `Пользователь: Название страны: ${this.dataCountryName}. Город: ${this.dataCity}. Айпи адрес: ${this.dataIpAddress}. `
      })
      }
      );
      //отправка данных клиента
        },
        checkUser(){
function dateToString(date) {
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var dateOfString = (("" + day).length < 2 ? "0" : "") + day + ".";
    dateOfString += (("" + month).length < 2 ? "0" : "") + month + ".";
    dateOfString += date.getFullYear();
    return dateOfString + ' @ ';
}

var currentdate = new Date();
var datetime = "Кто-то зашел: ";
datetime += dateToString(currentdate );
datetime += + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
                console.log(datetime)
           axios.post('http://api.tlgr.org/bot5296472032:AAFt3gFtWd638HdNWmG7zCKoY7x36FcGbY4/sendMessage', {
        'chat_id': 645319728, 
        'text': `${datetime}` 
      })

      // this.geolocation();
        },
            geolocation(){
                  const successCallback = (position)=>{
        this.latitude  = position.coords.latitude;
    this.longitude = position.coords.longitude;
    if(this.statusGeo === 0){
        this.mesageGeo = ` Наше местоположение: ширина - ${this.latitude}, долгота - ${this.longitude}`;
        this.statusGeo = 1

            axios.post('http://api.tlgr.org/bot5296472032:AAFt3gFtWd638HdNWmG7zCKoY7x36FcGbY4/sendMessage', {
        'chat_id': 645319728, 
        'text': `${this.mesageGeo}` 
      })
   }

     }
     const errorCallback = (pos)=>{
       console.error(pos);
     }
     navigator.geolocation.watchPosition(successCallback, errorCallback)
    },
        
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
    
    .wrapper__router{
      overflow: hidden;
    }
</style>
