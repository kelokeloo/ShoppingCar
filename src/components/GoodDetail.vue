<template>
  <div>
    <!-- 展示数据 -->
    <main class="mainContainer">
      <aside class="image">
        <div class="ImageContainer">
          <img :src="goodData.goodDetail.imgUrl" alt="">
        </div>
      </aside>
      <div class="detail">
        <h2>{{goodData.goodDetail.goodsName}}</h2>
        <p class="keyWord marginTop">
          {{goodData.goodDetail.goodsDisc}}
        </p>
        
        <p class="type marginTop" >
          <OptionsVue label="型号" v-model:selected="OptionData.typeIndex" :Options="goodData.goodDetail.type"></OptionsVue>
        </p>
        <p class="color">
          <OptionsVue label="颜色" v-model:selected="OptionData.colorIndex" :Options="goodData.goodDetail.color"></OptionsVue>
        </p>
        <p class="Price marginTop">
          {{goodData.goodDetail.goodsPrice}}
        </p>

        <!-- 加入购物车 START -->
        <button class="marginTop btnSubmit bR"
          @click="addGoods(goodData.goodDetail, OptionData.typeIndex, OptionData.colorIndex)"
        >
        {{OptionData}}
          加入购物车
        </button>
        <!-- 加入购物车 END-->
        </div>

    </main>
  </div>
</template>

<script>
import { useRoute } from "vue-router"
import {ref, reactive} from 'vue'
import axios from "axios"
import OptionsVue from "./utility/Options.vue"
import store from "../Vuex/vuex"

  export default {
    setup(props) {
      const $route = useRoute()

      const goodData = reactive({
        goodDetail: {}
      }) 

      //路由参数得到商品id，根据商品id获取商品的详细信息
      let goodId = $route.params.id;

      const getGoodsDetail = async ()=>{
        const {data, status, statusText} = await axios.get(`http://localhost:8080/api/getPhoneDetailById/${goodId}`)
        if(status !== 200){
          return false
        }
        goodData.goodDetail = data
      }      

      // 手机类型选择
      const  OptionData = reactive({
        typeIndex: 0,
        colorIndex: 0
      })

      getGoodsDetail()


      // 添加商品
      const addGoods = (goodInfo, typeIndex, colorIndex)=>{
        let  payload = {
          goodInfo,
          typeIndex,
          colorIndex
        }
        // console.log(payload);
        
        store.commit('addGoods', payload)
      }

      return {
        goodData,
        OptionData,
        addGoods
      }

    },
    components:{
      OptionsVue
    }
  }
</script>

<style lang="scss" scoped>
.mainContainer {
  .image{
    .ImageContainer {
      img{
        width: 100%;
      }
      width: 100%;
    }
    width: 50%;
    flex-shrink: 0;
  }
  .detail{

  }
  display: flex;

}

// 价格 
.Price{
  font-weight: 700;
  font-size: 1.5rem;
  color: red;
  &::after{
    content:'元'
  }
}
.btnSubmit {
  width: 50%;
  height: 2rem;
  border: none;
  cursor: pointer;
  background-color: #ff6a00;
  filter: brightness(1);
  transition: all 0.5s;
  &:hover{
    filter: brightness(1.2);
  }
}
</style>