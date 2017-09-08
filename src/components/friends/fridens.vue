<template>
<div>
    {{msg}}
</div>
</template>

<script>
export default {
  name: 'friends',
  beforeCreate: function() {
        this.$store.commit('showOrHideHeader', true);
        this.$store.commit('showOrHideFooter', true);
    },
  data() {
      return {
          msg: 'friends component!'
      }
  }
}
</script>

<style lang="scss" scoped>

</style>


