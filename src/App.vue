<template>
  <div class="appContainer">
    <!-- 头部 -->
    <header>
      <div class="mainContainer">
        <router-link to="/" class="logo">
          <div class="logoContainer">
            <LogoVue bgColor="#ff6a00"  class="bR"></LogoVue>
          </div>
        </router-link>
        <div class="navContainer">
          <div class="nav"><navVue></navVue></div>
          <div class="car">
            <router-link to="/shopCar" class="carContainer">
              <car-vue 
                style="transition: all 0.2s;"
                :style="carEffectData.carEffect === true? carEffectData.carStyle : ''"
              ></car-vue>
              <div class="num">
                {{Count}}
              </div>
            </router-link>
            
          </div>
        </div>
      </div>
    </header>
    <!-- body -->
    <router-view></router-view>
  </div>
</template>

<script>
import CarVue from "./components/shopCar/Car.vue"
import LogoVue from "./components/LOGO/Logo.vue"
import navVue from "./components/Header/nav.vue"
import {computed, reactive} from 'vue'
import store from "./Vuex/vuex"

  export default {
    setup(props) {
      // 购物车动画效果
      const carEffectData = reactive({
        carEffect: false,
        carStyle: {
          transform: 'scale(1.5)'
        }
      })  
      const Count = computed(()=>{
        carEffectData.carEffect = true
        setTimeout(() => {
          carEffectData.carEffect = false
        }, 200);
        return store.getters.Count
      })
      return {
        Count,
        carEffectData
      }
    },
    components:{
      CarVue,LogoVue,navVue
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
          position: relative;
          >.num{
          width: 1.3rem;
          height: 1.3rem;
          border-radius: 50%;
          line-height: 1.3rem;
          text-align: center;
          color: white;
          font-weight: 700;
          background-color: red;
          // padding: 0.3rem;
          font-size: 0.3rem;
          position: absolute;
          top:-0.5rem;
          right: -0.5rem;
          
        }
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
header {
  margin-bottom: 1rem;
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

.carStyle {
  transform: scale(2);
}

</style>