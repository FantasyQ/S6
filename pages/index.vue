<template>
  <div :class="$style.wrapper">
    <div :class="$style.content">
      <div
        v-for="(item, index) in mockDada"
        :key="index"
        :class="$style.cardBox"
      >
        <CardProduct :data="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CardProduct from '~/components/card-product'
const mockDada = reactive([
  {
    product_id: 'P123456', // string
    product_name: '企鵝嘟嘟玩偶', // string
    product_price: 55023.0, // number
    product_category: '玩偶', // string
    product_img_path: 'https://picsum.photos/800/600', // 請一律使用此路徑
    product_description: '此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！'
  },
  {
    product_id: 'P123456', // string
    product_name: '企鵝嘟嘟玩偶', // string
    product_price: 55023.0, // number
    product_category: '玩偶', // string
    product_img_path: 'https://picsum.photos/800/600', // 請一律使用此路徑
    product_description: '此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！'
  },
  {
    product_id: 'P123456', // string
    product_name: '企鵝嘟嘟玩偶', // string
    product_price: 55023.0, // number
    product_category: '玩偶', // string
    product_img_path: 'https://picsum.photos/800/600', // 請一律使用此路徑
    product_description: '此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！'
  },
  {
    product_id: 'P123456', // string
    product_name: '企鵝嘟嘟玩偶', // string
    product_price: 55023.0, // number
    product_category: '玩偶', // string
    product_img_path: 'https://picsum.photos/800/600', // 請一律使用此路徑
    product_description: '此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！'
  },
  {
    product_id: 'P123456', // string
    product_name: '企鵝嘟嘟玩偶', // string
    product_price: 55023.0, // number
    product_category: '玩偶', // string
    product_img_path: 'https://picsum.photos/800/600', // 請一律使用此路徑
    product_description: '此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！'
  },
  {
    product_id: 'P123456', // string
    product_name: '企鵝嘟嘟玩偶', // string
    product_price: 55023.0, // number
    product_category: '玩偶', // string
    product_img_path: 'https://picsum.photos/800/600', // 請一律使用此路徑
    product_description: '此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！'
  }
])
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  justify-content: center;
}
.content {
  width: 1200px;
  padding: 18px 25px 19px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cardBox {
  width: 360px;
  height: 160px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .27);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 23px;
  cursor: pointer;
}
</style>
