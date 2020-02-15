<template>
  <div class="container">
    <my-header></my-header>
    <hr />
    <app-content></app-content>
    <hr />
    <my-footer></my-footer>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Content from "./Content.vue";
import Header from "./Header.vue";

export default {
  components: {
    "my-footer": Footer,
    "app-content": Content,
    "my-header": Header
  }
};
</script>

<style>
</style>
