import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import type { UserState } from '@/types'
import router from '@/router'

export const useUserStore = defineStore('user', () => {
  const user = reactive<UserState>({
    username: '',
    token: ''
  })
  const hello = computed(() => 'Hello! ' + user.username)

  // async function login(data: User) {
  //
  // }

  function logout() {
    user.username = ''
    user.token = ''
    sessionStorage.removeItem('token')
    router.push('/')
  }
  return { user, hello, logout }
})
