<template>
  <div id="app" :style="style">
    <m-head />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <m-footer />
  </div>
</template>

<script>
import avatar from '@/components/avatar/avatar.vue'
import mFooter from '@/components/footer/footer.vue'
import mHead from '@/components/head/head.vue'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
      avatar,
      mFooter,
      mHead
  },
  computed: {
    style () {
      let bgColor = this.$store.getters.bgColor
      return {
        background: `linear-gradient(to right,  ${bgColor} 0%, ${bgColor} 50%, ${bgColor} 50%, #fff 100%)`
      }
    }
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Meiryo UI', 'Montserrat', 'Helvetica Neue', 'Microsoft YaHei', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
}
</style>
