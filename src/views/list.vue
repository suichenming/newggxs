<template>
  <div class="list">
    <navheader @name="chiname" @names="chinames"></navheader>
    <div class="smallcontainer">
      <div class="mybtns">
        <input
          id="searchText"
          name="names"
          type="text"
          v-model="searchText"
          placeholder="请输入企业/项目..."
          @keyup.enter="searchProject()"
        />
        <button @click="searchProject" id="searchProject">搜项目</button>
        <button @click="searchCompany">搜企业</button>
      </div>
      <div class="phonemiddle">
        <div class="model_s" @click="modelishow" v-if="ishow"></div>
        <div class="phonelist">
          <span class="firsttitle">项目公告</span>
          <button @click="btn" class="select">筛选</button>
          <div class="btn_s">
            <div class="row" style="font-weight:600;margin-left: 6%;">公告类型</div>
            <div class="row row_s">
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">全部</div>
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">采购公告</div>
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">变更公告</div>
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">废标公告</div>
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">结果公示</div>
            </div>
            <div class="row" style="font-weight:600;margin-left: 6%;">项目类型</div>
            <div class="row row_s1">
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">全部</div>
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">工程</div>
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">货物</div>
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">服务</div>
            </div>
            <div class="row" style="font-weight:600;margin-left: 6%;">项目状态</div>
            <div class="row row_s2">
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">全部</div>
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">进行中</div>
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">已结束</div>
            </div>
            <div class="row" style="font-weight:600;margin-left: 6%;">预算金额</div>
            <div class="row row_s3">
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">不限</div>
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">5万以内</div>
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">5万-10万</div>
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">10万-20万</div>
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">20万-50万</div>
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">50万-100万</div>
              <div class="col-md-3 col-lg-3 col-xs-3 col-sm-3">100万以上</div>
            </div>
            <div class="row_s4" style="margin-top:20px">
              <div @click="removes" class="col-md-6 col-lg-6 col-xs-6 col-sm-6">清空</div>
              <div
                @click="overs"
                style="background:rgba(59,159,241,1);color:#fff"
                class="col-md-6 col-lg-6 col-xs-6 col-sm-6"
              >完成</div>
            </div>
          </div>
        </div>
        <div class="toggle">
          <div>公告类型</div>
          <div class="phonefirst">
            <span>全部</span>
            <span>采购公告</span>
            <span>变更公告</span>
            <span>废标公告</span>
            <span>成交公告</span>
            <span>招投标服务网公告</span>
            <span>单一来源采购公告</span>
          </div>
          <div>项目类型</div>
          <div class="phonesecond">
            <span>全部</span>
            <span>工程</span>
            <span>货物</span>
            <span>服务</span>
          </div>
          <div>项目状态</div>
          <div class="phonethird">
            <span>全部</span>
            <span>进行中</span>
            <span>已结束</span>
          </div>
          <div>预算金额</div>
          <div class="phonefour">
            <span>不限</span>
            <span>5万以内</span>
            <span>5万-10万</span>
            <span>10万-20万</span>
            <span>20万-50万</span>
            <span>50万-100万</span>
            <span>100万以上</span>
          </div>
          <div>
            <button class="footbtn clearbtn">清空</button>
            <button class="footbtn finishbtn">完成</button>
          </div>
        </div>
        <div class="selected">
          <div>已选择：</div>
          <div>
            <span></span>
          </div>
          <div>
            <button>清空所有选项</button>
          </div>
        </div>
        <div v-for="(item,index) in phonelist " :key="index" class="phonetab" @click="detali(item)">
          <div class="phonetitle">{{item.title}}</div>
          <div class="phonecont">
            <span class="phonetype">{{item.gongao_type}}</span>
            <!-- <span class="phonemoney">{{item.title}}</span> -->
            <span class="phonestage">{{item.purchase_budget_money}}</span>
            <span class="phonestage">{{item.state}}</span>
            <!-- <span class="phonedata">{{item.publicity_end_date}}</span> -->
          </div>
          <p class="phonedata">{{item.publicity_end_date}}</p>
        </div>
      </div>
      <i
        class="el-icon-loading"
        style="text-align:center;display:block;font-size:40px"
        v-if="idloaing"
      ></i>
      <div class="middle">
        <div class="mytable">
          <ul class="first">
            <li>公告类型 |</li>
            <li v-for="(item,index) in first" :key="index" @click="firsts(item.name,index)" :style="{color: index === firstunm? '#028bcf' : '#333'}">{{item.name}}</li>
          </ul>
          <ul class="second">
            <li>项目类型 |</li>
            <li v-for="(item,index) in second" :key="index" @click="seconds(item.name,index)" :style="{color: index === secondunm? '#028bcf' : '#333'}">{{item.name}}</li>
          </ul>
          <ul class="third">
            <li>项目状态 |</li>
             <li v-for="(item,index) in third" :key="index" @click="thirds(item.name,index)" :style="{color: index === thirdunm? '#028bcf' : '#333'}">{{item.name}}</li>
           
          </ul>
          <ul class="four">
            <li>预算金额 |</li>
            <li v-for="(item,index) in four" :key="index" @click="fours(item.name,index)" :style="{color: index === fourunm? '#028bcf' : '#333'}">{{item.name}}</li>
          </ul>
        </div>
        <div id="lists" style="text-align:center;font-size:20px"></div>
        <div class="lists"  >
          <table class="table tab1" v-loading="loading">
            <tr class="tabs">
              <td class="td1">公告类型</td>
              <td class="td2 spec">项目名称</td>
              <td id="ysje" class="money td3" v-if="name !== '招投标服务网公告'">预算金额(万元)</td>
              <td id="ggzt" class="td4" v-if="name !== '招投标服务网公告'">公告状态</td>
              <td class="cont td5">公告日期</td>
            </tr>
            <tr
              v-for="(item,index) in list"
              :key="index"
              @click="detailClick(item)"
              :class="(index%2==0)?blue:lightblue"
              class="only"
            >
              <td>{{item.gongao_type}}</td>
              <td>
                <div class="spec">{{item.title}}</div>
              </td>
              <td v-if="name !== '招投标服务网公告'">{{item.purchase_budget_money}}</td>
              <td v-if="name !== '招投标服务网公告'">{{item.state}}</td>
              <td>{{item.publicity_start_date}}</td>
            </tr>
          </table>
        </div>
        <div class="mynavs">
          <div id="paging" class="pagination"></div>
        </div>
        <div class="text-center">
           <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="1"
            layout="prev, pager, next"
            :total="total">
          </el-pagination>
        </div>
      </div>
      
    </div>
     <foo-ter></foo-ter>
  </div>
