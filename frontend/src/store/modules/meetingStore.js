import router from "../../router"

const meetingStore = {
  namespaced: true,
  state: {
    isGameMode: false,
    isMusicMode: false,
    isAnonymousMode: false,
    isSnapshotMode: false,
    isChatPanel: false,
  },
  getters: {
  },
  mutations: {
    SET_ISGAME_MODE(state, value) {
      state.isGameMode = value
    },
    SET_ISMUSIC_MODE(state, value) {
      state.isGameMode = value
    },
    SET_ISANONYMOUS_MODE(state, value) {
      state.isAnonymousMode = value
    },
    SET_ISSNAPSHOT_MODE(state, value) {
      state.isSnapshotMode = value
    },
    SET_CHATPANEL(state, value) {
      state.isChatPanel = value
    }
  },
  actions: {
    startGameMode({ commit }) {
      commit('SET_ISANONYMOUS_MODE', false)
      commit('SET_ISSNAPSHOT_MODE', false)
      commit('SET_ISMUSIC_MODE', false)
      commit('SET_ISGAME_MODE', true)
    },
    startMusicMode({ commit }) {
      commit('SET_ISANONYMOUS_MODE', false)
      commit('SET_ISSNAPSHOT_MODE', false)
      commit('SET_ISGAME_MODE', false)
      commit('SET_ISMUSIC_MODE', true)
    },
    startAnonymousMode({ commit }) {
      commit('SET_ISGAME_MODE', false)
      commit('SET_ISSNAPSHOT_MODE', false)
      commit('SET_ISMUSIC_MODE', false)
      commit('SET_ISANONYMOUS_MODE', true)
    },
    startSnapshotMode({ commit }) {
      commit('SET_ISSNAPSHOT_MODE', true)
      commit('SET_ISGAME_MODE', false)
      commit('SET_ISMUSIC_MODE', false)
      commit('SET_ISANONYMOUS_MODE', false)
      
    },
    closeMultiPanel({ commit }) {
      commit('SET_ISGAME_MODE', false)
      commit('SET_ISMUSIC_MODE', false)
      commit('SET_ISANONYMOUS_MODE', false)
      commit('SET_ISSNAPSHOT_MODE', false)
      router.push({ name: 'MeetingPage'})
    },
    clickChatPanel({ commit }, value) {
      commit('SET_CHATPANEL', value)
    }
  }

}

export default meetingStore