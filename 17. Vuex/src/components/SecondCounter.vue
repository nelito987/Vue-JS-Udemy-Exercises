<template>
  <div>
    <button
      class="btn btn-warning"
      @click="incrementAsync({by:50, duration:1000})"
    >Increment +50 (using actions)</button>
    <button
      class="btn btn-warning"
      @click="decrementAsync({by:200, duration:1500})"
    >Decrement -200 (using actions)</button>
  </div>
</template>

<script>
//import {mapMutations} from 'vuex';
import { mapActions } from "vuex";

//using actions
export default {
  methods: {
    // increment() {
    //   //this.$emit('updated', 1);
    //   this.$store.commit('increment');
    // },
    // decrement() {
    //   //this.$emit('updated', -1);
    //   this.$store.commit('decrement');
    // }

    //...mapMutations instead of mapActions in case when using mutations
    ...mapActions(["incrementAsync", "decrementAsync"])
  }
};
</script>