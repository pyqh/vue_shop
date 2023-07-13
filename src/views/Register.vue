<template>
  <UserService type="register"></UserService>
</template>

<script setup lang="ts">
import UserService from '@/components/UserService.vue'
</script>

<!-- <template>
  <back-ground>
    <el-form ref="registerFormRef" :model="registerForm" :rules="rules">
      <el-form-item prop="username">
        <el-input v-model="registerForm.username" :placeholder="t('邮箱')" class="right-border-radius" />
        <el-select v-model="emailSuffix" class="left-border-radius">
          <el-option v-for="item in emailOptions" :key="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item prop="verificationCode">
        <el-input v-model.number="registerForm.verificationCode" :placeholder="t('邮箱验证码')" />
        <el-button type="primary" @click="send" :disabled="time !== 0" ml-4>{{ time === 0 ? $t('发送') :
          $t('等待发送', { time })
        }}</el-button>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="registerForm.password" type="password" :placeholder="t('密码')" autocomplete="off" clearable />
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input v-model="registerForm.checkPass" type="password" :placeholder="t('确认密码')" autocomplete="off"
          clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="registerForm.InvitationCode" :placeholder="t('邀请码(选填)')" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register(registerFormRef)" w-full>
          <img src="../assets/register.svg" class="mr-2 h-5" alt="">{{ $t('注册') }}</el-button>
      </el-form-item>
    </el-form>
    <div flex flex-items-center>
      <router-link to="/login" color-black>{{ $t('返回登入') }}</router-link>
      <div flex-grow></div>
      <Language />
    </div>
  </back-ground>
</template>

<script setup lang="ts">
import BackGround from '@/components/Background.vue';
import Language from '@/components/Language.vue';
import type { UserService } from '@/types';
import { sendCode, registerAccount } from '@/api/user';
import { useIntervalFn } from '@vueuse/core';
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

let registerFormRef = ref<FormInstance>()

//密码
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error(t('请输入密码')))
  } else {
    if (registerForm.checkPass !== '') {
      if (!registerFormRef.value) return
      registerFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
//确认密码
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error(t('请输入密码')))
  } else if (value !== registerForm.password) {
    callback(new Error(t('两次输入密码不一致!')))
  } else {
    callback()
  }
}

let registerForm: UserService = reactive({
  username: "",
  password: "",
  checkPass: "",
  verificationCode: undefined as unknown as number,
  InvitationCode: '',
});

const rules = reactive<FormRules>({
  username: [{ required: true, message: t('请输入邮箱'), trigger: 'blur' }],
  verificationCode: [{ required: true, message: t('请输入验证码') },
  { type: 'number', message: t('请输入数字验证码') },],
  password: [
    { min: 6, max: 16, message: t('长度在 6 到 16 个字符'), trigger: 'blur' },
    { validator: validatePass, trigger: 'blur' }],
  checkPass: [
    { min: 6, max: 16, message: t('长度在 6 到 16 个字符'), trigger: 'blur' },
    { validator: validatePass2, trigger: 'blur' }],
})

const emailOptions = ref(['@gmail.com', '@qq.com', '@163.com'])

const emailSuffix = ref<string>()
onMounted(() => {
  emailSuffix.value = emailOptions.value[0]
})
//发送验证码倒计时
const time = ref(0)
const { pause, resume } = useIntervalFn(() => {
  time.value--
  if (time.value <= 0) {
    pause()
  }
}, 1000, {
  immediate: false,  // 首次是否自动启动定时任务
  immediateCallback: false // 是否延时执行定时任务
})
//发送验证码
const send = async () => {
  if (time.value === 0) {
    let data = await sendCode(registerForm.username + emailSuffix.value)
    ElMessage({
      message: data.msg,
      type: data.code = 200 ? 'success' : 'error',
    })
    time.value = 6
    resume()
  }
}
//注册
const register = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      console.log('submit!')
      let data = await registerAccount(registerForm)
      ElMessage({
        message: data.msg,
        type: data.code = 200 ? 'success' : 'error',
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style scoped lang="scss">
:deep(.el-input__wrapper) {
  background-color: #f3f3f3;
}

:deep(.el-form-item__content) {
  flex-wrap: nowrap;
}

.left-border-radius {
  :deep(.el-input__wrapper) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
  }
}

.right-border-radius {
  :deep(.el-input__wrapper) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
  }
}
</style> -->
