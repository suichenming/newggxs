<template>
  <div>
    <div class="footer">
      <div class="headline-bg index-headline-bg wavesWapper">
        <canvas id="waves" class="waves"></canvas>
      </div>
      <div class="mes">
        <div class="beCenter">
          <span>版权所有：深圳联合产权交易所股份有限公司</span>
          <span>地址：深圳南山区沙河西路1809号深圳湾科技生态园一区2栋A座11楼</span>
        </div>
        <div class="beCenter" >
          <span>联系电话：0755-86358999</span>
          <span id="for">粤ICP备11001582号-1
                <span id="cnzz_stat_icon_1275781810">
                    <a href="https://www.cnzz.com/stat/website.php?web_id=1275781810" target="_blank" title="站长统计">
                    <img  border="0" hspace="0" vspace="0" src="http://icon.cnzz.com/img/pic2.gif" alt=""></a>
                </span>
          </span>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
   
    
};
</script>
<style lang="scss"  scoped>
@media screen and (min-width: 1024px) {
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
}
@media screen and (min-width: 700px) and (max-width: 1023px) {
  .beCenter span {
    padding: 10px 20px;
    color: white;
    font-size: 16px;
  }
  .mes {
    width: 100%;
    position: absolute;
    top: 60px;
  }
}
@media screen and (max-width: 699px) {
  .beCenter span {
    margin: 5px;
    display: block;
    color: white;
    font-size: 13px;
  }
  .mes {
    width: 100%;
    position: absolute;
    top: 30px;
  }
}

.footer {
  position: relative;
  margin-top: 35px;
}
.beCenter {
  text-align: center;
  height: 54px;
}
.wavesWapper {
  height: 160px;
  overflow: hidden;
  background:  linear-gradient(to top, #1a88dc, #3054db);
}
</style>
