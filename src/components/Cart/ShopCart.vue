<template>
  <div class="shopCartContainer">    
    <!-- 商品图片展示区 -->
    <div class="imgContainer">
      <img :src="goodsInfo.imgUrl" alt="图片展示区域">
    </div>
    <!-- 商品信息 -->
    <div class="content">
      <div class="label">
        <h2>{{goodsInfo.goodsName}}</h2>
      </div>
      <div class="option">
        <span>{{goodsInfo.type}}</span>
        <span>{{goodsInfo.color}}</span>
      </div>
      <div class="priceAndNum">
        <span class="price">
          {{goodsInfo.Price * goodsInfo.num}}
        </span>
        <span class="num">
          <button @click="sub(goodsInfo)">-</button>
          <span>{{goodsInfo.num}}</span>
          <button @click="add(goodsInfo)">+</button>
        </span>
      </div>
    </div>
    
  </div>
</template>

<script>import store from "../../Vuex/vuex"

  export default {
    props:{
      goodsInfo:{
        type: Object,
        default(){
          return {
            imgUrl:'http://localhost:8080/images/phone/RedmiNote11Pro.webp',
            goodsName: '商品名',
            Price: 1000,
            type: "8GB+128GB", 
            color: "红", 
            num: 1, 
            goodId: 1 
          }
        }
      }
    },
    setup(){
      const add = (goodsInfo)=>{
        store.commit('increaseGoodsSum', goodsInfo) 
      }
      const sub = (goodsInfo)=>{
        store.commit('reduceGoodsSum', goodsInfo)
      }
      return {
        add,
        sub
      }
    }
  }
</script>

<style lang="scss" scoped>
.shopCartContainer{
  .imgContainer{
    position: relative;
    img{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
    }
    width: 15rem;
    height: 10rem;
  }
  .content{
    .option{
      >span{
        display: inline-block;
        margin: 0.5rem 0;
        margin-right: 0.5rem;
        padding: 0.3rem 1rem;
        border-radius: 0.3rem;
        background-color: #BDC3C7;
      }
    }
    .priceAndNum{
      .price{
        color: red;
        font-weight: 700;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
      }
      .num{ 
        button{
          cursor: pointer;
          border: none;
          width: 2rem;
          height: 2rem;
        }
        >span{
          padding: 1rem;
        }
        padding: 1rem;
      }
      display: flex;
      justify-content: space-between;
      margin-top: auto;
      margin-bottom: 1rem;
    }
    flex: 1 ;
    display: flex;
    flex-direction: column  ;
  }
  display: flex;

  box-shadow: 0px 0px 2px #999;
  margin: 1rem 0;
}
</style>