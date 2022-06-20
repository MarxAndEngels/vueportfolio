<template lang="">
    <div>
        <div>
  <div class='row margin-top'>
    <div class='col-lg-6 about_people'>
        <div class='about__relative'>
         <img class='about__picture' src="@/assets/about/—Pngtree—men work at home with_5361912.png" alt="">
         
          <img @click='fly' v-if='moneyFly && selectMoneyStyle== "2"' class='about__picture_money' src="@/assets/about/free-icon-money-4342858.png" alt="">
          <img @click='fly' v-if='moneyFly && selectMoneyStyle== "4"' class='about__picture_money_left' src="@/assets/about/K9e.gif" alt="">
            <img @click='fly' v-if='moneyFly && selectMoneyStyle== "6"' class='about__picture_money_sm_big' src="@/assets/about/ZJtH.gif" alt="">
        
        </div>
        <div class='row'>
            <div class='col-sm-5'>
        <button @click='fly' class='btn btn-primary'>{{ moneyFly == true ? 'Отключить анимацию денег' : 'Включить анимацию денег' }} </button>
             </div>
             <div class='col-sm-5 ml-5'>
 <select v-model='selectedStyle' @change='selectStyle' class="form-select" aria-label="Default select example">
  <option disabled value="">Выбрать тип</option>
  <option value="1">Стандартный тип 1</option>
  <option value="2">Стандартный тип 2</option>
  <option value="3">Вращающийся тип 3</option>
  <option value="4">Тип 4</option>
  <option value="5">Тип 5</option>
  <option value="6">Тип 6</option>
      </select>
             </div>
      </div>

    </div>

    <div class='col-lg-6 margin-top about__main'>
        <div class='about__main_message'></div>

          
       <img @click='fly' v-if='moneyFly && selectMoneyStyle == "3"' class='about__picture_money_ul_big' src="@/assets/about/2r6D.gif" alt="">
       <img @click='fly' v-if='moneyFly && selectMoneyStyle == "1"' class='about__picture_money_ul_big' src="@/assets/about/xt.gif" alt=""> 
     <img @click='fly' v-if='moneyFly && selectMoneyStyle== "5"' class='about__picture_money_ul_big' src="@/assets/about/1uJ9.gif" alt=""> 


        <div class='about__main_message_small'></div>
        <div class='about__main_uppertext'>Федоров</div>
        <div class='about__main_uppertext'>Максим</div>

         <div class='about__main_middletext'><span class='circle' ></span> {{ outText }}<span v-if='stick' class='stick'>{{ stick }}</span></div>
         <div class='about__main_text_age'><i class="fa fa-calendar" aria-hidden="true"></i>  <span style='margin-left:4px;'>{{ age }} {{ formatAge }} </span></div>
     <div class='about__main_text_age mt-3'><a href="tel:89200230922"> <span class='phone_icon'><i class="fa fa-phone" aria-hidden="true"></i> </span> <span style='margin-left:4px;'> 89200230922 </span></a> </div>
         <div @click='toggInformation' class='arrow'>
             <div class='about__main_text mt-3'><strong> {{ information == true ? 'Показать больше основной информации' : 'Закрыть' }}  </strong></div>
        <div >
 <i class="fa fa-chevron-down mt-2" :class='{ toggInf:true, active:information }' aria-hidden="true"></i>
     </div>
      </div>
      <div :class='{ information:true, active:information }'>
         <!-- <div class='about__main_text mt-2'><i class="fa fa-university" aria-hidden="true"></i> <strong> Университет:</strong> НГТУ им. Р.Е. Алексеева </div>
         <div class='about__main_text mt-3'><i class="fa fa-address-book-o" aria-hidden="true"></i> <strong> Направление:</strong> Системный анализ и управление </div> -->
         <!-- <div class='about__main_text mt-3'><i class="fa fa-code" aria-hidden="true"></i> <strong>Сайт:</strong> www.super-website.ru </div> -->
         <div class='about__main_text mt-3'> <a href="mailto:gladvalakaspwnz11@gmail.com?body=Здравствуйте,"> <i class="fa fa-at" aria-hidden="true"></i> <strong> Почта:</strong> gladvalakaspwnz11@gmail.com </a> </div>
         <div class='about__main_text mt-3'> <strong>Мои ссылки:</strong> </div>
         <a href="https://t.me/qwerty_maks" target="_blank"><i class="fa fa-telegram" aria-hidden="true"></i></a>
        <div class='about__main_text mt-3'> QR-код </div>
        <a href="https://t.me/qwerty_maks" target="_blank"> <img class='src__telegram' src="https://sun9-west.userapi.com/sun9-8/s/v1/ig2/gipIDyxrVlkETEwhVmriujDeUSYfwaJy-h3wrEdWYbUN2KOr80Lwa_KUgJ6Jjv5k3nI7_aY-GoA0_2W5_9FUty1r.jpg?size=833x1600&quality=95&type=album" alt=""> </a>
         
         <br>
         <div class='about__main_text mt-3'> <a target='__blank' href="https://oplata.qiwi.com/form?invoiceUid=2d7609e8-eb0b-4349-9ed4-84b449c327ed"><i class="fa fa-rub" aria-hidden="true"></i> Подарить мне денег на QIWI</a> </div>
        <!-- https://oplata.qiwi.com/form?invoiceUid=2d7609e8-eb0b-4349-9ed4-84b449c327ed -->
