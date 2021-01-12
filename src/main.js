import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import BaseIcon from "./components/base/BaseIcon.vue";

import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-icon", BaseIcon);

app.mount("#app");
