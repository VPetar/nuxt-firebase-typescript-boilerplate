export const state = {
  rootURL: '/'
}

export const actions = {
  setRootURL ({ commit }, rootURL) {
    commit('SET_ROOT_URL', rootURL)
  }
}

export const mutations = {
  SET_ROOT_URL: (state, rootURL) => {
    state.rootURL = rootURL
  }
}

export const getters = {
  getRootURL: state => state.rootURL
}
