<template>
  <div>
    <main style="margin-top:1rem;">
      <div class="mainContainer main">
        <router-link class="cartContainer" 
          v-for="item in goodsData.goodslist" :key="item.id"
          :to="'/detail/'+item.id"  
        >
          <!-- car -->
          <CartVue
            :imgUrl="item.imgUrl"
            :goodsName="item.goodsName"
            :goodsPrice="item.goodsPrice"
            :goodsDisc="item.goodsDisc"
          ></CartVue>
        </router-link>
        <section style="clear:both"></section>
      </div>
    </main>
   
  </div>
</template>

<script>
import CartVue from "./Cart/Cart.vue"
import axios from 'axios'
import { reactive } from "vue"
  export default {
    setup(props) {
      let goodsData = reactive({
        goodslist:[]
      })

      // 获取手机列表
      const getGoodsList = async ()=>{
        const {data, statusText, status} = await axios.get('http://localhost:8080/api/Goodslist')
        if(status !== 200){
          return console.error(statusText)
        }
        goodsData.goodslist = data
      }
      getGoodsList()

      return {
        goodsData
      }
    },
    components:{
      CartVue
    }
    
  }
</script>

<style lang="scss" scoped>
.main{
  .cartContainer {
    float: left;
    display: block;
    width: 13rem;
    height: 20rem;
    border-radius: 0.5rem;
    overflow: hidden;
    margin: 1rem;
    transition: all .5s;
    outline: 1px solid #999;
    &:hover{
      box-shadow: 0px 0px 5px #999;
      transform: translate(0, -0.5rem);
    }
  }
}

</style>