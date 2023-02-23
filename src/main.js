import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './_style.scss';
import App from './App.vue';

library.add();

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');
