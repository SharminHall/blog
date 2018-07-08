<template>
<div class="v-container">
  <aside>
    <div class="wraper-aside">
      <img :src="src" alt="">
    </div>
  </aside>
  <main>
    <span class="author">SHARMIN HALL</span>
  </main>
</div>
</template>

<script>
import imgHome from '@/assets/images/home.jpg'

export default {
  name: 'home',
  data(){
    return {
      src: imgHome
    }
  },
  created(){
    this.$store.commit('setIsHome', true)
  },
  methods: {

  },
  asyncData ({ store }) {
    return store.dispatch('FETCH_HOME')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .v-container {
    position: relative;
    height: calc(100% - 9rem);
  }
  main, aside {
    position: relative;
    width: 50%;
    height: 100%;
    padding: 10px;
  }
  main {
    float: left;
    span.author {
      position: absolute;
      top: 45%;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 9px;

      @media screen and (max-width: 768px ) {
        font-size: 1.25rem
      }
    }
  }
  aside {
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .wraper-aside {
      margin: 0 auto;
      background-color: #fff;
      width: 10rem;
      height: 11rem;
      padding: 0.25rem;

      @media screen and (min-width: 768px) {
        width: 21rem;
        height: 22rem;
        padding: 0.825rem;
      }
      @media screen and (min-width: 992px) {
        width: 27rem;
        height: 28rem;
        padding: 1.25rem;
      }
      @media screen and (min-width: 1200px) {
        width: 34rem;
        height: 35rem;
        padding: 2rem;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
