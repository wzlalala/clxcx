var WxParse = require('../../wxParse/wxParse.js');

var article = '';
const app = getApp();

Page({

  data: {
    width: app.systemInfo.windowWidth,
    goods: {}
  },
  onLoad: function (options) {
    this.getData(options);
  },
  getData: function (options) {
    var that = this;
    var id = options.specId;
    wx.request({
      url: 'https://lvzhitang.com/admin/Wxxcx/product_detail/',
      header: {//请求头
        "Content-Type": "applciation/json"
      },
      data: {
        goodsId: id
      },
      method: "GET",//get为默认方法/POST
      success: function (res) {
        article = res.data.data.news_content;
        WxParse.wxParse('article', 'html', article, that, 5);
        that.setData({
          goods:res.data.data
        })
      }
    })
  },
  goproductlist: function (e) {
    wx.switchTab({
      url: '../productlist/productlist',
    })
  },
  onShareAppMessage:function () {
   var that = this;
    return {
      title: that.data.goods.news_title,
      desc: '郑州市四环内可免费上门设计，预约电话18137896797',
      path: 'pages/productdetails/productdetails?specId=' + that.data.goods.n_id
    }
  }
})