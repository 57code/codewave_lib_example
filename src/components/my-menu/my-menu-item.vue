<template>
  <el-menu-item :index="index">
    <slot></slot>
    <template #title>
      <slot name="title"></slot>
    </template>
  </el-menu-item>
</template>
<script>
export default {
  name: "my-menu-item",
  props: {
    index: String,
  },
};
</script>
<style scoped></style>