<a target='__blank' href="https://oplata.qiwi.com/form?invoiceUid=2d7609e8-eb0b-4349-9ed4-84b449c327ed">
       <Qrcode/>
       </a>
        </div>
        <div>
<br>
<br>
        </div>
    </div>
  </div>

    </div>
    </div>
</template>
<script>
import Qrcode from './Qrcode.vue';
export default {
    name:'Index',
    components:{
     Qrcode
    },
    data(){
        return{
            text:'Веб разработчик',
            outText: '',
            stick: '|',
            moneyFly: true,
            age: 0,
            information: true,
            formatAge: 'лет',
            selectedStyle: '', 
            selectMoneyStyle: '1',
        }
    },
    mounted(){
        setTimeout(()=>{
          this.textStart();
        },500)
      this.timeAge();
      this.ageToString();
      if(localStorage.getItem('stateMoney') != null){
         this.selectedStyle = localStorage.getItem('stateMoney')
         this.selectMoneyStyle = localStorage.getItem('stateMoney')
      }
      if(localStorage.getItem('fly') != null){
         this.moneyFly = JSON.parse(localStorage.getItem('fly'));
      }
    },
    methods:{
        timeAge(){
        var date1 = new Date("2001/08/08 00:00:00");   
        var date2 = new Date();

        var diff = (date2 - date1)/1000;
        diff = Math.abs(Math.floor(diff));

        var years = Math.floor(diff/(365*24*60*60));

        let ageInterval = setInterval( ()=>{
            this.age++ ;
            if(this.age == years){
              clearInterval(ageInterval);
            }
           },50)
        },
       textStart(){

           let i =0;
           let timer = setInterval( ()=>{
                this.outText += this.text[i];
                i++;
                if(i == this.text.length){
                 clearInterval(timer);
                 setTimeout(()=>{
                     this.stick = null;
                 },3000)
                }
           },300-(Math.random()*50))
       },
       ageToString(){
	     let count = this.age % 100;
	     if (count >= 5 && count <= 20) {
		  this.formatAge = 'лет';
	     } else {
	   	count = count % 10;
		if (count == 1) {
			this.formatAge = 'год';
		} else if (count >= 2 && count <= 4) {
			this.formatAge = 'года';
		} else {
			this.formatAge = 'лет';
		}
	   }
       },
       fly(){
           this.moneyFly = !this.moneyFly;
            localStorage.setItem('fly', this.moneyFly)
       },
       toggInformation(){
             this.information = !this.information;
       },
       selectStyle(){
        this.selectMoneyStyle =this.selectedStyle;
        localStorage.setItem('stateMoney', this.selectMoneyStyle)
       }
    }
}
</script>
<style scoped>
    
    .stick{
        animation: opacity 1s ease-in-out infinite;
        transition-duration: 1s;
    }
    @keyframes opacity{
        from{
          opacity: 1;
        }
        to{
            opacity: 0;
        }
    }
    .about__picture{
        width: 100%;
        max-width: 500px;
    }
    .about__relative{
           position: relative; 
    }
    .about__picture_money{
        cursor: pointer;
        position: absolute;
        top: 180px;
        left: 250px;
        width: 100%;
        max-width: 64px;
        transform: rotate(91deg);
        offset-path: path('M50 59C40 105 43 66 2 2L41 16C50 9.33334 67.6 -2.8 66 2C64 8 60 13 50 59Z');
     animation: followpath 9s linear infinite;
         /* filter: hue-rotate(45deg); */
     /* offset-rotate: 9deg; */
}
.about__picture_money_sm_big{
      cursor: pointer;
        position: absolute;
        top: 180px;
        left: 250px;
        width: 100%;
        max-width: 84px;
        transform: rotate(131deg);
        offset-path: path('M50 59C40 105 43 66 2 2L41 16C50 9.33334 67.6 -2.8 66 2C64 8 60 13 50 59Z');
     animation: followpath 9s linear infinite;
}
.about__picture_money_ul_big{
      cursor: pointer;
        position: absolute;
        top: 198px;
        left: 294px;
        width: 100%;
        max-width: 154px;
        transform: rotate(131deg);
        offset-path: path('M50 59C40 105 43 66 2 2L41 16C50 9.33334 67.6 -2.8 66 2C64 8 60 13 50 59Z');
     animation: followpath 9s linear infinite;
}
.about__picture_money_left{
    cursor: pointer;
        position: absolute;
        top: 186px;
        left: 240px;
        width: 100%;
            max-width: 144px;
        transform: rotate(131deg);
        offset-path: path('M50 59C40 105 43 66 2 2L41 16C50 9.33334 67.6 -2.8 66 2C64 8 60 13 50 59Z');
     animation: followpath 18s linear infinite;
}

