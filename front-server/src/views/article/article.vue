<template>
  <div class="article">
    <preview :data="article"></preview>
  </div>
</template>

<script>
import Preview from '@/components/article/layout.vue'
import { fetchArticle } from '@/api/article.js'
export default {
  components: {
     Preview
  },
  data () {
    return {
      article: {
        title: '',
        tag: '',
        content: '',
        pushTime: '',
        updateTime: '',
        commentNum: 0
      }
    }
  },
  created () {
    this.getArticle()
  },
  asyncData ({ store, route: { params: { id }}}) {
    return store.dispatch('FETCH_ARTICLE', { ids: [id] })
  },
  methods: {
    async getArticle () {
      let { data } = await fetchArticle(this.$route.params.id)
      this.article = data
    }
  }
}
</script>

<style lang="less" scoped>

</style>


