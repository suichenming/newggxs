# cs

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


<div class="bdsharebuttonbox">
	<a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
	<a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
	<a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
</div>
mounted: function(){
	const that=this;
    setTimeout(()=>{
        that.setShare()
    },0)
},
methods:{
	setShare(){
		//分享相关代码
		window._bd_share_config={
			"common":{
				"bdSnsKey":{},
				"bdText":"",
				"bdMini":"1",
				"bdMiniList":false,
				"bdPic":"",
				"bdStyle":"1",
				"bdSize":"24"
			},
			"share":{},
			"selectShare":{
				"bdContainerClass":null,
				"bdSelectMiniList":["sqq","qzone","tsina"]
			}
		};
		const s = document.createElement('script');
	    s.type = 'text/javascript';
	    s.src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5);
	    document.body.appendChild(s);
 
	},
