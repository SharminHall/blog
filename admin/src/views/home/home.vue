<template>
<div class="bd">
    <el-row style="height: 100%">
        <el-col class="menu-list">
            <el-menu
                :router="true"
                style="border: none;"
                background-color="#303133"
                text-color="#fff"
                active-text-color="#ffd04b"
            >
                <el-menu-item index="/push" name="push"><i class="el-icon-edit"></i><span>push</span></el-menu-item>
                <el-menu-item index="/explain" name="explain"><i class="el-icon-info"></i><span>explain</span></el-menu-item>
                <!-- <el-submenu index="1">
                    <template slot="title"><i class="el-icon-edit"></i><span>接口</span></template>
                    <el-submenu v-for="( menu, index ) in apidocList" :key="menu.ename" :index="'1-'+index" >
                        <template slot="title"><span>{{menu.cname}}</span></template>
                        <el-menu-item v-for="(item, index) in menu.children" :key="index" :index="'/api/page:' + item.name" :name="item.name">{{item.cname}}</el-menu-item>
                    </el-submenu>
                </el-submenu> -->
            </el-menu>
        </el-col>
        <el-col class="main">
            <router-view></router-view>
        </el-col>
    </el-row>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  computed: mapState({
    apidocList: state => state.apidoc.apidocList
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bd {
      height: 100%;
  }
  .menu-list {
    height: 100%;
    width: 15%;
    background-color: #303133;
  }
  .main {
    width: 85%;
    height: 100%;
  }
  @media screen and (max-width: 780px) {
    .menu-list {
      position: absolute;
      width: 250px;
      left: -250px;
      top: 0;
      z-index: 998;
    }
    .menu-list.show-list {
      left: 0;
    }
    .main {
      width: 100%;
    }

  }
</style>
