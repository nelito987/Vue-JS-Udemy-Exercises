<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>Age: {{ userAge }}</p>
    <button @click="editAge">Edit Age</button>
    <!-- edit age using callback -->
    <button @click="editAgeFn()">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  props: {
    userAge: Number,
    editAgeFn: Function
  },
  methods: {
    editAge() {
      this.userAge = 15;
      //this.$emit("ageWasEdited", this.userAge);
      eventBus.$emit("ageWasEdited", this.userAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
