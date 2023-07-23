import { createApp } from 'vue'
import '@/assets/css/style.css'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store'
import vuetify from '@/plugins/vuetify.js'

// Vuetify
import 'vuetify/styles'
// i18n
import { createI18n } from "vue-i18n";
import zh from "@/locales/zh-TW.json";
import en from "@/locales/en-US.json";

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  globalInjection: true,  // 全局注入 $t 函数
  locale: localStorage.getItem("locale") ?? "zh-TW",
  fallbackLocale: "zh-TW",
  messages: {
    "zh-TW": zh,
    "en-US": en
  }
});

app.use(vuetify);
app.use(i18n);
app.use(store);
app.use(router);
app.mount('#app');