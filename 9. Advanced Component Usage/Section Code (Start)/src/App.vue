<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'author'">Author</button>
        <button @click="selectedComponent = 'moreDetails'">Details</button>
        <button @click="selectedComponent = 'counter'">Counter</button>

        <keep-alive>
          <component :is="selectedComponent" class="test"></component>
        </keep-alive>

        <!-- <app-quote>
          <h2 slot="title">{{title}}</h2>
          <p slot="content">Incredible content</p>
        </app-quote>
        <app-quote></app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import MoreDetails from "./components/Details.vue";
import Counter from "./components/Counter.vue";

export default {
  data: function() {
    return {
      title: "Quote title",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    author: Author,
    moreDetails: MoreDetails,
    counter: Counter
  }
};
</script>

<style>
.white {
  color: white;
}
.test {
  margin: 25px;
  border-radius: 15px;
  border: 1px solid rgb(238, 74, 224);
  padding: 30px;
}
</style>
