<template>
  <el-container>
    <BaseSide />
    <el-container>
      <el-header class="header-container">
        <BaseHeader />
      </el-header>
      <main p-7>
        <router-view></router-view>
      </main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import BaseHeader from '@/layouts/BaseHeader.vue'
import BaseSide from '@/layouts/BaseSide.vue'
</script>

<style scoped>
.main-container {
  height: calc(100vh -590px);
}

.header-container {
  padding: 0 !important;
}

html.dark main {
  color: #f5f7fa;
}
</style>
