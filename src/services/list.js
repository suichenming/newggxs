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

//  details页面的接口
export function detailsNotice(objparams){
    let postData = qs.stringify(objparams)
    return new Promise((reslove,reiect) => {
        axios.post('./indexNotice/detailsNotice',postData,{headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}).then(res => {
            reslove(res)
        })
    })
}

//  detail页面的接口
export function noticeDetail(objparams){
    let postData = qs.stringify(objparams)
    return new Promise((reslove,reiect) => {
        axios.post('./trade/noticeDetail',postData,{headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}).then(res => {
            reslove(res)
        })
    })
}
export function queryXGNotice(objparams){
    let postData = qs.stringify(objparams)
    return new Promise((reslove,reiect) => {
        axios.post('./trade/queryXGNotice',postData,{headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}).then(res => {
            reslove(res)
        })
    })
}
//  gzjgdetails页面接口
export function gzjgDdetails(objparams){
    let postData = qs.stringify(objparams)
    return new Promise((reslove,reiect) => {
        axios.post('./indexNotice/gzjgDdetails',postData,{headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}).then(res => {
            reslove(res)
        })
    })
}