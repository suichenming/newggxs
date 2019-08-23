<template>
  <div>
    <navheader></navheader>
    <div class="mybody">
      <div class="row mynum">
        <div class="col-md-3 col-lg-3 col-xs-6 col-sm-6 num numb">
          <img src="../image/1img.png" class="myimg" />
          <div class="box">
            <div class="written">正在采购</div>
            <div class="writenword">
              <span class="counter">
                <v-countup :start-value="start" :end-value="counter"  :decimals="0"  :options="options"></v-countup></span>
              <span style="font-size: 25px;">
                <b>个项目</b>
              </span>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-lg-3 col-xs-6 col-sm-6 num numb">
          <img src="../image/2img.png" class="myimg" />
          <div class="box">
            <div class="written">采购预算金额</div>
            <div class="writenword">
              <span class="counter1"><v-countup :start-value="start" :end-value="counter1"  :decimals="2"  :options="options"></v-countup></span>
              <span style="font-size: 25px;">
                <b>亿</b>
              </span>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-lg-3 col-xs-6 col-sm-6 num numb">
          <img src="../image/3img.png" class="myimg" />
          <div class="box">
            <div class="written">累计完成</div>
            <div class="writenword">
              <span class="counter2"><v-countup :start-value="start" :end-value="counter2"  :decimals="0"  :options="options"></v-countup></span>
              <span style="font-size: 25px;">
                <b>个项目</b>
              </span>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-lg-3 col-xs-6 col-sm-6 numb">
          <img src="../image/4img.png" class="myimg" />
          <div class="box">
            <div class="written">累计完成金额</div>
            <div class="writenword">
              <span class="counter3">
                <v-countup :start-value="start" :end-value="counter3"  :decimals="2"  :options="options"></v-countup>
              </span>
              <span style="font-size: 25px;">
                <b>亿</b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="middle row">
        <div class="photoalbum col-md-6 col-lg-6 col-xs-12 col-sm-12">
          <div id="carouselExampleGeneric" class="carousel slide">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleGeneric" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleGeneric" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner myconc">
              <div class="item active" id="heightimg">
                <img src="../image/banner1.jpg" alt="First slide" id="heightimgs" />
              </div>
              <div class="item" id="heightimg">
                <img src="../image/banner2.jpg" alt="Second slide" id="heightimgs" />
              </div>
            </div>
            <a
              class="left carousel-control"
              href="#carouselExampleGeneric"
              role="button"
              data-slide="prev"
            >
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="right carousel-control"
              href="#carouselExampleGeneric"
              role="button"
              data-slide="next"
            >
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="cards col-md-6 col-lg-6 col-xs-12 col-sm-12">
          <div class="mytab" style="height:433px">
            <!-- Nav tabs -->
            <ul class="navs nav-tabs" role="tablist" id="mytab1">
              <li
                v-for="(item,index) in mytab1"
                :key="index"
                @click="tab1click(index)"
                :style="{background: index=== num ? '#3694EB' : ''}"
              >
                <a :style="{color :index=== num ? '#fff': '#3694EB'}">{{item.name}}</a>
              </li>
              <li class="more1" @click="viewList()" style="float:right;paddingRight:16px">更多></li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="home">
                <ul class="lists">
                  <li class="aaaa" v-if="flag8">没有查询到相关数据！</li>
                  <li
                    v-for="(item,index) in news"
                    :key="index"
                    class="poi1"
                    style="text-align:left"
                    @click="detail(item)"
                  >{{item.title}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mybtns">
        <input id="searchText" type="text" placeholder="请输入企业/项目..." />
        <button @click="searchXM">搜项目</button>
        <button @click="searchQY">搜企业</button>
      </div>
      <div class="caigou">
        <div id="scrollleft">
          <ul class="navs nav-tabs" role="tablist" id="mytab2">
            <li
              v-for="(item,index) in caigou"
              :key="index"
              @click="caigouclick(index)"
              :style="{background: index=== nums ? '#3694EB' : ''}"
            >
              <a :style="{color :index=== nums ? '#fff': '#3694EB'}">{{item.name}}</a>
            </li>
            <li class="more2" @click="searchAll()" style="padding-left:10px">更多></li>
          </ul>
        </div>

        <!-- Tab panes -->
        <div class="tab-content cont1">
          <div
            role="tabpanel"
            class="tab-pane active"
            id="cai"
            v-if="nums === 0 || nums === 1 || nums === 2 || nums === 3"
          >
            <div class="row bigtitle mytitle1">
              <div class="col-md-6 col-lg-6 col-xs-6 col-sm-6">项目名称</div>
              <div class="col-md-2 col-lg-2 col-xs-2 col-sm-2">预算金额</div>
              <div class="col-md-2 col-lg-2 col-xs-2 col-sm-2">采购方式</div>
              <div class="col-md-2 col-lg-2 col-xs-2 col-sm-2">公告日期</div>
            </div>
            <ul class="list2">
              <li class="aaaa" v-if="flag4">没有查询到相关数据！</li>
              <li
                v-for="(item,index) in caigoulist"
                :key="index"
                class="row poi1"
                @click="details(item)"
              >
                <div class="col-md-6 col-lg-6 col-xs-9 col-sm-9 firsttitle">{{item.title}}</div>
                <div class="col-md-2 col-lg-2 col-xs-2 col-sm-2">
                  <span>{{item.purchase_budget_money}}</span>
                  <span v-if="item.myflag">万</span>
                </div>
                <div class="col-md-2 col-lg-2 col-xs-8 col-sm-8">{{item.bidding_name}}</div>
                <div class="col-md-2 col-lg-2 col-xs-4 col-sm-4">{{item.publicity_start_date}}</div>
              </li>
            </ul>
          </div>
          <div role="tabpanel" v-if="nums === 4">
            <div class="row bigtitle mytitle1">
              <div class="col-md-10 col-lg-10 col-xs-10 col-sm-10">项目名称</div>
              <div class="col-md-2 col-lg-2 col-xs-2 col-sm-2">发布时间</div>
            </div>
            <ul class="list2">
              <li class="aaaa" v-if="flag0">没有查询到相关数据！</li>
              <li
                v-for="(item,index) in simplelist"
                :key="index"
                class="row poi1"
                @click="gzjgDetails(item)"
              >
                <div class="col-md-9 col-lg-9 col-xs-9 col-sm-9 firsttitle">{{item.title}}</div>
                <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">{{item.publish_time}}</div>
              </li>
            </ul>
          </div>
          <div role="tabpanel" v-if="nums === 5">
            <div class="row bigtitle mytitle1">
              <div class="col-md-6 col-lg-6 col-xs-6 col-sm-6">项目名称</div>
              <div class="col-md-2 col-lg-2 col-xs-2 col-sm-2">组织单位</div>
              <div class="col-md-2 col-lg-2 col-xs-2 col-sm-2">公示时间</div>
              <div class="col-md-2 col-lg-2 col-xs-2 col-sm-2">公示类型</div>
            </div>
            <ul class="list2">
              <li class="aaaa" v-if="flag11">没有查询到相关数据！</li>
              <li
                v-for="(item,index) in gonglist4"
                :key="index"
                class="row poi1"
                @click="details(item)"
              >
                <div class="col-md-6 col-lg-6 col-xs-11 col-sm-11 firsttitle">{{item.title}}</div>
                <div class="col-md-2 col-lg-2 col-xs-2 col-sm-2 myname">{{item.mechanism_name}}</div>
                <div class="col-md-2 col-lg-2 col-xs-2 col-sm-2">{{item.publicity_start_date}}</div>
                <div class="col-md-2 col-lg-2 col-xs-2 col-sm-2">{{item.gongao_type}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="gongshi">
        <div id="scrollleft_s">
          <ul class="navs nav-tabs" role="tablist" id="mytab3">
            <li
              v-for="(item,index) in gongshi"
              :key="index"
              @click="jieclick(index)"
              :style="{background: index=== numjie ? '#3694EB' : ''}"
            >
              <a :style="{color :index=== numjie ? '#fff': '#3694EB'}">{{item.name}}</a>
            </li>
            <li class="more2" @click="searchAll()" style="padding-left:10px">更多></li>
          </ul>
        </div>
        <!-- Tab panes -->
        <div class="tab-content cont1">
          <div role="tabpanel" class="tab-pane active" id="gong">
            <div class="row bigtitle mytitle1">
              <div class="col-md-6 col-lg-6 col-xs-6 col-sm-6">项目名称</div>
              <div class="col-md-2 col-lg-2 col-xs-2 col-sm-2">组织单位</div>
              <div class="col-md-2 col-lg-2 col-xs-2 col-sm-2">公示日期</div>
              <div class="col-md-2 col-lg-2 col-xs-2 col-sm-2">公示类型</div>
            </div>
            <ul class="list2">
              <li class="aaaa" v-if="flag">没有查询到相关数据！</li>
              <li
                v-for="(item,index) in gongshilist"
                :key="index"
                class="row poi1"
                @click="details(item)"
              >
                <div class="col-md-6 col-lg-6 col-xs-11 col-sm-11 firsttitle">{{item.title}}</div>
                <div class="col-md-2 col-lg-2 col-xs-4 col-sm-4 myname">{{item.mechanism_name}}</div>
                <div class="col-md-2 col-lg-2 col-xs-8 col-sm-8">{{item.publicity_start_date}}</div>
                <div class="col-md-2 col-lg-2 col-xs-4 col-sm-4">{{item.gongao_type}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <foo-ter></foo-ter>
  </div>
</template>
<script>

import {
  startNotice,
  finishNotice,
  viewNotice,
  zcfgNotice,
  gzjggdNotice,
  cgNotice,
  gcNotice,
  hwNotice,
  fwNotice,
  simpleNotice,
  singleSourceNotice,
  allNotice,
  cjNotice,
  fbNotice,
  bgNotice
} from "../services/home.js";
export default {
  name: "home",
 
  data() {
    return {
      news: [],
      myrule: [],
      flag: false,
      flag4: false,
      flag8: false,
      flag0: false,
      flag11: false,
      caigoulist: [],
      servicelist: [],
      simplelist: [],
      gonglist4: [],
      gongshilist: [],
      counter1: "",
      counter: "",
      counter2: "",
      counter3: "",
      num: 0,
      nums: 0,
      mytab1: [
        { name: "新闻动态" },
        { name: "法律法规" },
        { name: "国资监管规定" }
      ],
      caigou: [
        { name: "采购公告" },
        { name: "工程类" },
        { name: "货物类" },
        { name: "服务类" },
        { name: "招投标服务网公告" },
        { name: "单一来源采购公告" }
      ],
      gongshi: [
        { name: "结果公示" },
        { name: "成交公示" },
        { name: "废标公告" },
        { name: "变更公告" }
      ],
      numjie: 0,
       options: {
          useEasing: true, // 缓动动画 easing
          useGrouping: true, // 1,000,000 vs 1000000
          separator: ',', // 数字分隔符
          decimal: '.', // 小数分隔符
          prefix: '', // 前缀
          suffix: '' // 后缀
        },
        total: 100,
        start: 1,
          end: 100
    };
  },
  mounted() {
    startNotice().then(result => {
      this.counter = result.number;
      this.counter1 = result.money;
    });
    finishNotice().then(result => {
      this.counter2 = result.number;
      var arr = result.money.split(',')
      this.counter3 = arr[0] + arr[1];
    });
    this.tab1click(0);
    this.caigouclick(0);
    this.jieclick(0);
  },
  methods: {
    tab1click(index) {
      this.num = index;
      if (index === 0) {
        viewNotice().then(res => {
          var item = res.data;
          if (item.length > 0) {
            this.news = item;
            this.flag8 = false;
          } else {
            this.flag8 = true;
            this.news = [];
          }
        });
      } else if (index === 1) {
        zcfgNotice().then(item => {
          var data = item.data;
          if (data.length > 0) {
            this.news = data;
            this.flag8 = false;
          } else {
            this.flag8 = true;
            this.news = [];
          }
        });
      } else if (index === 2) {
        gzjggdNotice().then(data => {
          if (data.length > 0) {
            this.news = data;
            this.flag8 = false;
          } else {
            this.flag8 = true;
            this.news = [];
          }
        });
      }
    },
    caigouclick(index) {
      this.nums = index;
      if (index === 0) {
        cgNotice().then(item => {
          if (item.length > 0) {
            this.flag4 = false;
            this.caigoulist = item;
          } else {
            this.flag4 = true;
            this.caigoulist = [];
          }
        });
      } else if (index === 1) {
        gcNotice().then(item => {
          if (item.length > 0) {
            this.flag4 = false;
            this.caigoulist = item;
          } else {
            this.flag4 = true;
            this.caigoulist = [];
          }
        });
      } else if (index === 2) {
        hwNotice().then(item => {
          if (item.length > 0) {
            this.flag4 = false;
            this.caigoulist = item;
          } else {
            this.flag4 = true;
            this.caigoulist = [];
          }
        });
      } else if (index === 3) {
        fwNotice().then(item => {
          if (item.length > 0) {
            this.flag4 = false;
            this.caigoulist = item;
          } else {
            this.flag4 = true;
            this.caigoulist = [];
          }
        });
      } else if (index === 4 && this.simplelist.length == 0) {
        simpleNotice().then(item => {
          if (item.length > 0) {
            this.flag0 = false;
            this.simplelist = item;
          } else {
            this.flag0 = true;
            this.simplelist = [];
          }
        });
      } else if (index === 5 && this.gonglist4.length == 0) {
        singleSourceNotice().then(item => {
          if (item.length > 0) {
            this.flag11 = false;
            this.gonglist4 = item;
          } else {
            this.flag11 = true;
            this.gonglist4 = [];
          }
        });
      }
    },
    jieclick(index) {
      this.numjie = index;
      if (index === 0) {
        allNotice().then(item => {
          if (item.length > 0) {
            this.gongshilist = item;
            this.flag = false;
          } else {
            this.gongshilist = [];
            this.flag = true;
          }
        });
      } else if (index === 1) {
        cjNotice().then(item => {
          if (item.length > 0) {
            this.gongshilist = item;
            this.flag = false;
          } else {
            this.gongshilist = [];
            this.flag = true;
          }
        });
      } else if (index === 2) {
        fbNotice().then(item => {
          if (item.length > 0) {
            this.gongshilist = item;
            this.flag = false;
          } else {
            this.gongshilist = [];
            this.flag = true;
          }
        });
      } else if (index === 3) {
        bgNotice().then(item => {
          if (item.length > 0) {
            this.gongshilist = item;
            this.flag = false;
          } else {
            this.gongshilist = [];
            this.flag = true;
          }
        });
      }
    },
    searchXM() {
      var searchText = $("#searchText").val();
      sessionStorage.setItem("searchText", searchText);
      this.$router.push({ path: "/list" });
    },
    searchQY() {
      var searchText = $("#searchText").val();
      sessionStorage.setItem("searchTextxm", searchText);
      this.$router.push({ path: "/list" });
    },
    viewList() {
      this.$router.push({ path: "/newlist" });
    },
    searchAll() {
      this.$router.push({ path: "/list" });
    },
    detail(item) {
      sessionStorage.setItem("articleID", item.articleID);
      this.$router.push({ path: "/details" });
    },
    details(item) {
      var name = item.gongao_type.replace("示", "告");
      var strUrl = ''
      if (name == "采购公告") {
        strUrl += "cggg";
      }
      if (name.indexOf("变更") != -1) {
        strUrl += "bggg";
      }
      if (name.indexOf("废标") != -1) {
        strUrl += "fbgg";
      }
      if (name.indexOf("成交") != -1) {
        strUrl += "cjgg";
      }
      if (name.indexOf("单一来源") != -1) {
        strUrl += "dyly";
      }
      var objs = {
        gongao_type: strUrl,
        noticeId: item.id
      };
      sessionStorage.setItem("obj", JSON.stringify(objs));
      if (item.gongao_type === "变更公示") {
        this.$router.push({ path: "/detail" });
      } else if (item.gongao_type === "废标公示") {
        this.$router.push({ path: "/detail2" });
      } else {
        this.$router.push({ path: "/detail" });
      }
    },
    gzjgDetails(item) {
      sessionStorage.setItem("pdf_annex", item.pdf_annex);
      this.$router.push({ path: "/gzjgdetails" });
    }
  }
};
</script>

<style src="../../public/static/css/home.css" scoped>
</style>

