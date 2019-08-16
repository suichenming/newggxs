<template>
  <div>
    <div>
      <div class="btnss" style="position:fixed;left:83%;top:0;z-index:100">
        <i class="el-icon-tickets" style="font-size:50px;color:#00FFFF"></i>
      </div>
    </div>
    <div id="menu">
      <div class="f1">
        <ul>
          <li>
            <a href="index">首页</a>
          </li>
          <li class="hasChild">
            <a href="#">采购公告</a>
            <div class="f2">
              <ul>
                <li>
                  <a href="#" onclick="phoneclickme();">工程类公告</a>
                </li>
                <li>
                  <a href="#" onclick="phoneclickme1();">货物类公告</a>
                </li>
                <li>
                  <a href="#" onclick="phoneclickme2();">服务类公告</a>
                </li>
                <li>
                  <a href="#" onclick="phoneclickNotice();">招投标服务网公告</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="hasChild">
            <a href="#">结果公示</a>
            <div class="f2">
              <ul>
                <li>
                  <a href="#" onclick="phoneclickme3();">结果公示</a>
                </li>
                <li>
                  <a href="#" onclick="phoneclickme4();">废标公告</a>
                </li>
                <li>
                  <a href="#" onclick="phoneclickme5();">变更公告</a>
                </li>
                <li>
                  <a href="#" onclick="phoneclickme6();">单一来源采购公告</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#" onclick="phonesearchZCFG()">法律法规</a>
          </li>
          <li>
            <a href="#" onclick="phonesearchgzjggd()">国资监管规定</a>
          </li>
          <li>
            <a href="#" onclick="phonesearchXWDT()">新闻动态</a>
          </li>
          <li>
            <a href="#">业务指南</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="headimg"></div>
    <div class="mynav">
      <ul class="nav nav-pills">
        <li role="presentation" v-for="(item,index) in navlist" :key="index" class="dropdown">
          <a
            class="dropdown-toggle mydown1"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            @click="toplist(item.name)"
          >
            {{item.name}}
            <span class="caret" v-if="item.arr !== ''"></span>
          </a>

          <ul
            v-if="item.id === 0 || item.id === 1"
            class="dropdown-menu mydown"
            aria-labelledby="dLabel"
            style="min-width: 120px; border-radius: 0; top:39px"
          >
            <a class="haha">
              <li
              @click="topchilr(newarr.childrens)"
                class="li1"
                role="presentation"
                v-for="(newarr,index) in item.arr"
                :key="index"
              >{{newarr.childrens}}</li>
            </a>
          </ul>
        </li>
      </ul>
      <div class="mybtn">
        <a href="https://cgpt.sotcbb.com/login" target="_black">
          <button class="btn1">信息发布登录</button>
        </a>
      </div>
    </div>
    
  </div>
