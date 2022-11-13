<template>
  <div :class="$style.wrapper">
    <div :class="$style.imageBox">
      <img :src="data.product_img_path" alt="">
    </div>
    <div :class="$style.contentBox">
      <h4>
        {{ props.data.product_name }}
      </h4>
      <p>
        {{ props.data.product_description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
})
</script>

<style lang="scss" module>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  //background-color: rgba(255, 186, 95, 0.2);
}
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
.contentBox {
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
    font-size: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    overflow: hidden;
    font-weight: 400;
    margin-bottom: 5px;
  }
  p {
    font-size: 1.125rem;
    height: 1.125rem;
    line-height: 1.125rem;
    overflow: hidden;
  }
}
</style>
