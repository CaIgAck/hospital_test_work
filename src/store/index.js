import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quality: {
      min: 0,
      max: 200,
      sliders: 100,
      fullVolume: false,
      edit: false
    }
  },
  getters: {
    getFullVolume(state) {
      return state.quality.fullVolume;
    },
    getEdit(state) {
      return state.quality.edit;
    },
    getMinValue(state) {
      return state.quality.min;
    },
    getMaxValue(state) {
      return state.quality.max;
    },
    getSlidersValue(state) {
      return state.quality.sliders;
    }
  },
  mutations: {
    editCategoriesInfo(state, { field, value }) {
      state.quality[field] = value;
    },
    clearField(state) {
      state.quality.sliders = 100;
      state.quality.edit = false;
      state.quality.fullVolume = false;
    }
  },
  actions: {
    async submitDataPhoto(context, { Volume, edit }) {
      console.log(context, {
        fullVolume: Volume,
        edit: edit
      });
      await axios
        .post("http://89.223.125.89:3001/api/v1/images", {
          fullVolume: Volume,
          edit: {
            incompleteVolume: edit.incompleteVolume,
            artifacts: edit.artifacts
          }
        })
        .then(() => {
          context.commit("clearField");
        })
        .catch(err => console.log(err));
    }
  },
  modules: {}
});
