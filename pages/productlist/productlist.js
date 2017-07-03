const app = getApp();
Page({

  data: {
    selectedNav: '00',
    width: app.systemInfo.windowWidth,
    showspinner: false,
    spinners: [],
    storelist: [
    ]

  },

  onLoad: function () {
    this.getData();
  },
  getData: function () {
    var that = this;
    wx.request({
      url: 'https://lvzhitang.com/admin/Wxxcx/product_list/',
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
    console.log(specId);
    wx.navigateTo({
      url: '../productdetails/productdetails?specId=' + specId,

    })
  }
})