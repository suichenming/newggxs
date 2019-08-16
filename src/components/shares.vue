<template>
    <div>
        分享：<div class="bdsharebuttonbox" style="float:right">
		           		<a href="#" class="bds_more" data-cmd="more"></a>
		           		<a href="#" class="bds_qzone" data-cmd="qzone"></a>
		           		<a href="#" class="bds_tsina" data-cmd="tsina"></a>
		           		<a href="#" class="bds_tqq" data-cmd="tqq"></a>
		           		<a href="#" class="bds_renren" data-cmd="renren"></a>
		           		<a href="#" class="bds_weixin" data-cmd="weixin"></a>
           			</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    beforeCreate(){
        window._bd_share_config = ''
    },
    mounted() {
        this.$nextTick(()=>{
            window._bd_share_config={
		"common":{
			"bdSnsKey":{},
			"bdText":"",
			"bdMini":"2",
			"bdPic":"",
			"bdStyle":"0",
			"bdSize":"16"
		},
			"share":{},
			"image":{
				"viewList":["qzone","tsina","tqq","renren","weixin"],
				"viewText":"分享到：","viewSize":"16"
			},
			"selectShare":{
				"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]
			}
        };
        const s = document.createElement('script');
        s.type = 'text/javascript';
        var  urls = ''
         if (process.env.NODE_ENV === 'production') {
            urls = '../../public/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5); // 线上ip
        } else {
            urls = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5);  // 本地开发ip
        }
	    s.src = urls
	    document.body.appendChild(s);
        })
        
    },
}
</script>
<style  scoped>

</style>