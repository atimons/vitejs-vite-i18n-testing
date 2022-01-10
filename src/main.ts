import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';

/*
 * The i18n resources in the path specified in the plugin `include` option can be read
 * as vue-i18n optimized locale messages using the import syntax
 */
import en from './locales/en.json';
import de from './locales/de.json';

const i18n = createI18n({
  locale: 'de',
  messages: {
    en,
    de,
  },
});

createApp(App).use(i18n).mount('#app');
