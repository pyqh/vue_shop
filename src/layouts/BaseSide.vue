<template>
  <div class="h-screen flex flex-col">
    <div class="text-center font-700 entry" @click="$router.push('/')">Vue shop</div>
    <el-menu :collapse="isCollapse">
      <el-menu-item-group v-for="item in data" class="flex flex-col">
        <template #title>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item
          v-for="nav in item.nav"
          :key="nav.path"
          :index="nav.title"
          @click="handleClick"
          :class="{ 'link-active': $route.path === nav.path }"
        >
          <router-link :to="nav.path" flex flex-items-center flex-grow>
            <el-icon>
              <component :is="nav.icon" />
            </el-icon>
            <div :class="{ hidden: isCollapse }">
              {{ nav.title }}
            </div>
          </router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import type { SidebarGroup } from '@/types'
import 'element-plus/theme-chalk/display.css'
import {
  HomeFilled,
  UserFilled,
  Memo,
  Shop,
  Help,
  Wallet,
  ShoppingCart,
  Share
} from '@element-plus/icons-vue'
import { useStatusBar } from '@/stores/statusBar'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
const router = useRouter()

const { isCollapse } = storeToRefs(useStatusBar())

let data: SidebarGroup[] = [
  {
    title: '',
    nav: [
      {
        icon: HomeFilled,
        title: '首页',
        path: '/user'
      },
      {
        icon: Shop,
        title: '商店',
        path: '/user/goods'
      }
    ]
  },
  {
    title: '我的',
    nav: [
      {
        icon: UserFilled,
        title: '个人中心',
        path: '/user/profile'
      },
      {
        icon: Wallet,
        title: '我的钱包',
        path: '/user/wallet'
      },
      {
        icon: ShoppingCart,
        title: '订单统计',
        path: '/user/order'
      },
      {
        icon: Share,
        title: '邀请好友',
        path: '/user/invite'
      }
    ]
  },
  {
    title: '使用',
    nav: [
      {
        icon: Memo,
        title: '快速使用',
        path: '/user/tutorial'
      },
      {
        icon: Help,
        title: '常见问题',
        path: '/user/faq'
      }
    ]
  }
]

onMounted(() => {
  const { status } = storeToRefs(useStatusBar())
  data.forEach((item) => {
    item.nav.forEach((nav) => {
      if (nav.path === router.currentRoute.value.path) {
        status.value = nav.title
      }
    })
  })
})

const handleClick = (key: { index: string }, keyPath: string[]) => {
  const { status } = storeToRefs(useStatusBar())
  console.log(key.index, keyPath)
  status.value = key.index
}

onMounted(() => {
  const { handleResize } = useStatusBar()
  window.addEventListener('resize', handleResize)
  handleResize()
})
</script>

<style lang="scss" scoped>
.entry {
  line-height: calc(var(--el-menu-item-height) * 1.3);
  background-color: #3b92f8;
  color: #fff;
}

:deep(.el-menu) {
  border-right: none;
}

:deep(.el-menu-item) {
  // padding-left: 2rem !important;
  border-radius: 2px;
}

a {
  color: #78828a;
}

.link-active {
  a {
    color: #6777ef;
    font-weight: 600;
  }

  &.el-menu-item {
    background-color: #f5f7fa;
    // border-left: 4px solid #6777ef;
  }
}

html.dark {
  .el-menu {
    background-color: var(--dark-bg);
    color: #304156;
  }
}
</style>
