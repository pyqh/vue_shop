import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStatusBar = defineStore('StatusBar', () => {
  const isCollapse = ref(false)
  const status = ref('')
  function handleResize() {
    // if (window.innerWidth < 1024) {
    //   isCollapse.value = true
    // } else {
    //   isCollapse.value = false
    // }
    window.innerWidth < 1024 ? (isCollapse.value = true) : (isCollapse.value = false)
  }

  return { status, isCollapse, handleResize }
})
