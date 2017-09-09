<template>
    <transition name="showRouter">
        <div class="s-header" :style="{background: skinColor}">
            <div class="back iconfont font-color-white h1" @click="goBack()">
                &#xe689;
            </div>
            <div class="search-bar">
                <input class="h4 padding-bottom-xs" v-model="keywords" @keyup.enter="toSearch(keywords)" @focus="inputFocus" type="text" placeholder="音乐、视频、歌词、电台">
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'search',
    beforeCreate: function() {
        this.$store.commit('showOrHideHeader', false)
    },
    computed: {
        skinColor() {
            return this.$store.state.skinColor;
        }
    },
    data() {
        return {
            keywords: ''
        }
    },
    methods: {
        goBack: function() {
            this.$router.go(-1);
        },
        inputFocus: function() { },
        toSearch: function() { }
    }
}
</script>

<style lang="scss" scoped>
@import '../../css/function/function.scss';

.showRouter-enter-active {
    transition: all .5s ease;
}
// .showRouter-leave-active {
//     transition: all 0 ease-out;
// }
.showRouter-enter {
    transform: translateX(250px);
    opacity: 0;
}

.s-header {
    height: remSize(90);
    width: 100%;
    display: flex;

    .back {
        flex: 1.5;
        line-height: remSize(90);
        text-align: center;
    }

    .search-bar {
        flex: 8.5;
        line-height: remSize(90);

        input {
            -webkit-appearance: none;
            color: #fff;
            width: remSize(750 * 0.85 - 30);
            margin-right: remSize(30);
            border-bottom: solid 1px rgba(255, 255, 255, 0.6);
        }

        input::-webkit-input-placeholder {
            color: rgba(255, 255, 255, 0.6);
        }

        input:focus {
            border-bottom: solid 1px #fff;
        }
    }
}
</style>


