<template>
    <div>
        <div :class="{'wrapper__phone':true, 'active': activeState}" data-bs-toggle="modal" data-bs-target="#exampleModal">

            <span class='phone'>
                  <i class="fa fa-phone" aria-hidden="true"></i> 
            </span>
            <span :class="{'phone-text':true, 'active': activeState }">
                 Связаться со мной 😊😋
            </span>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
           activeState: false,
        }
    },
    mounted(){
        setTimeout(()=>{
          this.activeState = true
        },3000)
    }
}
</script>
<style scoped>
    .wrapper__phone{
        cursor: pointer;
        position: fixed;
        background: #7B95F2;
        bottom: 10px;
        left: 52%;
        width: 100%;
        max-width: 264px;
        height: 40px;
        z-index: 1231;
        padding: 8px 20px;
        transform: translate(-50%,-50%);
        border-radius: 20px;
        transition-duration: 0.8s;
    }
    .wrapper__phone.active{
        left: 96%;
        max-width: 44px;
        height: 40px;
        z-index: 1231;
        border-radius: 50%;
        padding: 8px 5px;
    }
    .fa-phone{
        margin-left: 10px;
          transform: rotate(90deg);
    }
    .phone-text{
        display: inline-block;
        margin-left: 12px;
        /* color: snow; */
    }
    .phone-text.active{
        display: none;
        margin-left: 4px;
        /* color: snow; */
    }
    @media(max-width: 776px){
        .wrapper__phone.active{
        left: 90%;
    }
    }
</style>