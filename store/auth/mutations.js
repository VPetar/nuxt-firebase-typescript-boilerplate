import initialState from './state'

export default {
  RESET_STORE: (state) => {
    Object.assign(state, initialState())
  },

  SET_AUTH_USER: (state, { authUser }) => {
    const { email, uid, displayName, photoURL } = authUser
    state.authUser = {
      email,
      uid,
      displayName,
      photoURL
    }
  }
}
