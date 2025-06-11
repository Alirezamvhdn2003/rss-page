import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import 'virtual:windi.css';
import windiConfig from '../windi.config.js';

import farsi from './languages/farsi'
import english from './languages/english'
import arabic from './languages/arabic'
import japanese from './languages/japanese'

const i18n = createI18n({
    locale: 'fa-IR',
    fallbackLockale: 'fa-IR',
    messages: {
        'fa-IR': farsi,
        'en-US': english,
        'ar-SA': arabic,
        'ja-JP': japanese
    },
    datetimeFormats: {
        'fa-IR': farsi.dateTimeFormats,
        'en-US': english.dateTimeFormats,
        'ar-SA': arabic.dateTimeFormats,
        'ja-JP': japanese.dateTimeFormats
    }
})

const app = createApp(App)

app.use(i18n)
app.mount('#app')
