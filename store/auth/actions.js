export default {
  onAuthStateChanged ({ commit, state, getters, rootGetters }, { authUser }) {
    if (!authUser) {
      commit('RESET_STORE')
      return
    }

    commit('SET_AUTH_USER', { authUser })

    if (rootGetters['urlHelper/getRootURL'] !== '/login') {
      // this.app.router.push(rootGetters['urlHelper/getRootURL'])
    } else {
      // there is a weird bug when you're logged in / cached,
      // and you go to /login page. it doesn't load properly.
      // will be investigated, but setTimeout for 1ms solves it.
      setTimeout(() => {
        this.app.router.push('/')
      }, 1)
    }
  }
}
