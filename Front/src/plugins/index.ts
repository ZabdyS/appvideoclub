/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import VueTablerIcon from 'vue-tabler-icons';

import Toast, { type PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const toastOptions : PluginOptions = {
  position: POSITION.TOP_RIGHT,
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false
}

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .component("EasyDataTable", Vue3EasyDataTable)
    .use(VueTablerIcon)
    .use(Toast, toastOptions)
    .use(vuetify)
    .use(router)
    .use(pinia)
}
