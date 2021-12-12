<template>
  <div>
    <!-- 选项组件，用于选择合适的选项 -->
    <h3 class="title">{{label}}</h3>
    <ul class="options"> 
      <li class="option"
        v-for="(item,index) in Options" :key="index"
        :class="selected === index ? 'selected':''"
        @click="selectedChange(index)"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      // 表示选项的标题
      label:{
        type: String,
        default: 'type'
      },
      // 表示选择的选项下标
      selected:{ 
        type: Number,
        require: true
      },
      // 用于渲染选项
      Options:{
        type: Array,
        default: []
      }
    },
    emit:['update:selected'],
    setup(props, context) {



      const selectedChange = (curSelectIndex)=>{
        context.emit('update:selected', curSelectIndex)
      }
      
      return {
        selectedChange
      }

    },
  }
</script>

<style lang="scss" scoped>
li{
  list-style: none;
}

// 选项风格
.options{
  display: flex;
  .option {
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid #95A5A6;
  border-radius: 0.3rem;
  transition: all 0.5s;
  flex-shrink: 0;
  &:hover{
    cursor: pointer;
  }
}
}

.selected{
  background-color: #ff6a00;
}

.title{
  margin-bottom: 0.6rem;
}

</style>