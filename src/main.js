import Vue from 'vue';
import Vuelidate from 'vuelidate';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(Vuelidate);

const config = {
  apiKey: 'AIzaSyDIKW1zujISrFg1z0qbASbgZh5gkm1Ks9w',
  authDomain: 'vue-notemaker.firebaseapp.com',
  databaseURL: 'https://vue-notemaker.firebaseio.com',
  projectId: 'vue-notemaker',
  storageBucket: 'vue-notemaker.appspot.com',
  messagingSenderId: '964043379601',
  appId: '1:964043379601:web:cb24ef754bacfed9848030',
};
firebase.initializeApp(config);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
