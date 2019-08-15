<template>
    <div>
       <navheader @name="chiname"></navheader>
       <div class="smallcontainer">
           <div class="mybtns">
                <input id="searchText" type="text" v-model="searchText" placeholder="  请输入关键字..."><button @click="searchView()">搜索</button>
            </div>
             <div class="middle">
            <div class="mytable">
                <ul class="first" >
                    <li v-for="(item,index) in dataname" :key="index" :style="{color: item.name === fourunm? '#028bcf' : '#333'}" @click="fristclick(item.name,index)" >{{item.name}}</li>
                </ul>
            </div>
            <div id = "lists"></div>
            <div class="lists">
                <table class="table  tab1" v-loading="loading">
                    <tr class="tabs">
                        <td class="td1">标题</td>
                        <td class="td2">时间</td>
                    </tr>
                    <tr v-for="(item,index) in list" :key="index" :class="(index%2==0)?blue:lightblue" class="only" @click="detail(item)">
                        <td><div class="spec" >{{item.title}}</div></td>
                        <td>{{item.addTime}}</td>
                    </tr>
                </table>
            </div>
            <div class="mynavs">
                <div id="paging" class="pagination" ></div>
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
    </div>
</template>
<script>
import { getViewSearchResultList } from "../services/list";
export default {
    data() {
        return {
            blue:'blue',
            lightblue:'lightblue',
            list:[],
            dataname: [
                {name: '全部'},{name: '新闻动态'},{name: '法律法规'},{name: '国资监管规定'},
            ],
            fourunm: '全部',
            obj:{
                articleType: (this.$store.state.newliststr === '' ? sessionStorage.getItem('name'): this.$store.state.newliststr),
                pageNo: 0,
                title: ''
            },
            loading: true,
            searchText: '',
            currentPage1: 1,
            total:null
        }
    },
    mounted() {
        if(this.$store.state.newliststr === ''){
            this.fourunm = sessionStorage.getItem('name')
        } else {
            this.fourunm = this.$store.state.newliststr
        }
        this.funaxios()

    },
    methods: {
        funaxios(){
            getViewSearchResultList(this.obj).then(res => {
                this.loading = false
                this.total = res.data[0].pagesNo
                if(res.data.length > 0) {
                    $(".lists").show();
                    $("#lists").html("");
                    this.list = res.data
                } else {
                    $(".lists").hide();
                    $("#lists").html("没有查询到相关数据!");
                }
            }).catch(error => {this.loading = false})
        },

        chiname(name){
            this.loading = true
            this.fourunm = name
            this.obj.articleType = name
            this.funaxios()
        },
        searchView(){
            this.loading = true
            this.obj.title = this.searchText
            this.funaxios()
        },
        fristclick(name,index){
            sessionStorage.setItem('name',name )
            this.loading = true
            this.fourunm = name
            this.obj.articleType = name
            this.funaxios()
        },
        handleCurrentChange(val){
            this.loading = true
            this.obj.pageNo = val
            this.funaxios()
        }
        
    },
}
</script>
<style scoped>
/**头部**/
@media screen and (min-width:770px){
    .table > tr > td{
   padding: 8px;
   border-top: 1px solid #ddd;
 }
	.smallcontainer{
	width:90%;
	margin:0 auto
}
.mybtns input{
    width:60%;
    height: 40px;
    margin-right: 20px;
    border-radius: 5px;
    border: 1px solid #0679D6;
    text-indent:2em
}
.mybtns button{
    width:15%;
    height:36px;
    background:linear-gradient(180deg,rgba(59,159,241,1) 0%,rgba(40,132,207,1) 100%);
    opacity:0.99;
    border-radius:6px;
    border:none;
    margin-right: 10px;
    color:white
}
.spec{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 90%
}
}
@media screen and (max-width:769px){
	.smallcontainer{
	width:100%;
	margin:0 auto
}
.mybtns input{
    width:60%;
    height: 40px;
    margin-right: 20px;
    border-radius: 5px;
    border: 1px solid #0679D6;
    text-indent:2em
}
.mybtns button{
    width:20%;
    height:36px;
    background:linear-gradient(180deg,rgba(59,159,241,1) 0%,rgba(40,132,207,1) 100%);
    opacity:0.99;
    border-radius:6px;
    border:none;
    margin-right: 10px;
    color:white
}
.spec{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 70%
}
}
@media screen and (max-width:414px){
	.spec{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 250px
}
}

.mycontainer{
    width: 100%;
}

.btn1:hover{
    background-color: #0e6fa4
}
.btn2:hover{
    background-color: #0e6fa4
}

.only:hover{
    cursor:pointer
}

