<template>
  <div>
    <p>Double Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{stringCounter}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  //props: ['counter']
  // computed:{
  //     counter(){
  //         //return this.$store.state.counter * 2;
  //         return this.$store.getters.doubleCounter;
  //     }
  // }
  computed: {
      ...mapGetters(["doubleCounter", "stringCounter"])
      }
};
</script>