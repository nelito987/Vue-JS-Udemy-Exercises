<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <hr />
        <h4>Filter to reverse the text</h4>
        <p>{{text | reverseFilter}}</p>
        <p>{{anotherText | reverseFilter}}</p>
        <hr />
        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <h4>Count the length and append it to the text</h4>
        <p>{{text | countSymbols}}</p>
        <p>{{anotherText | countSymbols}}</p>
        <hr />
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <hr />
        <h4>Filter to reverse the text</h4>
        <p>{{reverseText}}</p>
        <hr />
        <h4>Using mixins</h4>
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <p>{{appendCount}}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { appendCountMixin } from "./appendCountMixin.js";

export default {
  data() {
    return {
      text: "Some reversed text",
      anotherText: "Smile"
    };
  },
  mixins: [appendCountMixin],
  filters: {
    reverseFilter(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    reverseText() {
      return this.text
        .split("")
        .reverse()
        .join("");
    }
    // appendCount() {
    //   return this.anotherText + " " + "(" + this.anotherText.length + ")";
    // }
  }
};
</script>

<style>
</style>
