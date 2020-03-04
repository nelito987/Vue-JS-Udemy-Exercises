<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="from-group">
          <label>Username</label>
          <input class="form-control" v-model="user.username" type="text" />
        </div>
        <div class="from-group">
          <label>Email</label>
          <input class="form-control" v-model="user.email" type="text" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
        <button class="btn btn-success" @click="getData">Get Users Data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="user in users" v-bind:key="user.username">
            Username:
            <span class="bold">{{user.username}}</span> --------> Email:
            <span class="bold">{{user.email}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {}
    };
  },
  methods: {
    submit() {
      //   console.log(this.user);
      //   this.$http
      //     .post(
      //       "https://udemy-vuejs-resources-app.firebaseio.com/data.json",
      //       this.user
      //     )
      //     .then(
      //       response => {
      //         //console.log(response);
      //       },
      //       error => {
      //         console.log(error);
      //       }
      //     );
      this.resource.save({}, this.user);
      //save aleternative.json
      //this.resource.saveAlt(this.user);
    },
    getData() {
      this.$http
        .get("https://udemy-vuejs-resources-app.firebaseio.com/data.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const result = [];
          for (let key in data) {
            result.push(data[key]);
          }
          this.users = result;
        });
    }
  },
  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "alternative.json" },
      getData: { method: "GET" }
    };

    this.resource = this.$resource("data.json");
    //this.resource = this.$resource("data.json", {}, customActions);
  }
};
</script>

<style>
.btn {
  margin-bottom: 20px;
}

.list-group-item {
  border: 1px solid orange;
  background-color: rgb(250, 229, 198);
}

.bold {
  font-weight: bold;
}
</style>
