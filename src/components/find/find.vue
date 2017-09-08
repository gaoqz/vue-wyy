<template>
<div>
    {{msg}}
</div>
</template>

<script>
export default {
    name: 'find',
    beforeCreate: function() {
        this.$store.commit('showOrHideHeader', true);
        this.$store.commit('showOrHideFooter', true);
    },
    data() {
        return {
            msg: 'find component!'
        }
    },
    methods: {}
}
</script>

<style lang="scss" scoped>

</style>


