<template>
    <div>
       <navheader></navheader>
       <div class="middle">
            <div class="titles">{{title}}</div>
            <div class="date">发布日期：{{date}}</div>
            <div class="fontSi">
            T: <span>小</span><span>中</span><span>大</span>
                   <shares/>
            </div>
             <div v-html='list' class="mylist">{{list}}</div>
        </div>
    </div>
</template>
<script>
import { detailsNotice } from "../services/list";
export default {
    data() {
        return {
            obj:{
                id: sessionStorage.getItem('articleID')
            },
            title:"",
            list:"",
            date:""
        }
    },
    mounted() {
        detailsNotice(this.obj).then(item => {
            var datas = item.data[0]
             var content = datas.content;
            this.list = content;
            this.title = datas.title;
            this.date = datas.addTime;
        })
    },
}
</script>
<style scoped>
.mylist{
    		width:80%;
    		margin:0 auto
    	}
    	@media screen and (max-width:699px){
			.mylist img{
			   width:100%;
			   height:auto
			}
		}
   		.mylist>table {
   			margin: 0 auto
   		}
   		.mylist>table>tbody>tr>td>img{
   		
   		}
   		.date{
   			color:rgba(153,153,153,1)
   		}
   		.fontSi{
   			text-align:center;
   			display: flex;
    		justify-content: center;
    		line-height:30px
   		}
   		.fontSi>span{
   			padding: 0 10px;
   			cursor:pointer;
   		}
/**头部**/

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