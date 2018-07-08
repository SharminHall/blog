<template>
  <div class="bd">
    <div class="edit-bd" v-show="isEdit">
      <el-row>
        <el-input v-model="data.title" placeholder="请输入标题"></el-input>
      </el-row>
      <el-row>
        <el-input v-model="data.tag" placeholder="标签"></el-input>
      </el-row>
      <el-row>
        <vue-editor v-model="data.content"></vue-editor>
      </el-row>
      <el-row class="btn-row">
        <el-button type="small" @click="handlePreview">预览</el-button>
        <el-button type="small" @click="handleSubmit">发布</el-button>
      </el-row>
    </div>
    <div class="preview-bd" v-if="isPreview">
      <el-row><i class="el-icon-back back" @click="handleBack"></i></el-row>
      <preview :data="data"></preview>
    </div>
  </div>
</template>
<script>
import VueEditor from 'R/editor/editor.vue'
import Preview from 'R/artical/layout.vue'
import utils from '@/util/utils.js'
import { addArticle } from '@/api/article.js'

export default {
  components: {
    VueEditor,
    Preview
  },
  data () {
    return {
      isEdit: true,
      isPreview: false,
      data: {
        title: '',
        content: '',
        tag: '',
        updateTime: '',
        pushTime: ''
      }
    }
  },
  methods: {
    handlePreview () {
      let longtime = (new Date()).getTime()
      this.data.pushTime = this.data.updateTime = utils.formateDate(longtime)
      this.isEdit = false
      this.isPreview = true
    },
    handleBack () {
      this.isEdit = true
      this.isPreview = false
    },
    async handleSubmit () {
      let longtime = (new Date()).getTime()
      this.data.pushTime = this.data.updateTime = utils.formateDate(longtime)
      await addArticle(this.data)
    }
  }
}
</script>

<style scoped >
  .bd {
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    overflow: auto;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .btn-row {
    text-align: right
  }
  .back {
    color: #c3c3c3;
    font-size: 20px;
    cursor: pointer;
  }
  .preview-bd {
    height: 100%;
  }
</style>
