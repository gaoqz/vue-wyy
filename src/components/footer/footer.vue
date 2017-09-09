<template lang="html">
<transition name="fade">
    <div class="footer">
        <div class="mini-music clear-float padding-top-sm">
            <div class="music-img float-left padding-left-xs" @click="toPlay">
                <img ref="img" v-bind:src="audio.imgUrl || defaultImgUrl" alt="Rolling In The Deep">
            </div>
            <div class="music-name float-left margin-left-sm" @click="toPlay">
                <p class="font-color-global-base">{{audio.name || 'Rolling In The Deep'}}</p>
                <p class="font-color-global-lightest">{{audio.singer || 'Adele'}}</p>
            </div>
            <div class="music-control float-right margin-right-md">
                <span @click="play()" name="play" class="iconfont margin-right-sm ion-play" v-if="!isPlaying">&#xe601;</span>
                <span @click="play()" name="play" class="iconfont margin-right-sm font-color-main ion-play" v-else>&#xe60c;</span>
                <span @click="favor()" name="favor" class="iconfont" v-if="!isFavor">&#xe604;</span>
                <span @click="favor()" name="favor" class="iconfont font-color-main" v-else>&#xe604;</span>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    name: 'footer',
    computed: {
        isPlaying() {
            return this.$store.state.isPlaying;
        },
        skinColor() {
            return this.$store.state.skinColor;
        },
        audio() {
            return this.$store.state.audio;
        },
        DOM() {
            return this.$store.state.DOM;
        }
    },
    data: function() {
        return {
            currentTime: 0,
            totalTime: 130,
            isFavor: false,
            defaultImgUrl: 'http://p3.music.126.net/ZgJLGQLGaXIW-s7lCgeWCQ==/760862046428277.jpg?param=30y30'
        }
    },
    methods: {
        toPlay() {
            this.$router.push('/play');
        },
        play() {
            this.$store.commit('play', !this.isPlaying);
            !this.isPlaying ? this.DOM.dom.pause() : this.DOM.dom.play();
        },
        favor() {
            this.isFavor = !this.isFavor;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../css/function/remSize.scss';
.fade-enter-active {
    transition: all .3s ease-in-out;
}

.fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter,
.fade-leave-active {
    transform: translateY(50px);
    opacity: 0;
}

.footer {
    background: #fff;
    width: 100%;
    height: remSize(95);
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>


