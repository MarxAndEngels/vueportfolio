<template>
   <div>
        <div class="container">
             <Loader v-if='success'/>

          <h2 v-if='successMessageEnd' style='color:green' class='mt-5'>Ваше сообщение успешно отправленно!</h2>
         <h2 v-if='successMessageEnd' @click='goBack' class='goBack mt-1'>Вернуться обратно!</h2>
          <h2 v-if='success' class='mt-5'>Отправка<span class="one">.</span><span class="two">.</span><span class="three">.</span>​</h2>
          <div v-if='!successMessage'>
        <h1 class='mt-4'>Обратная связь</h1>

        <!-- ошибки -->
          <p v-if="errors.length" class='mt-3'>
    <ul>
      <li class='error' v-for="error in errors" :key='error'>{{ error }}</li>
    </ul>
  </p>
   <!-- ошибки -->
        
        <small class="form-text text-muted">Можете отправить мне ваше важное сообщение на почту или в телеграм</small>
  <form ref="form" @submit.prevent="sendEmail">
     <label for="exampleInput1" class="form-label mt-3">Ваше имя</label>
    <input type="text" name="name" class="form-control" id="exampleInput1" aria-describedby="emailHelp" v-model='name'>
       <label style='display:none' for="exampleInput2" class="form-label mt-4">Ваша почта</label>
    <input hidden type="text" name="email" class="form-control" id="exampleInput2" aria-describedby="emailHelp" v-model='email'>
       <label for="exampleInput3" class="form-label mt-4">Ваш телефон</label>
        <vue-tel-input v-model="valv"></vue-tel-input>
        <div style='margin-top:10px'> Исходные данные телефона: {{ valv }}</div>
    <input hidden type="text" name="phone" ref='number' class="form-control" id="exampleInput3" aria-describedby="emailHelp">
  <label for="exampleFormControlInput3" class="form-label mt-4">Ваше сообщение</label>
    <textarea name="message"  class="form-control" id="exampleFormControlTextarea3" rows="6" v-model='textar' placeholder="Отправь мне свое сообщение :)"></textarea>
    
     <button class='btn btn-primary mt-4' type="submit"><i class="fa fa-at" aria-hidden="true"></i> Отправить сообщение на почту</button>
    <!-- <input type="submit" value="Отправить сообщение на почту" class='btn btn-success mt-4'> -->
  </form>
      <button @click='sendTelegram' class="btn btn-dark mt-2"><i class="fa fa-telegram" aria-hidden="true"></i> Отправить сообщение в телеграм</button>
  </div>
  </div>
  <br>
  <br>
  </div>
</template>

<script>
//email
import emailjs from '@emailjs/browser';

//phone
import { VueTelInput } from 'vue-tel-input';


import Loader from '../something/Loader.vue';

export default {
   data(){
    return{
      valv:null,
      success:false,
      successMessage: false,
      successMessageEnd:false,
       errors:[],
       email:null,
       textar:'',
       dataCity: null,
       dataIpAddress: null,
       dataCountryName: null,
       name: null,
       latitude: null,
       longitude: null,
       statusGeo: 0,
       mesageGeo: null
    }
  },
  mounted(){
      // this.sendIp();
      // this.geolocation();
  },
  methods: {
    sendEmail() {
          this.errorMessage()

         if (!this.errors.length) {

      this.success = true;
      this.successMessage = true;
      this.$refs.number.value = this.valv;

      //код отправки на почту
      emailjs.sendForm('service_xi6b3a7', 'template_5dkoyf5', this.$refs.form, 'nDSiLDkSbK-jA770u')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.success = false;
            this.successMessageEnd = true;
        }, (error) => {
            console.log('FAILED...', error.text);
        });
         //код отправки на почту
         }
         
    },
    geolocation(){
                  const successCallback = (position)=>{
        this.latitude  = position.coords.latitude;
    this.longitude = position.coords.longitude;
    if(this.statusGeo === 0){
        this.mesageGeo = ` Наше местоположение: ширина - ${this.latitude}, долгота - ${this.longitude}`;
        this.textar += ` Наше местоположение: ширина - ${this.latitude}, долгота - ${this.longitude}`
        this.statusGeo = 1
   }

     }
     const errorCallback = (pos)=>{
       console.error(pos);
     }
     navigator.geolocation.watchPosition(successCallback, errorCallback)
    },
//     validPhone(){
//      let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
// let phone = '2257687';
// // дальше идет проверка на соответствие выражению
// if(!regex.test(phone)){
// alert('Не соответствует');
// }else{
// alert('Соответствует');
// }
//     },
     validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    sendIp(){
           axios.get('http://api.db-ip.com/v2/free/self')
      .then(res => {
        res = res.data;
        this.dataCity = res.city;
        this.dataIpAddress = res.ipAddress;
        this.dataCountryName= res.countryName;
        this.textar = 'Здравствуйте, мы из '+ this.dataCountryName + ' ( ' + this.dataCity + ' ).';
      }
      );
    },
    errorMessage(){
         this.errors = [];
      //     if (!this.email) {
      //   this.errors.push('Заполните вашу почту');
      // } else if (!this.validEmail(this.email)) {
      //   this.errors.push('Введите корректную почту');
      // }
      if(!this.valv){
         this.errors.push('Укажите хоть какой-нибудь телефон');
      }
         let countText= this.textar.length 
          if(countText <= 8){
             this.errors.push('Текст вашего сообщения должен содержать хотя бы 9 символов'); 
          }
    },
    sendTelegram(){
    this.errorMessage();

 if (!this.errors.length) {

     this.success = true;
      this.successMessage = true;
      axios.post('http://api.tlgr.org/bot5296472032:AAFt3gFtWd638HdNWmG7zCKoY7x36FcGbY4/sendMessage', {
        'chat_id': 645319728, 
        'text': `Имя: ${this.name}. 😊 Телефон: ${this.valv }. 😊 Сообщение: ${this.textar}.` 
      }).then(res=>{
          this.success = false;
            this.successMessageEnd = true;
      })

    }
    },
    goBack(){
      window.location.reload()
    }
  },
  components:{
    VueTelInput,
    Loader
  }
}
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style scoped>
    .container{
        max-width: 720px;
    }

  .error{
        color: rgb(243, 70, 70);
    }
.one,.two, .three{
    opacity: 0;
    -webkit-animation: dot 1.3s infinite;
    animation: dot 0.9s infinite;
}
.one{
    animation-delay: 0.0s;
}

.two {
    animation-delay: 0.2s;
}

.three {
    animation-delay: 0.3s;
}

@-webkit-keyframes dot {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes dot {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.goBack{
  color:blue; 
  cursor:pointer;
}

</style>