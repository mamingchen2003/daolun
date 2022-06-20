// index.js
// const app = getApp()
const { envList } = require('../../envList.js');
wx.setNavigationBarTitle({
  title: '智能家居助手'
}),
Page({
  points:function(e) {
    var that = this
    wx.request({
       //设备ID
      //api-key
      url: 'http://api.heclouds.com/devices/955676515/datapoints?', //xxxxxxxxxx这里填写你的设备id
      header:{
        "api-key":"8TYf79GSYkjdKWrsAvO1ifVEpVM="  //这里写你的api-key
      },
      data:{
        limit:1
      },
      method :"GET",
       //获取成功
      success:function(res){
        console.log(res)
       that.setData({
         shidu:res.data.data.datastreams[0].datapoints[0].value, //这里的shidu要跟wxml{{shidu}} 名字相同
         wendu:res.data.data.datastreams[3].datapoints[0].value,
         guangzhao:res.data.data.datastreams[1].datapoints[0].value,
         people:res.data.data.datastreams[4].datapoints[0].value,
       })    
      }
    })
  },
});
