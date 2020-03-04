import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://udemy-vuejs-resources-app.firebaseio.com/';

// Vue.http.interceptors.push((request, next) =>{
//   console.log(request)
//   request.method = 'PUT'
// })
new Vue({
  el: '#app',
  render: h => h(App)
})
