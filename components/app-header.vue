<template>
  <div :class="$style.wrapper">
    <div :class="$style.content">
      <div :class="$style.leftBox">
        Back
      </div>
      <span :class="$style.pageTitle">
        Product Shelf
      </span>
      <div :class="$style.rightBox">
        Create
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" module>
$ContentHeight: 60px;
.wrapper {
  height: $ContentHeight;
  display: flex;
  justify-content: center;
}
.content {
  width: 1200px;
  height: 100%;
  display: flex;
  line-height: $ContentHeight;
  text-align: center;
  .leftBox {
    width: 100px;
    justify-self: flex-start;
    background-color: #faa;
  }
  .pageTitle {
    flex-grow: 1;
  }
  .rightBox {
    width: 100px;
    justify-self: flex-end;
    background-color: #faa;
  }
}
</style>