</template>
<script>
//   jq侧边栏js css
import '../../public/static/css/leftMenu.css'
import '../../public/static/js/leftMenu.js'
export default {
  name: "home",
  data() {
    return {
      navlist: [
        { name: "首页", arr: "" },
        {
          name: "采购公告",
          arr: [
            { childrens: "工程类公告" },
            { childrens: "货物类公告" },
            { childrens: "服务类公告" },
            { childrens: "招投标服务网公告" }
          ],
          id: 0
        },
        {
          name: "结果公示",
          arr: [
            { childrens: "结果公示" },
            { childrens: "废标公告" },
            { childrens: "变更公告" },
            { childrens: "单一来源采购公告" }
          ],
          id: 1
        },
        { name: "法律法规", arr: "" },
        { name: "国资监管规定", arr: "" },
        { name: "新闻动态", arr: "" },
        { name: "业务指南", arr: "" }
      ]
    };
  },
  mounted() {
    $("#menu")
    .leftMenu({
      triggerBtn: ".btnss"
    })
    .init();
  },
  methods:{
    toplist(name){
      var pathname = this.$route.name
      if(name === '首页') {
        if(pathname === 'home') {
            return
        } else {
          this.$router.push({path: '/home'})
        }
      } else if(name === '采购公告' || name === '结果公示'){
        if(pathname === 'list'){
        } else {
        }
      } else if(name === '法律法规' || name === '国资监管规定' || name === '新闻动态'){
        sessionStorage.setItem('name',name )
        if(pathname === 'newlist'){
          this.$emit('name', name)
        } else {
          this.$store.commit('topnewliststr',name)
          this.$router.push({path: '/newlist'})
        }
      }
    },
    topchilr(name){
      var pathname = this.$route.name
      if(name === '工程类公告' || name === '货物类公告'|| name === '服务类公告'||name === '招投标服务网公告'){
        if(pathname === 'list'){
          this.$emit('name', name)
        } else {
          this.$store.commit('topgonggaoStr',name)
          this.$router.push({path: '/list'})
        }
      }
      if(name === '结果公示'||name === '废标公告'||name === '变更公告'||name === '单一来源采购公告'){
        if(pathname === 'list'){
          this.$emit('names', name)
        } else {
          this.$store.commit('topgongshiStr',name)
          this.$router.push({path: '/list'})
        }
      }
    }
  }
};
$(function($) {
  
});
</script>
<style scoped>
a{
  text-decoration: none;
}
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #0e6fa4;
  border-color: #337ab7;
}
@media screen and (min-width: 770px) {
  .head {
    width: 100%;
    height: 233px;
  }
  .headimg {
    background: url(../image/bannersui.png) no-repeat center -25px;
    height: 233px;
  }
  .mynav ul {
    width: 90%;
    margin: 0 auto;
  }
  .bigtitles {
    font-weight: bold;
    font-size: 16px;
  }
  .mynav {
    background: -webkit-linear-gradient(#227b9b, #3694eb);
    background: -o-linear-gradient(#227b9b, #3694eb);
    background: -moz-linear-gradient(#227b9b, #3694eb);
    background: linear-gradient(#227b9b, #3694eb);
    color: white;
    height: 40px;
  }
  .mynav li a {
    color: white;
  }
  .mydown1:hover {
    background-color: #0e6fa4;
    color: white;
  }
  .dropdown-menu {
    background-color: #2b85bd;
  }
  .mybtn {
    margin-left: 87%;
    margin-top: -33px;
  }
  .mybody {
    width: 88%;
    margin: 0 auto;
  }
  .mybtn button {
    margin-right: 10px;
    background-color: #38aad2;
    border: 1px solid #38aad2;
    border-radius: 5px;
    padding: 2px 10px;
    color: white;
  }
  .btn1:hover {
    background-color: #0e6fa4;
  }
  .mydown li {
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-bottom: 1px solid #33a0ed;
  }

  .mydown li:hover {
    cursor: pointer;
    background-color: #0e6fa4;
  }
  .btnss {
    display: none;
  }
  #menu {
    display: none;
  }
}
@media screen and (min-width: 761px) and (max-width: 769px) {
  .head {
    width: 100%;
    height: 233px;
  }
  .headimg {
    background: url(../image/banner@3x.jpg);
    height: 233px;
    background-repeat: no-repeat;
    /* background-position-x: -300px; */
    /* margin-top: -60px; */
    background-size: cover;
    /* background-position-y: 26px; */
    background-position: center center;
  }
  .mynav ul {
    width: 90%;
    margin: 0 auto;
  }
  .bigtitles {
    font-weight: bold;
    font-size: 16px;
  }
  .mynav {
    background-color: #2b85bd;
    color: white;
    height: 40px;
  }
  .mynav li a {
    color: white;
  }
  .mydown1:hover {
    background-color: #0e6fa4;
    color: white;
  }
  .dropdown-menu {
    background-color: #2b85bd;
  }
  .mybtn {
    margin-left: 87%;
    margin-top: -33px;
  }
  .mybody {
    width: 98%;
    margin: 0 auto;
  }
  .mybtn button {
    margin-right: 10px;
    background-color: #38aad2;
    border: 1px solid #38aad2;
    border-radius: 5px;
    padding: 2px 10px;
    color: white;
  }
  .btn1:hover {
    background-color: #0e6fa4;
  }
  .mydown li {
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-bottom: 1px solid #33a0ed;
  }

  .mydown li:hover {
    cursor: pointer;
    background-color: #0e6fa4;
  }
  .mynav {
    display: none;
  }
}
@media screen and (max-width: 760px) {
  .mynav {
    display: none;
  }
  .head {
    width: 100%;
    /* height:233px */
  }
  .headimg {
    background: url(../image/small.jpg);
    height: 180px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* background-position-x: -2.5rem;
    margin-top: -3rem;
    background-size: cover;
    background-position-y: 2rem;
    width:100% */
  }
  .mynav ul {
    width: 90%;
    margin: 0 auto;
  }
  .bigtitles {
    font-weight: bold;
    font-size: 16px;
  }
  .mynav {
    background-color: #2b85bd;
    color: white;
    height: 40px;
  }
  .mynav li a {
    color: white;
  }
  .mydown1:hover {
    background-color: #0e6fa4;
    color: white;
  }
  .dropdown-menu {
    background-color: #2b85bd;
  }
  .mybtn {
    margin-left: 87%;
    margin-top: -33px;
  }
  .mybody {
    width: 98%;
    margin: 0 auto;
  }
  .mybtn button {
    margin-right: 10px;
    background-color: #38aad2;
    border: 1px solid #38aad2;
    border-radius: 5px;
    padding: 2px 10px;
    color: white;
  }
  .btn1:hover {
    background-color: #0e6fa4;
  }
  .mydown li {
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-bottom: 1px solid #33a0ed;
  }

  .mydown li:hover {
    cursor: pointer;
    background-color: #0e6fa4;
  }
}
</style>

