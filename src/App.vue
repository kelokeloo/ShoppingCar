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
              <car-vue></car-vue>
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


  export default {
    setup(props) {
      
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

</style>