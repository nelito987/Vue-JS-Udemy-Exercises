<template>
  <div>
    <slot name="title"></slot>
    <slot name="content">content</slot>
    <p class="white">Some text</p>
  </div>
</template>

<script>
export default {
  //   props: ["quote"],
  //   data: function() {
  //     return {
  //       text: this.quote
  //     };
  //   }
};
</script>
<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 25px;
  border-radius: 15px;
  background-color: #b879f8;
  color: darkslateblue;
  font-weight: bold;
}
</style>