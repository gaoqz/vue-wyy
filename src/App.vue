<template>
 <div id="app">
    <transition name="show">
      <div class="index">

        <AsideMenu v-show="showAsideMenu"></AsideMenu>

        <VHeader v-if="showHeader"></VHeader>

        <router-view></router-view>

        <VFooter v-if="showFooter"></VFooter>

      </div>
    </transition>

    <audio :src="audio.url || defaultSrc" :autoplay="isPlaying" ref="audio"></audio>
  </div>
</template>

<script>
import VHeader from './components/header/header'
import VFooter from './components/footer/footer'
import AsideMenu from './components/asideMenu/asideMenu'

export default {
  name: 'app',
  components: {
      VHeader,
      VFooter,
      AsideMenu
  },
  mounted() {
    this.$store.commit('findDOM', {name: 'audio', dom: this.$refs.audio});
  },
  computed: {
      showHeader() {
          return this.$store.state.showHeader;
      },
      showFooter() {
          return this.$store.state.showFooter;
      },
      audio() {
          return this.$store.state.audio;
      },
      isPlaying() {
          return this.$store.state.isPlaying;
      },
      showAsideMenu() {
          return this.$store.state.showAsideMenu;
      }
  },
  data: function () {
      return {
          defaultSrc: 'http://m10.music.126.net/20170908125834/5bd0944c76e0c07ad1b6a820f25e02b1/ymusic/ee51/1103/55c1/aae46e7f2f44968eb288148224cfff0f.mp3'
      }
  }
}
</script>

<style lang="scss">
    @charset "utf-8";
    @import "./css/app.scss";

    .show-enter-active {
        transition: all .4s ease;
    }
    .show-leave-active {
        transition: all 0 ease-out;
    }
    .show-enter, .show-leave-active {
        transform: translateX(-350px);
        opacity: 0;
    }

    #app, .index {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
</style>
