import axios from 'axios'
//  首页正在采购项目及预算金额
export function startNotice(){
    return new Promise((resolve,reject) => {
        axios.post('./indexNotice/startNotice').then(r =>{
            r.data.map(item => {
                resolve(item)
            })
        })
        .catch(error => {
            console.log(error)
        })
    })
}
//已完成采购项目及预算金额
export function finishNotice(){
    return new Promise((resolve,reject) => {
        axios.post('./indexNotice/finishNotice').then(r =>{
            r.data.map(item => {
                resolve(item)
            })
        })
        .catch(error => {
            console.log(error)
        })
    })
}
//新闻动态
export function viewNotice(){
    return new Promise((resolve, reject) => {
        axios.post('./indexNotice/viewNotice').then(item => {
            resolve(item)
        })
    }) 
}
//  法律法规
export function zcfgNotice(){
    return new Promise((resolve, reject) => {
        axios.post('./indexNotice/zcfgNotice').then(item => {
            resolve(item)
        })
    }) 
}
//国资监管规定
export function gzjggdNotice(){
    return new Promise((resolve, reject) => {
        axios.post('./indexNotice/gzjggdNotice').then(item => {
            resolve(item.data)
        })
    }) 
}
//  采购公告
export function cgNotice(){
    return new Promise((resolve, reject) => {
        axios.post('./indexNotice/cgNotice').then(item => {
            var data = item.data.map(noticeData => {
                if(noticeData.purchase_budget_money=='0.0000'){
                    noticeData.purchase_budget_money="无";
                    noticeData.myflag=false
                }else if(noticeData.purchase_budget_money=='***'){
                    noticeData.purchase_budget_money="***";
                    noticeData.myflag=false
                }else{
                    noticeData.myflag=true
                }
                return noticeData
            })
            resolve(data)
        })
    }) 
}
//  工程类采购公告
export function gcNotice(){
    return new Promise((resolve, reject) => {
        axios.post('./indexNotice/gcNotice').then(item => {
            var data = item.data.map(noticeData => {
                if(noticeData.purchase_budget_money=='0.0000'){
                    noticeData.purchase_budget_money="无";
                    noticeData.myflag=false
                }else if(noticeData.purchase_budget_money=='***'){
                    noticeData.purchase_budget_money="***";
                    noticeData.myflag=false
                }else{
                    noticeData.myflag=true
                }
                return noticeData
            })
            resolve(data)
        })
    }) 
}
//货物类采购公告
export function hwNotice(){
    return new Promise((resolve, reject) => {
        axios.post('./indexNotice/hwNotice').then(item => {
            var data = item.data.map(noticeData => {
                if(noticeData.purchase_budget_money=='0.0000'){
                    noticeData.purchase_budget_money="无";
                    noticeData.myflag=false
                }else if(noticeData.purchase_budget_money=='***'){
                    noticeData.purchase_budget_money="***";
                    noticeData.myflag=false
                }else{
                    noticeData.myflag=true
                }
                return noticeData
            })
            resolve(data)
        })
    }) 
}
//  服务类采购公告
export function fwNotice(){
    return new Promise((resolve, reject) => {
        axios.post('./indexNotice/fwNotice').then(item => {
            var data = item.data.map(noticeData => {
                if(noticeData.purchase_budget_money=='0.0000'){
                    noticeData.purchase_budget_money="无";
                    noticeData.myflag=false
                }else if(noticeData.purchase_budget_money=='***'){
                    noticeData.purchase_budget_money="***";
                    noticeData.myflag=false
                }else{
                    noticeData.myflag=true
                }
                return noticeData
            })
            resolve(data)
        })
    }) 
}
//招投标服务网公告
export function simpleNotice(){
    return new Promise((resolve, reject) => {
        axios.post('./indexNotice/simpleNotice').then(item => {
            resolve(item.data)
        })
    }) 
}
//单一来源公示
export function singleSourceNotice(){
    return new Promise((resolve, reject) => {
        axios.post('./indexNotice/singleSourceNotice').then(item => {
            var data = item.data.map(singleSourceNoticeData => {
                if(singleSourceNoticeData.mechanism_name==''){
                    singleSourceNoticeData.mechanism_name=singleSourceNoticeData.mechanism_name1;
                }
                return singleSourceNoticeData
            })
            resolve(data)
        })
    }) 
}
//  结果公示
export function allNotice(){
    return new Promise((resolve, reject) => {
        axios.post('./indexNotice/allNotice').then(item => {
            var data = item.data.map(allNotice => {
                if(allNotice.mechanism_name==''){
                    allNotice.mechanism_name=allNotice.buyer_name;
                }
                return allNotice
            })
            resolve(data)
        })
    }) 
}
//  成交公示
export function cjNotice(){
    return new Promise((resolve, reject) => {
        axios.post('./indexNotice/cjNotice').then(item => {
            var data = item.data.map(cjNoticeData => {
                if(cjNoticeData.mechanism_name==''){
                    cjNoticeData.mechanism_name=cjNoticeData.buyer_name;
                }
                return cjNoticeData
            })
            resolve(data)
        })
    }) 
}
//  废标公示
export function fbNotice(){
    return new Promise((resolve, reject) => {
        axios.post('./indexNotice/fbNotice').then(item => {
            var data = item.data.map(fbNoticeData => {
                if(fbNoticeData.mechanism_name==''){
                    fbNoticeData.mechanism_name=fbNoticeData.buyer_name;
                }
                return fbNoticeData
            })
            resolve(data)
        })
    }) 
}
//  变更公示
export function bgNotice(){
    return new Promise((resolve, reject) => {
        axios.post('./indexNotice/bgNotice').then(item => {
            var data = item.data.map(bgNoticeData => {
                if(bgNoticeData.mechanism_name==''){
                    bgNoticeData.mechanism_name=bgNoticeData.buyer_name;
                }
                return bgNoticeData
            })
            resolve(data)
        })
    }) 
}
