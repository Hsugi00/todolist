// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyDi_wKkiQwuho6qZ-GY_EYKyDw16GX4c78',
  authDomain: 'todo-2c1e1.firebaseapp.com',
  databaseURL: 'https://todo-2c1e1.firebaseio.com',
  projectId: 'todo-2c1e1',
  storageBucket: '',
  messagingSenderId: '750961535337'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
