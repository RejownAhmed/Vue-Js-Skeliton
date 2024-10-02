import { createApp } from "vue";

import mitt from "mitt";
import App from "@/App.vue";
import router from "@/router";
import { createPinia } from "pinia";
// import VWave from "v-wave";
// import notification from "vue-modern-notification";
// import VueApexCharts from "vue3-apexcharts";

// Assets
import "@/assets/scss/style.scss";

// Any plugins
import progressBar from "@/plugins/progress-bar/index";
// Any directives
// import detectOutsideClick from "@/directives/click/detectOutsideClick";
// import focusInput from "@/directives/form/focusInput";
// import lazyLoadImages from "@/directives/image/lazyLoadImages";

// const notificationConfig = {};
const progressBarOptions = {
  color: "#6DCC4C",
  gradient: "linear-gradient(to left, #6DCC4C, #6DCC4C)",
  failedColor: "#ed213a",
  failedGradient: "linear-gradient(to left, #ed213a, #93291e)",
  thickness: "2px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

// Initialize App
const app = createApp(App);
// Set Any App Global Properties
const emitter = mitt();
app.config.globalProperties.emitter = emitter; // Global Emitter

// Set necessary plugins, directives, etc.
app
  // .directive("click-outside", detectOutsideClick)
  // .directive("lazy-load", lazyLoadImages)
  // .directive("focus-onmount", focusInput)
  // .use(VWave)
  .use(progressBar, progressBarOptions)
  // .use(notification, notificationConfig)
  // .use(VueApexCharts)
  .use(createPinia())
  .use(router)
  .mount("#app");