</template>

<script>
import { getSearchResultList } from "../services/list";
export default {
  data() {
    return {
      name: '',
      ishow: false,
      phonelist: [],
      idloaing: false,
      list: [],
      first: [
        {name: '全部'},{name: '采购公告'},{name: '变更公告'},{name: '废标公告'},{name: '结果公示'},{name: '单一来源采购公告'},{name: '招投标服务网公告'}
      ],
      second: [
        {name: '全部'},{name: '工程'},{name: '货物'},{name: '服务'},
      ],
      third: [
        {name: '全部'},{name: '进行中'},{name: '已结束'},
      ],
      four: [
        {name: '不限'},{name: '5万以内'},{name: '5万-10万'},{name: '10万-20万'},{name: '20万-50万'},{name: '50万-100万'},{name: '100万以上'},
      ],
      firstunm: 0,
      secondunm: 0,
      thirdunm: 0,
      fourunm: 0,
      blue:'blue',
      lightblue:'lightblue',
      obj:{
        project_type: this.$store.state.gongshiStr,
        pageNo: 0,
        cate_id: "",
        dateState: "",
        moneyStr: "",
        gonggaoStr: this.$store.state.gonggaoStr,
        gongshiStr: this.$store.state.gongshiStr,
        company_name: sessionStorage.getItem('searchTextxm'),
        project_name: sessionStorage.getItem('searchText')
      },
      loading: true,
      currentPage1: 1,
      total:null,
      searchText: (sessionStorage.getItem('searchText') == null ) ? sessionStorage.getItem('searchTextxm') : sessionStorage.getItem('searchText')
    };
  },
  mounted() {
    sessionStorage.clear()
    var storename = this.$store.state.gonggaoStr
    if(storename === ''){
      storename = this.$store.state.gongshiStr
    }
    if(storename === '招投标服务网公告'){
      this.name = '招投标服务网公告'
      this.firstunm = 6
    } else if(storename === '工程类公告'){
      this.firstunm = 1
      this.secondunm = 1
    } else if(storename === '货物类公告'){
      this.firstunm = 1
      this.secondunm = 2
    } else if(storename === '服务类公告'){
      this.firstunm = 1
      this.secondunm = 3
    } else if(storename === '结果公示'){
      this.firstunm = 4
    }else if(storename === '废标公告'){
      this.firstunm = 3
    }else if(storename === '变更公告'){
      this.firstunm = 2
    }else if(storename === '单一来源采购公告'){
      this.firstunm = 5
    }
    getSearchResultList(this.obj).then(item => {
        this.total = item.data[0].pagesNo
        this.list = item.data
        this.loading = false
      }).catch(error => {this.loading = false});
  },
  watch: {
    list(newarr,old){
      if(newarr.length == 0) {
        $(".lists").hide();
        $("#lists").html("没有查询到相关数据!");
      } else {
        $(".lists").show();
         $("#lists").html("");
      }
    }
  },
  methods: {
    handleCurrentChange(val){
      this.loading = true
      if(val === 1) {
        this.obj.pageNo = 0
      } else {
        this.obj.pageNo = (val-1)*10
      }
      getSearchResultList(this.obj).then(item => {
        var datas = item.data
        this.list = datas
        this.loading = false
      }).catch(error => {this.loading = false});
    },
    chiname(name) {  //  采购公告
      if(name === '招投标服务网公告'){
        this.firstunm = 6
      } else if(name === '工程类公告'){
        this.firstunm = 1
        this.secondunm = 1
      } else if(name === '货物类公告'){
        this.firstunm = 1
        this.secondunm = 2
      } else if(name === '服务类公告'){
        this.firstunm = 1
        this.secondunm = 3
      }
      this.name = name
      this.loading = true
      this.obj.project_type = ''
      this.obj.gonggaoStr = name
      getSearchResultList(this.obj).then(item => {
        this.total = item.data[0].pagesNo
        this.list = item.data
        this.loading = false
      }).catch(error => {this.loading = false})
    },
    chinames(name){  //  结果公示
      if(name === '结果公示'){
        this.firstunm = 4
      }else if(name === '废标公告'){
        this.firstunm = 3
      }else if(name === '变更公告'){
        this.firstunm = 2
      }else if(name === '单一来源采购公告'){
        this.firstunm = 5
      }
      this.name = name
      this.obj.project_type = name
      this.obj.gonggaoStr = name
      this.loading = true
      getSearchResultList(this.obj).then(item => {
        this.total = item.data[0].pagesNo
        this.list = item.data
        this.loading = false
      }).catch(error => {this.loading = false})
    },
    searchProject() {
      this.loading = true
      var name =  $("#searchText").val();
      this.obj.project_name = name
      getSearchResultList(this.obj).then(item => {
        this.total = item.data[0].pagesNo
        var datas = item.data
        this.list = datas
        this.loading = false
      }).catch(error => {this.loading = false})
    },
    searchCompany(){
      this.loading = true
      var name =  $("#searchText").val();
      this.obj.company_name = name
      getSearchResultList(this.obj).then(item => {
        this.total = item.data[0].pagesNo
        var datas = item.data
        this.list = datas
        this.loading = false
      }).catch(error => {this.loading = false})
    },
    firsts(name,index){
      this.name = name
      this.loading = true
      this.firstunm = index
      this.obj.project_type = name
      getSearchResultList(this.obj).then(item => {
        this.total = item.data[0].pagesNo
        this.list = item.data
        this.loading = false
      }).catch(error => {this.loading = false})
    },
    seconds(name,index){
      this.secondunm = index
      this.loading = true
      this.obj.cate_id = name
      getSearchResultList(this.obj).then(item => {
        this.total = item.data[0].pagesNo
        this.list = item.data
        this.loading = false
      }).catch(error => {this.loading = false})
    },
    thirds(name,index){
      this.loading = true
      this.thirdunm = index
      this.obj.dateState = name
      getSearchResultList(this.obj).then(item => {
        this.total = item.data[0].pagesNo
        this.list = item.data
        this.loading = false
      }).catch(error => {this.loading = false})
    },
    fours(name,index){
      this.fourunm = index
      this.loading = true
      this.obj.moneyStr = name
      getSearchResultList(this.obj).then(item => {
        this.total = item.data[0].pagesNo
        this.list = item.data
        this.loading = false
      }).catch(error => {this.loading = false})
    },
    modelishow() {},
    btn() {},
    removes() {},
    overs() {},
    detailClick() {}
  }
};

