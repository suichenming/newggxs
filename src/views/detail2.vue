<template>
  <div>
    <navheader></navheader>
    <div class="mycontainer">
      <div class="middle">
        <div class="titles">{{title}}</div>
        <div class="fontSi">
          <shares />
        </div>

        <div class="dateO" style="text-align: center;"></div>
        <div id="mylist">
          <b>公告内容:</b>
          {{list}}
        </div>
        <div id="mylist">
          <b>废标原因:</b>
          {{reason}}
        </div>
        <div style="width: 890px; margin: 0 auto;border-bottom: 1px solid #3694EB;">
          <p
            style="display: inline-block;  padding: 10px 20px; background: #3694EB; color: #fff;"
          >相关公告</p>
        </div>
        <div style="width: 890px; margin: 0 auto;">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="项目名称"></el-table-column>
            <el-table-column prop="name" label="预算金额"></el-table-column>
            <el-table-column prop="address" label="采购方式"></el-table-column>
            <el-table-column prop="addresss" label="有效日期"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
     <foo-ter></foo-ter>
  </div>
</template>
<script>
import { noticeDetail, queryXGNotice } from "../services/list";
export default {
  data() {
    return {
      title: "",
      list: "",
      reason: "",
      tableData: [
        {
          title: "",
          publicity_end_date: ""
        }
      ]
    };
  },
  mounted() {
    var obj = JSON.parse(sessionStorage.getItem("obj"));
    noticeDetail(obj).then(res => {
      this.list = res.data.content;
      this.title = res.data.title;
      this.reason = res.data.end_cause;
      $("title").html(res.data.title);
      queryXGNotice({ section_no: res.data.section_no })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error, 1);
        });
    });
  }
};
</script>
<style  scoped>
/**头部**/
.mycontainer {
  width: 100%;
  margin: 0 auto;
}
.btn1:hover {
  background-color: #0e6fa4;
}
.btn2:hover {
  background-color: #0e6fa4;
}
.mylist {
  margin-top: 20px;
  /* padding:0 100px */
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
  height: 183px;
}
.words {
  font-size: 16px;
  margin-bottom: 10px;
}
footer li {
  margin-top: 5px;
}
.jianjie {
  color: white;
}
.jianjie:hover {
  color: aqua;
}

/**主体**/
.middle {
  margin-top: 53px;
  width: 98%;
  margin: 0 auto;
}
.titles {
  text-align: center;
  font-size: 24px;
  font-weight: bolder;
}
.date {
  text-align: center;
  line-height: 33px;
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
@media screen and (min-width: 1024px) {
  #mylist {
  width: 100%;
  text-align: left;
  text-indent: 2em;
  line-height: 20px;
  margin-top: 20px;
  padding: 0 100px;
}
  .titles {
    margin-top: 56px;
  }
}

.fontSi {
  text-align: center;
  display: flex;
  justify-content: center;
  line-height: 30px;
}
@media screen and (min-width: 700px) and (max-width: 1023px) {
  .titles {
    margin-top: 56px;
  }
}
@media screen and (max-width: 770px) {
  #mylist {
  width: 100%;
  text-align: left;
  text-indent: 2em;
  line-height: 20px;
  margin-top: 20px;
}
  .new-cg-row {
    width: 100% !important;
    margin: 0px auto;
  }
  .base-sw {
    width: 100% !important;
    margin: 0px auto;
    border-left: 1px #e6e6e6 solid;
    border-top: 1px #e6e6e6 solid;
  }
}

.fontSi {
  text-align: center;
  display: flex;
  justify-content: center;
  line-height: 30px;
}
</style>