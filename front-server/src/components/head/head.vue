<template>
  <div class="head-container ink-free">
    <div class="wraper clearfix">
      <span class="toHome" v-show="!$store.getters.isHome" title="首页"><router-link to='/'>SAL</router-link></span>
      <span class="list-tag"><span @click="handleShowNav">menu</span></span>
      <ul :class="`nav-list ${showNav} clearfix`">
        <li class="nav" title="文章" @click="handleShowNav"><router-link to='/artlist'>Article</router-link></li>
        <li class="nav" title="关于我" @click="handleShowNav"><router-link to='/aboutme'>About Me</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mHead',
  data(){
    return {
      showNav: ''
    }
  },
  methods: {
    handleShowNav(){
      if (document.body.clientWidth <= 780)
        this.showNav = this.showNav ? '' : 'show-nav'
    }
  },

}
</script>
<style lang="scss" scoped>
  $height: 3.75rem;
  .head-container {
    display: block;
    z-index: 1;
    width: 100%;
    padding-top: 1.25rem
  }
  .wraper {
    position: relative;
    max-width: 87.5rem;
    margin: 0 auto;
    padding: 0 3.75rem;
  }
  .toHome {
    height: $height;
    line-height: $height;
    font-weight: 700;
    font-size: 1.85rem;
    cursor: pointer;
  }
  ul {
    float: right;

    > li {
      float: left;
      height: $height;
      line-height: $height;
      transition: all 0.5s;
      cursor: pointer;
    }
    > li + li {
      margin-left: 2.25rem;
    }
  }
  .list-tag {
    display: none;
    float: right;
    height: $height;
    line-height: $height;
    cursor: pointer;
  }
  @media screen and (max-width: 780px) {
    ul.nav-list {
      position: absolute;
      right: -5rem;
      top: $height;
      z-index: 999;

      transition: all .5s;
      &.show-nav {
        right: 3.75rem;
      }
    }
    .nav {
      float: none;
      margin: 0;
      height: 1.25rem;
      line-height: 1.25rem;
    }
    .list-tag {
      display: block;
    }
  }
</style>
