import {createStore} from 'vuex'

const store = createStore({
  state:{
    // 购物清单
    ShopCarList:[]

  },
  mutations:{
    addGoods(state, {goodInfo, typeIndex, colorIndex}){
      // goods {'商品名字','版本', '颜色','价格', '商品图片'}
      // 处理加入购物车的商品， 如果加入了相同的商品，则直接增加它的数量，否则push一个新的
      // console.log(goodInfo);
      console.log('id', goodInfo.id);

      // 查找购物清单, 如果加入的不是新的商品，则数量加一
      const index = state.ShopCarList.findIndex((item)=>{
        return item.goodId === goodInfo.id && 
          item.type === goodInfo.type[typeIndex] && 
          item.color === goodInfo.color[colorIndex]
      })
      console.log('index', index);
      if(index === -1){
        // 清单没有, 压入清单
        let goodEntry = {
          imgUrl: goodInfo.imgUrl,
          goodsName: goodInfo.goodsName,
          Price: goodInfo.goodsPrice,
          type: goodInfo.type[typeIndex],
          color: goodInfo.color[colorIndex],
          num: 1,
          goodId: goodInfo.id
        }
        state.ShopCarList.push(goodEntry)
      }
      else{
        // 如果有则添加数量
        state.ShopCarList[index].num++
      }
      
      console.log(state.ShopCarList);
    }
  }
})

export default store