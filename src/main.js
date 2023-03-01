import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

const app = createApp(App);

app.use(PrimeVue);
app.component("ButtonApp", Button);
app.component("InputText", InputText);
app.component("MenuBar", Menubar);
app.mount('#app')
