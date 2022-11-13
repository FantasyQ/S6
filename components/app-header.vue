<template>
  <div :class="$style.wrapper">
    <div :class="$style.content">
      <div :class="[$style.buttonBox, $style.left]">
        <NuxtLink
          v-if="isEditPage"
          to="/"
        >
          Back
        </NuxtLink>
      </div>
      <span :class="$style.pageTitle">
        Product Shelf
      </span>
      <div :class="[$style.buttonBox, $style.right]">
        <span
          v-if="isEditPage"
        >
          Edit
        </span>
        <span v-else>
          Create
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const isEditPage = computed(() => route.name === 'product-edit-id')

</script>

<style lang="scss" module>
@import '~/assets/variable.scss';
$ContentHeight: 60px;
.wrapper {
  height: $ContentHeight;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, .2);
}
.content {
  width: 1200px;
  padding: 0 $windowPaddingLeftRight;
  height: 100%;
  display: flex;
  line-height: $ContentHeight;
  text-align: center;
  .buttonBox {
    width: 100px;
    display: flex;
    align-items: center;
    a, span {
      width: 100%;
      height: 40px;
      border: 2px solid rgb(235, 162, 72);
      border-radius: 10px;
      text-decoration: none;
      color: #000;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;
    }
    &.left {
      justify-self: flex-start;
    }
    &.right {
      justify-self: flex-end;
      a, span {
        background-color: rgb(235, 162, 72);
        border: none;
        color: #fff;
      }
    }
  }
  .pageTitle {
    flex-grow: 1;
  }
}
</style>
