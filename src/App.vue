<template>
 <div id="app">
    <transition name="show">
      <div class="index">

        <!-- 头部 -->
        <VHeader></VHeader>

        <!-- router控制的Tab页内容 -->
        <router-view></router-view>

      </div>
    </transition>
  </div>
</template>

<script>
import VHeader from './components/header/header.vue';

export default {
  name: 'app',
  components: {
      VHeader
  }
}
</script>

<style lang="scss">
    @charset "utf-8";
    @import "./css/app.scss";

    #app, .index {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
</style>
