import { createI18n } from 'vue-i18n'
import { getCookie } from '@/hooks/language'
import { zh } from './locales/zh'
import { en } from './locales/en'

export const i18n = createI18n({
  locale: getCookie('locale') || 'zh',
  legacy: false,
  globalInjection: true,
  fallbackLocale: 'en',
  messages: {
    zh,
    en
  }
})
