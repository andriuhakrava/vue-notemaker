import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: JSON.parse(localStorage.getItem('notesList')) || [],
  },
  mutations: {
    addNoteToLocalStorage(state, payload) {
      state.notes.push(payload);
    },
    addNoteToFirebase(state, payload) {
      state.notes.push(payload);
    },
  },
  actions: {
    addNoteToLocalStorage({ commit }, payload) {
      localStorage.setItem('notesList', JSON.stringify(payload));
      commit('addNoteToLocalStorage', payload);
    },
    addNoteToFirebase({ commit }, payload) {
      commit('addNoteToFirebase', payload);
    },
  },
});
