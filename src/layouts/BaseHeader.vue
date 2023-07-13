<script lang="ts" setup>
import { Expand, Fold, ArrowDownBold } from '@element-plus/icons-vue'
import { useStatusBar } from '@/stores/statusBar'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import Language from '@/components/Language.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

let isExpand = ref(true)

const { status } = storeToRefs(useStatusBar())
const { isCollapse } = storeToRefs(useStatusBar())

const { hello } = storeToRefs(useUserStore())
const { logout } = useUserStore()

const expandSideBar = () => {
  isExpand.value = !isExpand.value
  isCollapse.value = !isCollapse.value
}

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="flex flex-items-center px-4 header">
    <el-button text @click="expandSideBar">
      <el-icon>
        <component :is="isExpand ? Expand : Fold" scale-150></component>
      </el-icon>
    </el-button>
    <div class="" pl-3.75 overflow-hidden>{{ status }}</div>

    <div flex-grow></div>
    <el-button @click="toggleDark()" text>
      <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
      <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
    </el-button>
    <Language ml-2 />
    <el-dropdown ml-2>
      <el-button text>
        {{ hello }}
        <el-icon>
          <ArrowDownBold />
        </el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="$router.push('/user/profile')"> 个人中心 </el-dropdown-item>
          <el-dropdown-item @click="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: calc(var(--el-menu-item-height) * 1.3);
  background: #3b92f8;
}
</style>
