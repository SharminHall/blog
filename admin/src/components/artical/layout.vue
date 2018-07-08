<template>
  <div class="article">
    <el-row>
      <h1 class="title">{{data.title}}</h1>
    </el-row>
    <el-row class="mark-row">
      <span class="mark time"><i class="el-icon-date"></i>Push {{data.pushTime}}</span>
      <span class="mark time"><i class="el-icon-date"></i>Update {{data.updateTime}}</span>
      <span class="mark tag">
        <i class="el-icon-document"></i>
        <span v-for="(tag, index) in tagList" :key="index">{{tag}}</span>
      </span>
      <span class="mark view"><i class="el-icon-view"></i>{{data.views || 0}}</span>
    </el-row>
    <el-row class="content">
      <div v-html="data.content" v-highlight></div>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      default: _ => {
        return {
          title: '',
          tag: '',
          content: '',
          pushTime: '',
          updateTime: '',
          views: 0
        }
      }
    }
  },
  mounted () {
    console.log(this.data)
  },
  computed: {
    tagList () {
      return this.data.tag.split(',')
    }
  }
}
</script>
<style lang="less" scoped>
.title {
  text-align: center;
  font-size: 26px;
  font-weight: 400;
}
.mark-row {
  text-align: center;
  font-size: 12px;
}
.mark {
  height: 16px;
  line-height: 16px;
}
.mark + .mark {
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px solid #ccc;
}
.mark > i {
  margin-right: 10px;
}
.tag > span {
  display: inline-block;
  height: 16px;
}
.tag > span + span {
  margin-left: 10px;
}
</style>
