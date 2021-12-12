<template>
  <div class="ShopCarContainer">
    <div class="mainContainer">
      <p class="notices bR" v-if="$store.state.ShopCarList.length === 0">
        购物车中暂无商品
      </p>
      <!-- 渲染商品数据 -->
      <ShopCartVue class="bR"
        v-for="item in $store.state.ShopCarList" :key="item.goodId"
        :goodsInfo="item"
      ></ShopCartVue>
      <!-- 总价 -->
      <footer class="allPrice bR" v-if="$store.state.ShopCarList.length !== 0">
        <span class="info">
          <span>{{$store.getters.Count}}</span>
          <span>{{$store.getters.allPrice}}</span>
        </span>
        <span class="pay">
          <button class="bR">支付</button>
        </span>
      </footer>
    </div>
  </div>
</template>

<script>import store from "../Vuex/vuex"
import ShopCartVue from "./Cart/ShopCart.vue";

// 
  export default {
   setup(){
     console.log(
       store.state.ShopCarList
     );
   },
   components:{
     ShopCartVue
   } 
   
  }
</script>

<style lang="scss" scoped>
.notices {
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  background-color: #F1C40F;
  opacity: 0.7;
  font-weight: 700;
}
.allPrice {
  padding: 1rem;
  box-shadow: 0px 0px 1px #999;
}
.allPrice{
  .pay{
    button{
      cursor: pointer;
      background-color: #ff6a00;
      width: 15rem;
      border: none;
      padding: 0.5rem 1rem;
    }
  }
  .info{
    >span{
      &:nth-child(1){
        &::before{
          content: '总数';
          margin-right: 0.3rem;
          color: black;
        }
      }
      &:nth-child(2){
        &::before{
          content: '总价';
          margin-right: 0.3rem;
          color: black;
        }
        color: red;
        margin-left: 2rem;
      }
    }
    display: flex;
    align-items: center;
  }
  display: flex;
  justify-content: space-between;

}
</style>