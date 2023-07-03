import { createApp } from 'vue';
import './css/global.css';

import App from './App.vue'
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(fab);
dom.watch()


createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");




