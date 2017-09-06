<template lang="html">
  <div :style="{backgroundColor: skinColor}" class="header">
    <div class="tab">
      <div class="iconfont item text-left padding-left-md font-color-white" @click="showAsideMenu(true)">
          &#xe60a;
      </div>
      <div :class="{link: homeTabIndex === 1}" class="iconfont item text-right" @click="toMy()">
          &#xe610;
      </div>
      <div :class="{link: homeTabIndex === 2}" class="iconfont item text-center" @click="toFind()">
          &#xe602;
      </div>
      <div :class="{link: homeTabIndex === 3}" class="iconfont item text-left" @click="toFriends()">
        &#xe608;
      </div>
      <div class="iconfont item text-right padding-right-md font-color-white" @click="toSearch()">
          &#xe600;
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'header',
  data() {
    return {
      index: ''
    };
  },
  computed: {
    homeTabIndex() {
      return this.$store.state.homeTabIndex || 1;
    },
    skinColor() {
      return this.$store.state.skinColor;
    }
  },
  methods: {
    toMy() {
        this.$store.commit('setHomeTabIndex', 1);
        this.$router.push('/my');
    },
    toFind() {
        this.$store.commit('setHomeTabIndex', 2);
        this.$router.push('/find');
    },
    toFriends() {
        this.$store.commit('setHomeTabIndex', 3);
        this.$router.push('/friends');
    },
    toSearch() {
        this.$router.push('/search');
    },
    showAsideMenu(flag) {
      this.$store.commit('showAsideMenu', flag);
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    background-color: #B72712;
    color: white;
    flex: 1;
    width: 100%;

    .tab {
      display: flex;
      border-bottom: 1px solid #9E9E9E;
      .item {
        display: inline-block;
        flex: 1;
        padding: 15px;
        color: #BDBDBD;
      }

      .link {
        font-weight: bold;
        color: #fff;
       }

    }
  }
</style>
