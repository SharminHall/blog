<template>
  <div class="v-container other-container">
    About Me
  </div>
</template>

<script>
export default {
  asyncData ({ store, route: { params: { id }}}) {
      return store.dispatch('FETCH_ABOUTME', { ids: [id] })
    },
}
</script>
<style lang="scss" scoped>
  .v-container {
    position: relative;
  }
  
</style>

