export default {
  async nuxtServerInit ({ dispatch }, ctx) {
    dispatch('urlHelper/setRootURL', ctx.req.url)

    // INFO -> Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'

    /** Get the VERIFIED authUser on the server */
    if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
      const { allClaims: claims, ...authUser } = ctx.res.locals.user

      //   console.info(
      //     'Auth User verified on server-side. User: ',
      //     authUser,
      //     'Claims:',
      //     claims
      //   )

      if (authUser && !authUser.photoURL) {
        authUser.photoURL = claims.picture
      }

      await dispatch('auth/onAuthStateChanged', {
        authUser,
        claims
      })
    }
  }
}
