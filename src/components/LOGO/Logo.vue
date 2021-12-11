<template>
  <div class="LogoContainerCom" :style="{backgroundColor: bgColor}">
    <h2>SHOP</h2>
  </div>
</template>

<script>
  export default {
    props:['bgColor']
  }
</script>

<style lang="scss" scoped>
.LogoContainerCom {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>