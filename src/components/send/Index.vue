<template>
   <div>
        <div class="container">
             <Loader v-if='success'/>
<!-- ошибки -->
          <p v-if="errors.length" class='mt-5'>
    <ul>
      <li class='error' v-for="error in errors" :key='error'>{{ error }}</li>
    </ul>
  </p>
   <!-- ошибки -->

          <h2 v-if='successMessageEnd' style='color:green' class='mt-5'>Ваше сообщение успешно отправленно!</h2>
          <h2 v-if='success' class='mt-5'>Отправка<span class="one">.</span><span class="two">.</span><span class="three">.</span>​</h2>
          <div v-if='!successMessage'>
        <h1 class='mt-4'>Обратная связь</h1>
        <small class="form-text text-muted">Можете отправить мне ваше важное сообщение на почту</small>
  <form ref="form" @submit.prevent="sendEmail">
     <label for="exampleInput1" class="form-label mt-3">Ваше имя</label>
    <input type="text" name="name" class="form-control" id="exampleInput1" aria-describedby="emailHelp">
       <label for="exampleInput2" class="form-label mt-4">Ваша почта</label>
    <input type="text" name="email" class="form-control" id="exampleInput2" aria-describedby="emailHelp" v-model='email'>
       <label for="exampleInput3" class="form-label mt-4">Ваш телефон</label>
        <vue-tel-input v-model="valv"></vue-tel-input>
        <div style='margin-top:10px'> Исходные данные телефона: {{ valv }}</div>
    <input hidden type="text" name="phone" ref='number' class="form-control" id="exampleInput3" aria-describedby="emailHelp">
  <label for="exampleFormControlInput3" class="form-label mt-4">Ваше сообщение</label>
    <textarea name="message"  class="form-control" id="exampleFormControlTextarea3" rows="6" v-model='textar'></textarea>
    <input type="submit" value="Отправить сообщение" class='btn btn-success mt-4'>
  </form>
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
    }
  },
  methods: {
    sendEmail() {
           this.errors = [];
          if (!this.email) {
        this.errors.push('Заполните вашу почту');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Введите корректную почту');
      }
         let countText= this.textar.length 
          if(countText <= 10){
             this.errors.push('Текст вашего сообщения должен содержать хотя бы 10 символов'); 
          }

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
     validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
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

</style>