<template>
  <div
    :class="$style.imageBox"
    :style="{
      width: props.imgData.width,
      'min-width': props.imgData.width,
      'padding-top': props.imgData.width
    }"
  >
    <img :src="props.imgData.src" :alt="props.imgData.alt">
  </div>
</template>

<script setup>
const props = defineProps({
  imgData: {
    width: String,
    src: String,
    alt: String
  }
})
</script>

<style lang="scss" module>
.imageBox {
  width: 44.44444444%;
  min-width: 44.44444444%;
  padding-top: 44.44444444%;
  position: relative;
  overflow: hidden;
  img {
    height: 100%;
    display: inline-block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
}
</style>
