<template>
  <div>
    <h3>Edit the User</h3>
    <div>Locale: {{$route.query.locale}}</div>
    <div>Number: {{$route.query.someNumber}}</div>
    <button class="btn btn-warning" @click="confirmed = true">Confirm</button>

    <div class="highDiv"></div>
    <p id="data">Some additional info</p>
  </div>
</template>

<script>
//example of beforeRouteLeave. If the 'Confirm' button is not click, 
//a confirmaiton dialog will appear when the 'Go to Home page' is clicked

//Note that beforeRouteEnter is the only guard that supports passing a callback to next. 
//For beforeRouteUpdate and beforeRouteLeave, this is already available, 
//so passing a callback is unnecessary and therefore not supported

export default {
  data() {
    return {
      confirmed: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm("Are you sure?")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>

<style>
.highDiv {
  height: 700px;
  background-color: chocolate;
}
</style>