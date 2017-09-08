<template>
<div>
    <h2>{{msg}}</h2>
</div>
</template>

<script>
export default {
    name: 'my',
    beforeCreate: function() {
        this.$store.commit('showOrHideHeader', true)
        this.$store.commit('showOrHideFooter', true)
    },
    data() {
        return {
            msg: 'my component!'
        }
    }
}
</script>

<style lang="scss" scoped>
@charset 'utf-8';
</style>
