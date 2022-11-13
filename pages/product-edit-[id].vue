<template>
  <div :class="$style.wrapper">
    <div :class="$style.content">
      <div :class="$style.imgBox">
        <ImageBoxAlignCenter
          :imgData="{
            width: '160px',
            src: productData.productData.product_img_path,
            alt: productData.productData.product_name
          }"
        />
      </div>
      <div :class="$style.textBox">
        <h1>
          {{ productData.productData.product_name }}
        </h1>
        <p>
          {{ productData.productData.product_description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '../store/product'
import ImageBoxAlignCenter from '~/components/image-box-align-center'

const route = useRoute()

const productID = computed(() => route.params.id)
const productData = reactive({ productData: {} })
const productStore = useProductStore()
const setProductData = () => {
  productData.productData = productStore.getProductByID(productID.value)[0]
}
onMounted(() => {
  if (productStore.productList.length === 0) {
    productStore.fetchProductList()
  } else {
    setProductData()
  }
})
const productList = computed(() => {
  return productStore.productList
})
watch([productList, productID], () => {
  setProductData()
})

</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  width: 1200px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  .imgBox {
    margin-right: 23px;
  }
  .textBox {
    max-width: 280px;
    h1 {
      font-size: 1.5rem;
      margin-bottom: 14px;
    }
    p {
      font-size: 1rem;
    }
  }
}
</style>
