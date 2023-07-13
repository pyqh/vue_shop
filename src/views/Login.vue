<template>
  <back-ground>
    <el-form :model="loginForm">
      <el-form-item>
        <el-input v-model="loginForm.username" :placeholder="t('邮箱')" clearable />
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginForm.password" :placeholder="t('密码')" clearable show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()" w-full>
          <img src="../assets/login.svg" class="mr-2 h-5" alt="" />{{ $t('登入') }}</el-button
        >
      </el-form-item>
    </el-form>
    <div flex flex-items-center>
      <router-link to="/register" color-black>{{ $t('注册') }}</router-link>
      <el-divider direction="vertical" />
      <router-link to="/forgetpassword" color-black>{{ $t('忘记密码') }}</router-link>
      <div flex-grow></div>
      <Language />
    </div>
  </back-ground>
</template>

<script setup lang="ts">
import BackGround from '@/components/Background.vue'
import Language from '@/components/Language.vue'
import { useRouter } from 'vue-router'
import type { User } from '@/types'
import { handleLogin } from '@/api/user'
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import md5 from 'md5'

const router = useRouter()
const { t } = useI18n()

const loginForm: User = reactive({
  username: '11@qq.com',
  password: '123456'
})

const login = async () => {
  try {
    if (loginForm.username === '' || loginForm.password === '') {
      ElMessage.error(t('请输入用户名或密码'))
      return
    }
    //邮箱格式验证
    const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
    if (!reg.test(loginForm.username)) {
      ElMessage.error(t('邮箱格式不正确'))
      return
    }
    loginForm.password = md5(loginForm.password)
    const res = await handleLogin(loginForm)
    if (res.code === 200) {
      const { user } = storeToRefs(useUserStore())
      user.value.username = loginForm.username
      console.log(user.value.username)
      user.value.token = res.token
      ElMessage.success(t('登入成功'))
      router.push('/user')
    } else {
      ElMessage.error(t('用户名或密码错误'))
    }
  } catch (error) {
    ElMessage.error(t('登入失败'))
    // console.log(error);
  }
}
</script>

<style scoped lang="scss">
:deep(.el-input__wrapper) {
  background-color: #f3f3f3;
}
</style>
