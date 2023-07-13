<template>
  <el-dropdown>
    <el-button text> <img src="../assets/earth.svg" h-5 mr-1 />{{ $t('language') }} </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="toggle(language.简体中文)">简体中文</el-dropdown-item>
        <el-dropdown-item @click="toggle(language.English)">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { language } from '@/hooks/language'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

function toggle(value: language): void {
  document.cookie = `locale=${value}`
  locale.value = value // 不刷新页面重新设置语言
}
</script>
