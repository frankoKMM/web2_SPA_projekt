import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'
import router from './router';
import Converter from "./components/Converter.vue";
import Home from "./components/Home.vue";
import Game from "./components/Game.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("converter", Converter);
app.component('home', Home);
app.component('game', Game);

app.mount('#app');
