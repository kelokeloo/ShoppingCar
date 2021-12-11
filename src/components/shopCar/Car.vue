<template>
  <div class="CarContainer" :style="{backgroundColor: bgColor}">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-gouwu"></use>
    </svg>
  </div>
</template>

<script>
  export default {
    props:{
      bgColor:{
        default: '#ff6a00'
      }
    }
  }
</script>

<style lang="scss" scoped>
// 布局
.CarContainer {
  >svg{
    width: 100%;
    height: 100%;
  }
  width: 100%;
  height: 100%;
  
}
// 美化
.CarContainer {
  border-radius: 50%;
}
</style>