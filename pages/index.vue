<template>
  <div>
    <h1>Hello</h1>
    <div
      v-for="(item, index) in 20"
      :key="index"
      :class="$style.cardBox"
    >
      <CardProduct />
    </div>
  </div>
</template>

<script setup>
import CardProduct from '~/components/card-product'
</script>

<style lang="scss" module>
.cardBox {
 width: 360px;
 height: 160px;
 border-radius: 10px;
}
</style>
