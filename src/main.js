import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia';
import { app } from './firebase.js';
import './style.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faEye,
    faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
library.add(faEye);
library.add(faEyeSlash);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).use(createPinia()).use(app).mount('#app')


