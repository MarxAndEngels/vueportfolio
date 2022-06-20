<template>
  <div class='mt-1'>
    <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
  </div>
</template>
<script>
  import QrcodeVue from 'qrcode.vue'
 
  export default {
       name:'Qrcode',
    data() {
      return {
        value: 'https://oplata.qiwi.com/form?invoiceUid=2d7609e8-eb0b-4349-9ed4-84b449c327ed',
        size: 150,
      }
    },
    components: {
      QrcodeVue,
    },
  }
</script> 