<template>
  <div id="app" v-cloak>
    <router-view></router-view>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css"
export default {
  data(){
    return {
    }
  },
  mounted() {
  },
}
</script>
<style  scoped>
#app{
  overflow: hidden;
}
[v-cloak]{
  display: none
}

</style>
