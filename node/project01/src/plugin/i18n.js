import { createI18n } from "vue-i18n";

import en from '@/i18n/en.json'
import ko from '@/i18n/ko.json'
import es from '@/i18n/es.json'

const i18n = createI18n({
    locale: 'en',           //기본언어
    fallbackLocale : 'ko', // 대체 언어가 없을때 나와야되는 언어
    messages:{
        en,
        ko,
        es
    
    }
})

export default i18n;