[v-cloak]{
    display:none
}
/**底部**/
footer{
    background: #2984B7;
    margin-top: 20px
}
footer ul{
    list-style: none;
    margin-left: 20px;
    margin-top: 20px;
    color: white;
    border-right: 1px solid #39B5D4;
    height: 160px
}
.words{
    font-size: 16px;
    margin-bottom: 10px
}
footer li{
    margin-top: 5px
}
.jianjie{
    color:white
}
.jianjie:hover{
    color: aqua
}

/**主体**/
.mybtns{
    margin-bottom: 40px;
    /* width: 1000px; */
    /* margin: 0 auto; */
    margin-top: 40px;
    margin-left: 10px
}

.first{
    height:50px;
    line-height:21px;
    list-style: none;
    overflow: hidden;
    border-bottom:1px dashed #ced4da;
    margin-left:25px;
    display:flex;
    align-items: center
}
.first>li{
    float: left;
    margin-right:7px;
    padding: 0 5px;
    text-align: center
}
.first>li:hover{
    cursor: pointer
}

.second>li:hover{
    cursor: pointer
}
.third>li:hover{
    cursor: pointer
}
.four>li:hover{
    cursor: pointer
}
.mybutton>li{
    cursor: pointer;
}
.first>li:first-child{
    font-weight: bolder;
   
}
.first>li:nth-child(2){
    
    
    border-radius:5px
}
.second>li:first-child{
    font-weight: bolder;
   
}
.second>li:nth-child(2){
    color:#028BCF;
    border-radius:5px
}
.third>li:first-child{
    font-weight: bolder;
    
}
.third>li:nth-child(2){
    color:#028BCF;
    border-radius:5px
}
.second{
    height:50px;
    /* line-height:50px; */
    list-style: none;
    overflow: hidden;   
    border-bottom:1px dashed #ced4da;
    margin-left:25px;
    display: flex;
    align-items: center

}
.second>li{
    float: left;
    margin-right:7px;
    height: 21px;
    padding: 0 5px
}
.third{
    height:50px;
    /* line-height:50px; */
    list-style: none;
    overflow: hidden;   
    margin-left:25px;
    display: flex;
    align-items: center;
    border-bottom:1px dashed #ced4da;
}
.third>li{
    float: left;
    margin-right:7px;
    height: 21px;
    padding: 0 5px
}
.four{
    height:50px;
    /* line-height:50px; */
    list-style: none;
    overflow: hidden;   
    margin-left:25px;
    display: flex;
    align-items: center;
    border-bottom:1px dashed #ced4da;
}
.four>li{
    float: left;
    margin-right:7px;
    height: 21px;
    padding: 0 5px
}
.five{
    height:50px;
    /* line-height:50px; */
    list-style: none;
    overflow: hidden;   
    margin-left:25px;
    display: flex;
    align-items: center;
    border-bottom:1px dashed #ced4da;
}
.five>li{
    float: left;
    margin-right:7px;
    height: 21px;
    padding: 0 5px
}
.four>li:first-child{
    font-weight: bolder;
    
}
.four>li:nth-child(2){
    color:#028BCF;
    border-radius:5px
}
.five>li:first-child{
    font-weight: bolder;
    
}
.five button{
    width: 70px;
    height: 30px;
    background-color: #028BCF;
    border: 1px solid #028BCF;
    border-radius: 5px;
    color: white;
   
}
.five input{
    width: 250px;
    height: 30px;
    margin-top: -25px;
    border-radius: 5px;
    border: 1px solid #ced4da
}
/* .li1{
    margin-top: -15px;
    margin-left: 20px;
} */
.lightblue{
    /* background-color: #E0EFF4 */
}
.blue{
    /* background-color:#CCE5EC */
}
.middle{
    border: 1px solid #ced4da;
}
.lists{
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px
}
.tabs{
    background-color: #F6F6F6
}



.tab2{
    width: 600px
}
.only:hover{
    /* background-color:#ced4da */
    color:#028BCF
}
.mynavs{
    display: flex;
    margin-top: 30px;
    margin-bottom: 40px
}
.headline-bg.index-headline-bg {
	height:160px;
	overflow:hidden;
	background:-webkit-linear-gradient(top,#1a88dc,#3054db);
	background:-moz-linear-gradient(top,#1a88dc,#3054db);
	background:-o-linear-gradient(top,#1a88dc,#3054db);
	background:-ms-linear-gradient(top,#1a88dc,#3054db);
}
.beCenter span {
    padding: 10px 20px;
    color: white;
    font-size: 18px;
}
.mes {
    width: 100%;
    position: absolute;
    top: 60px;
}
.footer {
    position: relative;
    margin-top:35px
}
.beCenter {
    text-align: center;
    height: 40px;
}

</style>