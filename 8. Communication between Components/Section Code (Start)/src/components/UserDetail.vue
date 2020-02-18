<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User age: {{ userAge }}</p>
    <button @click="resetName">Reset Name</button>
    <!-- change from th child in the parent using callback -->
    <button @click="resetFn()">Reset Name</button>  
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  props: {
    username: String,
    resetFn: Function,
    userAge: Number
  },
  methods: {
    switchName() {
      return this.username
        .split("")
        .reverse()
        .join("");
    },
    //emit event to change the name in the parent
    resetName() {
      this.username = "Max";
      this.$emit("nameWasReset", this.username);      
    }
  },
  created(){
    eventBus.$on("ageWasEdited", (age)=>{
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
