export default {
    showOrHideHeader(state, flag) {
        state.showHeader = flag;
    },
    showOrHideFooter(state, flag) {
        state.showFooter = flag;
    },
    setHomeTabIndex(state, flag) {
        state.homeTabIndex = flag;
    },
    showAsideMenu(state, flag) {
        state.showAsideMenu = flag;
    },
    play(state, flag) {
        state.isPlaying = flag;
    },
    playMusic(state, payload) {
        state.autio = payload;
        state.isPlay = true;
    },
    changeSkinColor(state, color) {
        state.skinColor = color;
    },
    findDOM(state, flag) {
        state.DOM = flag;
    }
}