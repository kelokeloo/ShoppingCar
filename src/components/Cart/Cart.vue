<template>
  <div class="Com_CarContainer">
    <!-- 商品照片 -->
    <div class="image">
      <img :src="imgUrl" alt="#">
    </div>
    <div class="container">
      <div>{{goodsName}}</div>
      <div class="disc">{{goodsDisc}}</div>
      <div class="price">{{goodsPrice}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      imgUrl:{
        type: String,
        default:'http://localhost:3000/images/phone/XiaomiMix4.webp'
      },
      goodsName:{
        type: String,
        default: '手机'
      },
      goodsPrice:{
        type: Number,
        default: 1999
      },
      // 商品描述
      goodsDisc:{
        type: String,
        default: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述'
      }
    }
  }
</script>

<style lang="scss" scoped>
.Com_CarContainer {
  .image{
    position: relative;
    >img{
      // 居中对齐
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 100%;
    }
    width: 100%;
    height: 60%;
    overflow: hidden;
  }
  .container {
    & :first-child{
      font-size: 1.3rem;
      margin-bottom: .2rem;
    }
    >.disc{
      height: 2.5rem;
      // padding: .1rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    & :last-child{
      margin-top: .5rem;
      color: #C0392B;
      font-weight: 700;
      font-size: 1.2rem;
    }
    padding: 1rem;
  }
  width: 100%;
  height: 100%;
}

</style>