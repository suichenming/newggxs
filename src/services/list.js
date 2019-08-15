import axios from 'axios'
import qs from 'qs'
export function getSearchResultList(objparams){
    let postData = qs.stringify(objparams)
    return new Promise((reslove,reiect) => {
        axios.post('./trade/getSearchResultList',postData,{headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}).then(res => {
            reslove(res)
        })
    })
}


//  newlist页面下的接口
export function getViewSearchResultList(objparams){
    let postData = qs.stringify(objparams)
    return new Promise((reslove,reiect) => {
        axios.post('./indexNotice/getViewSearchResultList',postData,{headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}).then(res => {
            reslove(res)
        })
    })
}