/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  export interface GlobalComponents {
    AButton: typeof import('ant-design-vue/es')['Button']
    AModal: typeof import('ant-design-vue/es')['Modal']
    Header: typeof import('@/components/Header.vue')['default']
    Icons: typeof import('@/components/Icons.vue')['default']
    Meta2d: typeof import('@/components/Meta2d.vue')['default']
    Meta2dTwo: typeof import('@/components/Meta2dTwo.vue')['default']
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 声明全局变量
declare interface Window {
  meta2d: any
}
