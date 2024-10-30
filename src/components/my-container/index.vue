<template>
  <div>
    <div :class="$style.container">
      <div :class="$style.header">
        <slot name="header">
          <u-text>title</u-text>
        </slot>
      </div>
      <div :class="$style.body">
        <slot>
          <u-text>content</u-text>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "my-container",
  props: {
    text: {
      type: String,
      default: "Hello",
    },
  },
};
</script>
<style module>
.container {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  min-height: 200px;
}
.header {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.header p {
  margin: 0;
}
.body {
  padding: 10px;
}
</style>
