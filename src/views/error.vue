<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const back = () => {
  router.push('/')
}
</script>

<template>
  <div class="error-page">
    <el-result icon="error" title="找不到该路由">
      <template #extra>
        <el-button @click="back" type="primary">前往首页</el-button>
      </template>
    </el-result>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