</script>
<style scoped>
/**头部**/

@media screen and (min-width: 1024px) {
 .table > tr > td{
   padding: 8px;
   border-top: 1px solid #ddd;
 }
  .mybtns {
    /* margin-bottom: 40px; */
    width: 1000px;
    /* margin: 0 auto; */
    /* margin-top: 64px;
    margin-left: 10px */
    margin: 59px auto 20px;
  }
  .mybtns input {
    width: 650px;
    height: 40px;
    margin-right: 50px;
    border-radius: 5px;
    border: 1px solid #0679d6;
    text-indent: 2em;
  }
  .mybtns button {
    width: 130px;
    height: 40px;
    background: linear-gradient(
      180deg,
      rgba(59, 159, 241, 1) 0%,
      rgba(40, 132, 207, 1) 100%
    );
    opacity: 0.99;
    border-radius: 6px;
    border: none;
    margin-right: 10px;
    color: white;
  }
  .phonemiddle {
    display: none;
  }
  .spec {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 600px;
  }
  .smallcontainer {
    width: 90%;
    margin: 0 auto;
  }
}
@media screen and (min-width: 700px) and (max-width: 1023px) {
  .table > tr > td{
   padding: 8px;
   border-top: 1px solid #ddd;
 }
  .mybtns {
    margin-bottom: 40px;
    /*  width: 1000px; */
    /* margin: 0 auto; */
    margin-top: 64px;
    margin-left: 10px;
  }
  .mybtns input {
    width: 50%;
    height: 40px;
    margin-right: 20px;
    border-radius: 5px;
    border: 1px solid #0679d6;
    text-indent: 2em;
  }
  .mybtns button {
    width: 10%;
    height: 36px;
    background: linear-gradient(
      180deg,
      rgba(59, 159, 241, 1) 0%,
      rgba(40, 132, 207, 1) 100%
    );
    opacity: 0.99;
    border-radius: 6px;
    border: none;
    margin-right: 10px;
    color: white;
  }
  .phonemiddle {
    display: none;
  }
  .spec {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 290px;
  }
  .smallcontainer {
    width: 98%;
    margin: 0 auto;
  }
}
@media screen and (max-width: 699px) {
  .smallcontainer {
    width: 98%;
    margin: 0 auto;
  }
  .mybtns {
    margin-bottom: 20px;
    /* margin-top: 64px; */
    margin-left: 10px;
  }
  .mybtns input {
    width: 59%;
    height: 40px;
    margin-right: 9px;
    border-radius: 5px;
    border: 1px solid #0679d6;
    text-indent: 2em;
  }
  .mybtns button {
    width: 16%;
    height: 36px;
    background: linear-gradient(
      180deg,
      rgba(59, 159, 241, 1) 0%,
      rgba(40, 132, 207, 1) 100%
    );
    opacity: 0.99;
    border-radius: 6px;
    border: none;
    /* margin-right: 10px; */
    color: white;
    margin-top: 20px;
  }
  .middle {
    display: none;
  }
  .select {
    margin-top: 5px;
    float: right;
    border-radius: 9px;
    height: 30px;
    width: 54px;
    border: none;
    background: linear-gradient(
      180deg,
      rgba(59, 159, 241, 1) 0%,
      rgba(40, 132, 207, 1) 100%
    );
    color: white;
  }
  .phonelist {
    height: 40px;
    background: rgb(244, 244, 244);
    position: relative;
    transition: max-height 0.25s;
  }
  .phonelist .btn_s {
    position: absolute;
    width: 100%;
    max-height: 0;
    background: #fff;
    overflow: hidden;
    z-index: 4;
    line-height: 30px;
  }
  .phonelist .btn_s .row {
    margin: 0;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    margin-left: 25px;
  }
  .phonelist .btn_s .row_s4 {
    text-align: center;
  }
  .phonelist .btn_s .row div {
    text-align: center;
    padding: 0;
    width: 20%;
    margin: 4px 6px;
    background: red;
    background: #d9d9f3;
    border-radius: 6px;
  }

  .phonemiddle .model_s {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 40px;
    left: 0;
    background: #000;
    z-index: 2;
    opacity: 0.2;
  }
  .phonemiddle {
    margin-right: 10px;
    margin-left: 10px;
    position: relative;
  }
  .firsttitle {
    height: 30px;
    line-height: 41px;
    font-size: 16px;
  }
  .toggle {
    display: none;
    position: absolute;
    background-color: white;
  }
  .toggle div {
    margin: 5px;
    font-size: 16px;
  }
  .toggle span {
    background: rgb(235, 235, 235);
    padding: 4px 7px;
    margin-right: 16px;
    display: inline-block;
    margin-bottom: 10px;
  }

  .footbtn {
    width: 50%;
    background: linear-gradient(
      180deg,
      rgba(59, 159, 241, 1) 0%,
      rgba(40, 132, 207, 1) 100%
    );
    color: white;
    border: none;
    height: 30px;
  }
  .clearbtn {
    background: none;
    color: black;
  }
  .selected {
    display: none;
  }
  .phonetitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90%;
    margin: 5px;
    font-weight: 600;
  }
  .phonecont span {
    border: 1px solid rgb(40, 132, 207);
    margin-right: 10px;
    padding: 5px;
  }

  .phonedata {
    /* float:right */
    text-align: right;
  }
  .phonecont {
    margin-bottom: 5px;
    padding: 0 5px;
    line-height: 50px;
  }
  .phonetab {
    border-bottom: 1px solid rgb(235, 235, 235);
    padding: 10px 0;
  }
}

