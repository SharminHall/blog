<template>
<div class="api-container">
    <h3 style="height: 35px;border-bottom: 1px solid #ccc;">{{apiData.name}}</h3>
    <el-row>
        <p>简要描述：</p>
        <ul>
            <li>{{apiData.desc}}</li>
        </ul>
    </el-row>
    <el-row>
        <p>请求URL：</p>
        <ul>
            <li class="reqUrl">{{apiData.url}}</li>
        </ul>
    </el-row>
    <el-row>
        <p>请求方式：</p>
        <ul>
            <li>{{apiData.method}}</li>
        </ul>
    </el-row>
    <el-row>
        <p>请求参数：</p>
        <el-table border :data="apiData.reqParams">
            <el-table-column prop="name" label="参数名" align="center"></el-table-column>
            <el-table-column prop="require" label="必选" align="center">
                <template slot-scope="scope">{{scope.row.require ? '是' : '否'}}</template>
            </el-table-column>
            <el-table-column prop="type" label="类型" align="center"></el-table-column>
            <el-table-column prop="explain" label="说明" align="center"></el-table-column>
        </el-table>
    </el-row>
    <el-row>
        <p>返回数据：</p>
        <pre v-html="resParamsCode"></pre>
        <!-- <el-table border :data="apiData.resParams">
            <el-table-column prop="name" label="参数名" align="center"></el-table-column>
            <el-table-column prop="type" label="类型" align="center"></el-table-column>
            <el-table-column prop="explain" label="说明" align="center"></el-table-column>
        </el-table> -->
    </el-row>
</div>
</template>

<script>
import mock from '@/static/mock.js'
import { fetchUserInfo } from '@/api/user.js'
import { syntaxHighlight } from '@/util/syntaxHighlight.js'

export default {
  name: 'HelloWorld',
  props: {
    id: {}
  },
  created () {
    this.apiData = Object.assign({}, this.apiData, mock[ this.apiKey ])
  },
  data () {
    return {
      apiData: {
        name: '用户登录',
        desc: '用户登录接口',
        url: '/user/login',
        method: 'POST',
        reqParams: [
          {name: 'username', require: true, type: 'string', explain: '用户名'}
        ]
      }
    }
  },
  methods: {
    async getUser () {
      let res = await fetchUserInfo()
      console.log(res)
    }
  },
  computed: {
    apiKey: function () {
      return this.id
    },
    resParamsCode: function () {
      return syntaxHighlight(this.apiData.resParams)
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.apiData = Object.assign({}, mock[ to.params.id ])
    // this.getUser()
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .api-container {
        width: 800px;
        height: 100%;
        padding: 20px;
        margin: 0 auto;
    }
    .reqUrl {
        padding: 5px 10px;
        color: red;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f6f6f6;
    }
</style>
