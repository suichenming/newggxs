import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gonggaoStr: '',
    gongshiStr: '',
    newliststr: ''
  },
  mutations: {
    topgonggaoStr(state,newname){
      console.log(state,newname)
      state.gonggaoStr = newname
      state.gongshiStr = ''
    },
    topgongshiStr(state,newname){
      console.log(state,newname)
      state.gonggaoStr = ''
      state.gongshiStr = newname
    },
    topnewliststr(state,newname){
      state.newliststr = newname
    }
  },
  actions: {

  }
})
