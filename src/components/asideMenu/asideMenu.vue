<template>
    <transition name="fadeIn">
        <div class="aside-menu">
            <div class="aside">
                <div :style="{backgroundColor: skinColor}" class="info">
                    <img src="https://microzz.com/img/avatar.jpg">
                    <div class="clear-float">
                        <p class="float-left h2 font-color-white">妖孽的陈二狗
                            <span class="h6 user-lv padding-width-xs margin-left-xs">lv.5</span>
                        </p>
                        <div class="float-right h5 font-color-white margin-right-md user-sign padding-width-sm padding-height-xxs">
                            <span class="iconfont h3">&#xe618;</span>
                            签到
                        </div>
                    </div>
                </div>
                <div class="menu">
                    <ul class="group-1 background-color-white padding-width-md">
                        <li>
                            <span class="iconfont h2 font-color-global-lighter">&#xe60b;</span>
                            <span class="h5">我的消息</span>
                        </li>
                        <li>
                            <span class="iconfont h2 font-color-global-lighter">&#xe60d;</span>
                            <span class="h5">会员中心</span>
                        </li>
                        <li>
                            <span class="iconfont h2 font-color-global-lighter">&#xe61d;</span>
                            <span class="h5">商城</span>
                        </li>
                        <li>
                            <span class="iconfont h2 font-color-global-lighter">&#xe607;</span>
                            <span class="h5">在线听歌流量</span>
                        </li>
                    </ul>
                    <ul class="group-2 background-color-white margin-top-sm padding-width-md">
                        <li>
                            <span class="iconfont h2 font-color-global-lighter">&#xe60b;</span>
                            <span class="h5">我的好友</span>
                        </li>
                        <li>
                            <span class="iconfont h3 font-color-global-lighter">&#xe643;</span>
                            <span class="h5">附近的人</span>
                        </li>
                    </ul>
                    <ul class="group-3 background-color-white margin-top-sm padding-width-md">
                        <li>
                            <span class="iconfont h2 font-color-global-lighter">&#xe605;</span>
                            <span class="h5">个性换肤</span>
                        </li>
                        <li>
                            <span class="iconfont h2 font-color-global-lighter">&#xe6b2;</span>
                            <span class="h5">听歌识曲</span>
                        </li>
                        <li>
                            <span class="iconfont h2 font-color-global-lighter">&#xe611;</span>
                            <span class="h5">定时停止播放</span>
                        </li>
                        <li>
                            <span class="iconfont h2 font-color-global-lighter">&#xe66b;</span>
                            <span class="h5">扫一扫</span>
                        </li>
                        <li>
                            <span class="iconfont h2 font-color-global-lighter">&#xe68f;</span>
                            <span class="h5">音乐闹钟</span>
                        </li>
                        <li>
                            <span class="iconfont h2 font-color-global-lighter">&#xe6a5;</span>
                            <span class="h5">驾驶模式</span>
                        </li>
                        <li>
                            <span class="iconfont h2 font-color-global-lighter">&#xe6a0;</span>
                            <span class="h5">音乐云盘</span>
                        </li>
                    </ul>
                </div>
                <div class="settings background-color-white">
                    <div class="s-dark">
                        <span class="iconfont h2 padding-left-md">&#xe6fd;</span>
                        <span class="font-color-global-base h4">夜间模式</span>
                    </div>
                    <div class="s-setting">
                        <span class="iconfont h2 padding-left-md">&#xe626;</span>
                        <span class="font-color-global-base h4">设置</span>
                    </div>
                    <div class="s-logout clear-float">
                        <span class="font-color-global-base h4 float-right margin-right-md">退出</span>
                        <span class="iconfont h2 float-right margin-right-sm">&#xe650;</span>
                    </div>
                </div>
            </div>
            <div @click.stop.prevent="showAsideMenu" class="mask"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'asideMenu',
    computed:{
        skinColor() {
            return this.$store.state.skinColor;
        }
    },
    methods: {
        showAsideMenu() {
            this.$store.commit('showAsideMenu', false);
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../../css/function/function.scss';
.fadeIn-enter-active {
    transition: all .4s ease;
}
.fadeIn-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fadeIn-enter, .fadeIn-leave-active {
    transform: translateX(-250px);
    opacity: 0;
}

.aside-menu {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    z-index: 1;
    .aside {
      flex: 8;
      background-color: #f3f3f3;
    }
    .mask {
      flex: 2;
      background-color: rgba(0, 0, 0, 0.4) !important;
    }
    .info {
      padding-top: remSize(80);
      padding-bottom: remSize(30);
      padding-left: remSize(20);
      background-color: #B72712;
      box-shadow: 2px 0 10px gray;
      flex: 1;
      img {
        width: remSize(120);
        height: remSize(120);
        border-radius: 50%;
      }

      .padding-height-xxs {
          padding-top: remSize(2);
          padding-bottom: remSize(2);
      }

      .user-lv{
          border: 1px solid #fff;
          border-radius: remSize(16);
      }
      .user-sign{
          border: 1px solid #fff;
          border-radius: remSize(20);
      }
    }

    .menu {
        overflow-y: scroll;
        li {
            line-height: remSize(60);
        }
    }

    .settings {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 80%;
        height: remSize(80);
        line-height: remSize(80);
        border-top: solid 1px #E8E8E8;
        display: flex;

        .s-dark{
            flex: 4;
            line-height: remSize(80);
        }
        .s-setting{
            flex: 3;
            line-height: remSize(80);
        }
        .s-logout{
            flex:3;
            line-height: remSize(80);
        }
    }
}
</style>


