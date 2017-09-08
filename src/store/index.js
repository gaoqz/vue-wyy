import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex);

const state = {
    skinColor: localStorage.skinColor || '#B72712',
    homeTabIndex: null,
    showAsideMenu: false,
    isPlaying: false,
    showFooter: true,
    showHeader: true,
    audio: {
        name: '',
        singer: '',
        src: '',
        imgUrl: ''
    },
    DOM: {}
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})