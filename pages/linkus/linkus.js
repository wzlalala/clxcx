// pages/linkus/linkus.js
var WxParse = require('../../wxParse/wxParse.js');
var article = '';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: app.systemInfo.windowWidth,
    linkus:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(options);
  },
  getData: function (options) {
    var that = this;
    wx.request({
      url: 'https://lvzhitang.com/admin/Wxxcx/linkus/',
      header: {//请求头
        "Content-Type": "applciation/json"
      },
      method: "GET",//get为默认方法/POST
      success: function (res) {
        console.log(res);
        article = res.data.data.menu_content;
        WxParse.wxParse('article', 'html', article, that, 5);
        that.setData({
          linkus: res.data.data
        })
      }
    })
  }


})