@keyframes followpath {
   to {
     motion-offset: 100%;
     offset-distance: 100%;
   }
}

.phone_icon i{
    display: inline-block;
    transform: rotate(90deg);
    /* animation: rotatePhone 0.4s linear; */
}

@keyframes rotatePhone {
   from{
        transform: rotate(10deg);
   }
   to{
        transform: rotate(90deg);
   }
}

.about_people{
    padding-left: 30px;
}
.margin-top{
    margin-top: 78px;
}
.about__main{
    line-height: 1.5;
    padding-left: 10px;
    position: relative;
}
.about__main_uppertext{
    font-size: 66px;
    font-weight: 800;
}
.about__main_middletext{
     margin-top:7px;
     font-size: 32px;
}
.about__main_text{
    margin-top:12px;
     font-size: 18px;
}
.about__main_text a{
    color: inherit;
    margin-top:12px;
     font-size: 18px;
}
.arrow{
     font-size: 36px;
     cursor: pointer;
}
.circle{
      margin-top:10px;
      width: 16px;
      height: 16px;
      border:2px solid #232323;
      background: #5075da;
      /* background: #5FCDA4; */
      display: inline-block;
      border-radius: 50%;
      transform: translateY(-4px);
    }
    .about__main_text_age{
          margin-top:12px;
     font-size: 24px;
    }
    .about__main_text_age a{
        color: inherit;
          margin-top:12px;
     font-size: 24px;
    }
    .circle_little{
      width: 10px;
      height: 10px;
      border:1px solid #232323;
      background: #5075da;
      display: inline-block;
      border-radius: 50%;
      transform: translateY(-1px);
    }
    a{
        text-decoration: none;
        font-size: 34px;
    }

    .information{
        opacity: 1;
        display: block;
        pointer-events:visible;
        transition-duration: 1s;
    }
    .information.active{
            display: none;
        opacity: 0;
         pointer-events: none;
    }
    .toggInf{
        font-size: 36px;
        cursor: pointer;
        transition-duration: 0.8s;
        transform: rotate(180deg);
    }
    .toggInf.active{
       transform: rotate(0deg);
    }
    .about__main_message{
        z-index: -2;
        position: absolute;
        top:-40px;
        right: 44px;
        width:100%;
        height: 460px;
        max-width: 600px;
        /* max-height: 490px; */
        background: #7B95F2;
        transform: rotate(30deg);
        clip-path: ellipse(25% 40% at 50% 50%);
            transition-duration: 1s;
    }
    .about__main_message_small{
          z-index: -1;
        position: absolute;
        top:100px;
        right: 244px;
        width:100%;
        height: 80px;
        max-width: 80px;
        /* max-height: 490px; */
        background: #4F5BB8;
             transform: rotate(10deg);
        clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
            transition-duration: 1s;
    }
    .btn-primary{
        background: #4F5BB8;
    }
    .src__telegram{
        display: block;
        width: 100%;
        max-width: 260px;
        height: 400px;
        border-radius: 12px;
    }
    


    @media ( max-width: 767px){
       .about__main{
           padding-left: 30px;
       }
       .about__main_uppertext {
    font-size: 54px;
    font-weight: 800;
      }
      .about__main_message_small{
        right: 144px;
    }
    }
    @media ( max-width: 576px){
      .form-select{
        margin-top: 15px;
      }
    }
    @media ( max-width: 400px){
        .about__picture_money,.about__picture_money_left, .about__picture_money_sm_big {
       top: 110px;
    left: 130px;
    max-width: 40px;
}
.about__picture_money_ul_big{
     top: 150px;
    left: 130px;
    max-width: 114px;
}
    }
    @media ( max-width: 380px){
      .about__main_message_small{
        right: 104px;
    }
    }
    
</style>