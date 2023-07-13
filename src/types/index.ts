import type { defineComponent } from 'vue'

export interface User {
  username: string
  password: string
}
export interface UserService extends User {
  checkPass: string
  verificationCode: number
  InvitationCode: string
}
export interface UserState {
  username: string
  token: string
}

export interface SidebarGroup {
  title: string
  nav: {
    icon: ReturnType<typeof defineComponent>
    title: string
    path: string
  }[]
}
