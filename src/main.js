import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextAreaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyA6-mzLkZjrAdRtKaNNYcnpbMxqlyPkDHk",
  authDomain: "vue-calendar-58a41.firebaseapp.com",
  databaseURL: "https://vue-calendar-58a41.firebaseio.com",
  projectId: "vue-calendar-58a41",
  storageBucket: "vue-calendar-58a41.appspot.com",
  messagingSenderId: "374539493475",
  appId: "1:374539493475:web:f6388540b43cf8cf445856"
})

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
