import { createApp } from 'vue';
import { router } from './routes';
import { createPinia } from 'pinia';
import App from './App.vue';
import './style.css';

const pinia = createPinia();
createApp(App).use(pinia).use(router).mount('#app');
