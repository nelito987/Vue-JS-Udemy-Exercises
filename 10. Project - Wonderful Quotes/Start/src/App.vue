<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxCount"></app-header>
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <div class="alert alert-warning" role="alert">Info: Click on a quote to delete it!!!</div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";

export default {
  data: function() {
    return {
      quotes: ["Some text"],
      maxCount: 10
    };
  },
  methods: {
    newQuote(quote) {
        if(this.quotes.length >= this.maxCount){
            return alert('Quotes must be less than 10. Please delete a quote first.')
        }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  }
};
</script>

<style>
.alert-warning {
  text-align: center;
}
</style>
