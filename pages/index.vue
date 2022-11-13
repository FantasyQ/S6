<template>
  <div :class="$style.wrapper">
    <div :class="$style.content">
      <div
        v-for="(item) in productList"
        :key="item.product_id"
        :class="$style.cardBox"
        @click="goToEditPage(item.product_id)"
      >
        <CardProduct :data="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '~/store/product'
import CardProduct from '~/components/card-product'

const productStore = useProductStore()
onMounted(() => {
  if (productStore.productList.length === 0) {
    productStore.fetchProductList()
  }
})
const productList = computed(() => {
  return productStore.productList
})

const router = useRouter()
const goToEditPage = (id) => {
  router.push({
    name: 'product-edit-id',
    params: {
      id
    }
  })
}

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
