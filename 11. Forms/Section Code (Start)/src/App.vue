<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr />
          <div class="form-group">
            <label for="email">Mail</label>
            <input type="text" id="email" v-model="userData.email" class="form-control" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="userData.password" class="form-control" />
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" id="age" v-model="userData.age" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label>
          <br />
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea id="message" rows="5" v-model="message" class="form-control"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input type="checkbox" id="sendmail" value="SendMail" v-model="sendMail" /> Send Mail
            </label>
            <label for="sendInfomail">
              <input type="checkbox" id="sendInfomail" value="SendInfoMail" v-model="sendMail" /> Send Infomail
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input type="radio" id="male" value="Male" v-model="gender" /> Male
          </label>
          <label for="female">
            <input type="radio" id="female" value="Female" v-model="gender" /> Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select id="priority" class="form-control" v-model="selectedPriority">
            <option v-for="priority in priorities" v-bind:key="priority">{{priority}}</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <app-switch v-model="dataSwitch"></app-switch>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <button 
                class="btn btn-primary"
                @click.prevent="submitted">Submit!
            </button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>
              Mail:
              <span class="bold">{{userData.email}}</span>
            </p>
            <p>
              Password:
              <span class="bold">{{userData.password}}</span>
            </p>
            <p>
              Age:
              <span class="bold">{{userData.age}}</span>
            </p>
            <p>
              Message:
              <span style="white-space: pre" class="bold">{{message}}<br/></span>
            </p>
            <p>
              <strong>Send Mail?</strong>
            </p>
            <ul>
              <li v-for="item in sendMail" class="bold" v-bind:key="item">{{item}}</li>
            </ul>
            <p>
              Gender:
              <span class="bold">{{gender}}</span>
            </p>
            <p>
              Priority:
              <span class="bold">{{selectedPriority}}</span>
            </p>
            <p>Switched: <span class="bold">{{dataSwitch}}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from "./Switch.vue";

export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
        age: 35
      },
      message: "Message text",
      sendMail: [],
      gender: "Male",
      priorities: ["High", "Medium", "Low"],
      selectedPriority: "Medium",
      dataSwitch: false,
      isSubmitted: false
    };
  },
  methods:{
      submitted(){
          this.isSubmitted = true;
      }
  },
  components: {
      appSwitch: Switch
  }
};
</script>

<style>
.bold {
  font-weight: bold;
}
</style>