.mycontainer {
  width: 100%;
}

.btn1:hover {
  background-color: #0e6fa4;
}
.btn2:hover {
  background-color: #0e6fa4;
}
.mydown li {
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-bottom: 1px solid #33a0ed;
}
.mydown1:hover {
  background-color: #0e6fa4;
  color: white;
}
.only:hover {
  cursor: pointer;
}
.mydown li:hover {
  cursor: pointer;
  background-color: #0e6fa4;
}

[v-cloak] {
  display: none;
}
/**底部**/
footer {
  background: #2984b7;
  margin-top: 20px;
}
footer ul {
  list-style: none;
  margin-left: 20px;
  margin-top: 20px;
  color: white;
  border-right: 1px solid #39b5d4;
  height: 160px;
}
.words {
  font-size: 16px;
  margin-bottom: 10px;
}
.jianjie {
  color: white;
}
.jianjie:hover {
  color: aqua;
}

/**主体**/

.first {
  height: 50px;
  line-height: 21px;
  list-style: none;
  overflow: hidden;
  border-bottom: 1px dashed #ced4da;
  margin-left: 25px;
  display: flex;
  align-items: center;
}
.first > li {
  float: left;
  margin-right: 7px;
  padding: 0 5px;
  text-align: center;
}
.first > li:hover {
  cursor: pointer;
}
.second > li:hover {
  cursor: pointer;
}
.third > li:hover {
  cursor: pointer;
}
.four > li:hover {
  cursor: pointer;
}
.mybutton > li {
  cursor: pointer;
}
.first > li:first-child {
  font-weight: bolder;
}
.first > li:nth-child(2) {
  color: #028bcf;
  border-radius: 5px;
}
.second > li:first-child {
  font-weight: bolder;
}
.second > li:nth-child(2) {
  color: #028bcf;
  border-radius: 5px;
}
.third > li:first-child {
  font-weight: bolder;
}
.third > li:nth-child(2) {
  color: #028bcf;
  border-radius: 5px;
}
.second {
  height: 50px;
  /* line-height:50px; */
  list-style: none;
  overflow: hidden;
  border-bottom: 1px dashed #ced4da;
  margin-left: 25px;
  display: flex;
  align-items: center;
}
.second > li {
  float: left;
  margin-right: 7px;
  height: 21px;
  padding: 0 5px;
}
.third {
  height: 50px;
  /* line-height:50px; */
  list-style: none;
  overflow: hidden;
  margin-left: 25px;
  display: flex;
  align-items: center;
  border-bottom: 1px dashed #ced4da;
}
.third > li {
  float: left;
  margin-right: 7px;
  height: 21px;
  padding: 0 5px;
}
.four {
  height: 50px;
  /* line-height:50px; */
  list-style: none;
  overflow: hidden;
  margin-left: 25px;
  display: flex;
  align-items: center;
  border-bottom: 1px dashed #ced4da;
}
.four > li {
  float: left;
  margin-right: 7px;
  height: 21px;
  padding: 0 5px;
}
.five {
  height: 50px;
  /* line-height:50px; */
  list-style: none;
  overflow: hidden;
  margin-left: 25px;
  display: flex;
  align-items: center;
  border-bottom: 1px dashed #ced4da;
}
.five > li {
  float: left;
  margin-right: 7px;
  height: 21px;
  padding: 0 5px;
}
.four > li:first-child {
  font-weight: bolder;
}
.four > li:nth-child(2) {
  color: #028bcf;
  border-radius: 5px;
}
.five > li:first-child {
  font-weight: bolder;
}
.five button {
  width: 70px;
  height: 30px;
  background-color: #028bcf;
  border: 1px solid #028bcf;
  border-radius: 5px;
  color: white;
}
.five input {
  width: 250px;
  height: 30px;
  margin-top: -25px;
  border-radius: 5px;
  border: 1px solid #ced4da;
}
/* .li1{
    margin-top: -15px;
    margin-left: 20px;
} */
.lightblue {
  /* background-color: #E0EFF4 */
}
.blue {
  /* background-color:#CCE5EC */
}
.middle {
  border: 1px solid #ced4da;
}
.lists {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
}
.tabs {
  background-color: #f6f6f6;
}

.td1 {
  width: 150px;
}
.tab2 {
  width: 600px;
}
.only:hover {
  /* background-color:#ced4da; */
  color: #028bcf;
}
.mynavs {
  display: flex;
  margin-top: 30px;
  margin-bottom: 40px;
}
.headline-bg.index-headline-bg {
  height: 160px;
  overflow: hidden;
  background: -webkit-linear-gradient(top, #1a88dc, #3054db);
  background: -moz-linear-gradient(top, #1a88dc, #3054db);
  background: -o-linear-gradient(top, #1a88dc, #3054db);
  background: -ms-linear-gradient(top, #1a88dc, #3054db);
}

.mes {
  width: 100%;
  position: absolute;
  top: 60px;
}
.footer {
  position: relative;
  margin-top: 35px;
}
.beCenter {
  text-align: center;
  height: 40px;
}
</style>