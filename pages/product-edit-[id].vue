<template>
  <div :class="$style.wrapper">
    <div :class="$style.content">
    </div>
  </div>
</template>

<script setup>
import ImageBoxAlignCenter from '~/components/image-box-align-center'
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  align-items: center;
}
.content {
  width: 1200px;
  display: flex;
  .imageBox {

  }
}
</style>
