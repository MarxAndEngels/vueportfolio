<template>
    <div>
        <!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Мессенджеры QR-код</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <center>
        <div class='about__main_text mt-3'> <strong>Мои ссылки:</strong> </div>
         <a class='about__main_text-icon' href="https://t.me/qwerty_maks" target="_blank"><i class="fa fa-telegram" aria-hidden="true"></i></a>
         <a style='font-size: 34px' href="https://wa.me/79200230922" target="_blank" class='whatsApp'><i class="fa fa-whatsapp" aria-hidden="true"></i></a>

         </center> 
             <center>
               <br>
        <router-link :to="{ name: 'send.index' }" > <button data-bs-toggle="modal" data-bs-target="#exampleModal" class='btn btn-outline-success'><span class='circle'></span> Написать мне онлайн</button> </router-link>
        <!-- <div class='about__main_text mt-3'> Написать мне онлайн </div> -->
        </center> 
        <br>
        <center>
        <div class='wrapper__qrcode'>
        <div class='about__main_text mt-3'> <strong> QR-код</strong> Телеграм</div>
        <br>
        <a  href="https://t.me/qwerty_maks" target="_blank"> <img class='src__telegram' src="@/assets/about/photo_2022-06-20_17-29-26.jpg" alt=""> </a>
       
        <div class='about__main_text mt-5'>  <strong> QR-код</strong> WhatsApp</div>
           <br>
        <a  href="https://wa.me/79200230922" target="_blank"> <img class='src__whatsapp' src="@/assets/about/photo_2022-06-20_17-28-33.jpg" alt=""> </a>
        
        <div class='about__main_text mt-5'>  <strong> QR-код</strong> Viber</div>
           <br>
        <a  href="viber://add?number=79867468922"> <img class='src__viber' src="@/assets/about/photo_2022-06-20_17-28-29.jpg" alt=""> </a>
      </div>
        </center>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
export default {
        name: 'Modal'
}
</script>
<style scoped>
.circle{
      width: 12px;
      height: 12px;
      border:2px solid #232323;
      background: rgb(10, 133, 10);
      /* background: #5FCDA4; */
      display: inline-block;
      border-radius: 50%;
      transform: translateY(1px);
}
.whatsApp{
    margin-left: 12px;
    color: rgb(44, 176, 44);
}
    .about__main_text{
    margin-top:12px;
     font-size: 18px;
}
.about__main_text a{
    color: inherit;
    margin-top:12px;
     font-size: 22px;
}

.about__main_text-icon{
     font-size: 34px;
}

    .src__telegram{
        display: block;
        width: 100%;
        max-width: 260px;
        height: 400px;
        border-radius: 12px;
    }
    .src__whatsapp{
        border: 10px solid rgb(129, 221, 129);
        display: block;
        width: 100%;
        max-width: 400px;
        height: 400px;
        border-radius: 50%;
    }
    .src__viber{
        border: 10px solid rgb(110, 107, 167);
        display: block;
        width: 100%;
        max-width: 400px;
        height: 400px;
        border-radius: 10%;
    }

    .wrapper__qrcode{
    width:100%;
    height: 300px;
    overflow: scroll;
}

  /* Для всех скроллбаров */
::-webkit-scrollbar {
    width: 8px;
    height: 0px;
    background-color: #5075da;
}

::-webkit-scrollbar-thumb {
    width: 8px;
     background-color: #adb3c2;
}
</style>