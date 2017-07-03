const app = getApp();
Page({

  data: {
    width: app.systemInfo.windowWidth,
    showspinner: false,
    spinners: [],
    storelist: []
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: options.name });
    this.getData(options);
  },
  getData: function (options) {
    var that = this;
    wx.request({
      url: 'https://lvzhitang.com/admin/Wxxcx/product_list/',
      data:{
        news_columnid:options.news_columnid  
      },
      header: {//请求头
        "Content-Type": "applciation/json"
      },
      method: "GET",//get为默认方法/POST
      success: function (res) {
        that.setData({
          storelist: res.data.data
        })
      }
    })
  },
  itemclick: function (e) {
    var specId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../productdetails/productdetails?specId=' + specId,

    })
  }
})