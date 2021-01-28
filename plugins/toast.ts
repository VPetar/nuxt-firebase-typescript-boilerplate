import { Plugin } from '@nuxt/types'

// @ts-ignore
import toast from 'siiimple-toast'

// declare module 'siiimple-toast-vue' {
//   import * as toast from 'siiimple-toast'
//   interface toast {
//       new(opt: SomeThirdParty.Options): SomeThirdParty.Type
//   }
//   export = toast;
// }

interface toastInterface {
  alert: Function
  success: Function
  message: Function
}

declare module 'vue/types/vue' {
  // this.$toast inside Vue components
  interface Vue {
    $toast: toastInterface
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$toast inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $toast: toastInterface
  }
  // nuxtContext.$toast
  interface Context {
    $toast: toastInterface
  }
}

declare module 'vuex/types/index' {
  // this.$toast inside Vuex stores
  interface Store<S> {
    $toast: toastInterface
  }
}

const toastPlugin: Plugin = (_context, inject) => {
  inject(
    'toast',
    toast.setOptions({
      // container: 'body',
      // class: 'siiimpleToast',
      // margin: 15,
      // delay: 0,
      duration: 6000,
      // style: {},
      position: 'bottom|center'
    })
  )
}

export default toastPlugin
