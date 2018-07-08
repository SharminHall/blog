<template>
  <div class="v-container other-container">
    <ul class="article-list">
      <li v-for="(article, index) in articleList" :key="index" @mouseenter="enterHandler(index)" @click="clickHandler(article.id)">
        <div class="time">{{article.pushTime}}</div>
        <div class="head">{{article.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchArticleList } from '@/api/article.js'
export default {
    name: 'mArticle',
    data () {
      return {
        articleList: []
      }
    },
    asyncData ({ store, route: { params: { id }}}) {
      return store.dispatch('FETCH_ARTICLE', { ids: [id] })
    },
    async mounted () {
      this.getArticleList()
    },
    methods: {
      async getArticleList () {
        let {data, status} = await fetchArticleList()
        if (status == 200) {
          this.articleList = data
        }
      },
      enterHandler (index) {
        this.$store.commit('setBgColorIndex', index)
      },
      clickHandler (id) {
        this.$router.push({name: 'article', params: {id}})
      }
    }
}
</script>
<style lang="scss" scoped>
  .v-container {
    position: relative;
  }
  .article-list {
    max-width: 720px;
    margin: 0 auto;

    > li {
      position: relative;
      padding: 20px 10px;
      transition: all .3s;
      
      &:hover {
        padding: 30px 50px;
        background-color: #fff;
        cursor: pointer;
      }
    }
    .head {
      margin-left: 1rem;
      font-size: 1rem;
    }
    .time {
      font-size: 0.875rem;
      color: #999;
      margin-bottom: 0.75rem;
    }
  }
</style>

