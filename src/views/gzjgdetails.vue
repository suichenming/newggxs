<template>
    <div>
        <navheader></navheader>
                <div id="cccc" class="middle">
            <div class="titles">{{title}}</div>
            <div class="date">公告发布日期：{{date}}</div>
            <div class="fontSi">
               <shares />
               
            </div>
            <a :href="url"><div class="date" style="color:black">点击查看原公告信息</div></a>
            <div></div>
        </div>
            <div id="bbbb" class="middle" style="height:900px">
            <iframe id="aaaa" :src="urls" width="100%" height="100%" frameborder="0" ></iframe>
        </div>
         <foo-ter></foo-ter>
    </div>
</template>
<script>
import { gzjgDdetails } from "../services/list";
export default {
    data(){
        return {
            title:"",
            date:"",
            url:"",
            obj:{
                'batch_no':sessionStorage.getItem('pdf_annex')
            },
            urls: ''
        }
    },
    mounted() {
        console.log(sessionStorage.getItem('pdf_annex'))
        gzjgDdetails(this.obj).then(item => {
            var datas = item.data[0]
            this.urls = item.config.baseURL + '/indexNotice/devDoc?storeName=' + datas.address
            if(datas == null || datas == ''){
        		$('#bbbb').html('没有查询到相关数据！');
        		$('#cccc').html('');
        	}else{
        		this.title = datas.title;
                this.date = datas.publish_time;
                this.url = datas.url;
            }
        })
        
    },
}
</script>
<style scoped>


.mycontainer{
    width: 100%;
    margin: 0 auto
}


.btn1:hover{
    background-color: #0e6fa4
}
.btn2:hover{
    background-color: #0e6fa4
}
.mylist{
	margin-top:20px;
	/* padding:0 100px */
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
    height: 183px
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
.middle{
    margin-top: 53px;
    width:98%;
    margin:0 auto
}
.titles{
    text-align: center;
    font-size: 24px;
    font-weight: bolder;
}
.date{
    text-align: center;
    line-height:33px
}
.headline-bg.index-headline-bg {
	height:160px;
	overflow:hidden;
	background:-webkit-linear-gradient(top,#1a88dc,#3054db);
	background:-moz-linear-gradient(top,#1a88dc,#3054db);
	background:-o-linear-gradient(top,#1a88dc,#3054db);
	background:-ms-linear-gradient(top,#1a88dc,#3054db);
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
@media screen and (min-width:1024px){
	.titles{
		margin-top:56px	
	}
}

.fontSi{
    text-align:center;
    display: flex;
    justify-content: center;
    line-height:30px
}
@media screen and (min-width:700px) and (max-width:1023px){
    .titles{
        margin-top:56px
    }
}
</style>