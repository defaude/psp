import Vue from "vue";
import Vuex from "vuex";
import { Config, State } from "@/store/State";

Vue.use(Vuex);

export default new Vuex.Store<State>({
  state: {
    config: null,

    ui: {
      styles: [],
      artists: [],
      songs: [],
      descriptions: []
    }
  },

  mutations: {
    APPLY_CONFIG(state, config: Config) {
      state.config = config;
    }
  },

  actions: {
    async loadConfig({ commit }): Promise<void> {
      const config = await fetch("./config.json").then(resp => resp.json());
      commit("APPLY_CONFIG", config);
    }
  },

  getters: {
    isConfigReady(state): boolean {
      return !!state.config;
    }
  }
});
