<template lang="html">
    <transition name="fadeInDown">
        <div class="padding-md">
            <h1>{{msg}}</h1>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'play',
    beforeCreate: function() {
        this.$store.commit('showOrHideHeader', false)
        this.$store.commit('showOrHideFooter', false)
    },
    data: function() {
        return {
            msg: 'Play component!'
        }
    }
}
</script>

<style lang="scss" scoped>
.fadeInDown-enter-active {
    transition: all .4s ease;
}
.fadeInDown-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fadeInDown-enter, .fadeInDown-leave-active {
    transform: translateY(100%);
    opacity: 0;
}

</style>


