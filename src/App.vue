<template>
  <div class="appContainer">
    <!-- 头部 -->
    <header>
      <div class="mainContainer">
        <div class="logo">
          <div class="logoContainer">
            <LogoVue bgColor="#ff6a00"  class="bR"></LogoVue>
          </div>
        </div>
        <div class="navContainer">
          <div class="nav"><navVue></navVue></div>
          <div class="car">
            <a href="#" class="carContainer">
              <car-vue></car-vue>
            </a>
          </div>
        </div>
      </div>
    </header>
    <!-- body -->
    <main style="margin-top:1rem;">
      <div class="mainContainer main">
        <!-- car -->
        <a href="#" class="cartContainer" v-for="item in goodsData.goodslist" :key="item.id">
          <CartVue
            :imgUrl="item.imgUrl"
            :goodsName="item.goodsName"
            :goodsPrice="item.goodsPrice"
            :goodsDisc="item.goodsDisc"
          ></CartVue>
        </a>
        <section style="clear:both"></section>
      </div>
    </main>
  </div>
</template>

<script>
import CarVue from "./components/shopCar/Car.vue"
import LogoVue from "./components/LOGO/Logo.vue"
import navVue from "./components/Header/nav.vue"
import CartVue from "./components/Cart/Cart.vue"
import axios from 'axios'
import { reactive } from "vue"

  export default {
    setup(props) {
      let goodsData = reactive({
        goodslist:[]
      })

      // 获取手机列表
      const getGoodsList = async ()=>{
        const {data, statusText, status} = await axios.get('http://localhost:3000/api/Goodslist')
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
      CarVue,LogoVue,navVue,
      CartVue
    }
  }
</script>

<style lang="scss" scoped>
// 布局
.appContainer {
  header .mainContainer{
    .logo{
      .logoContainer {
        height: 50%;
        width: 100%;
      }
      display: flex;
      align-items: center;
      width: 15rem;
      height: 100%;
    }
    .navContainer {
      .nav {
        height: 2rem;
      }
      .car{
        .carContainer{
          width: 2.5rem;
          height: 2.5rem;
        }
        flex: 1;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
      }
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    display: flex;
    height: 6rem;
  }
}

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

// 样式
.appContainer {
  header{
    .logo{

    }
    // border-bottom: 1px solid #999;
    box-shadow: 0px 2px 3px #999;
  }
}

</style>