import { Middleware } from '@nuxt/types'

const testMiddleware: Middleware = ({ app, redirect }) => {
  if (!app.store?.getters['auth/isLoggedIn']) {
    redirect('/login')
  }
}

export default testMiddleware
