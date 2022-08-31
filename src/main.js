// INFO ... => Import all librairies used for the app right here
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// INFO ... =>  Vue.js Instance
// INFO ... => npm run serve is running this file
createApp(App).use(store).use(router).mount("#app");
