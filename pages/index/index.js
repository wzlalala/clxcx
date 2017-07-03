//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    width: app.systemInfo.windowWidth,
    height: app.systemInfo.windowHeight,
    banner: [],
    functions: [
      {
        url: '../../images/i01.png',
        name: '百叶窗',
        id: '16'
      },
      {
        url: '../../images/i02.png',
        name: '遮光卷帘',
        id: '17'
      },
      {
        url: '../../images/i03.png',
        name: '工程卷帘',
        id: '18'
      },
      {
        url: '../../images/i04.png',
        name: '垂帘',
        id: '19'
      },
      {
        url: '../../images/i03.png',
        name: '风景画卷帘',
        id: '21'
      },
      {
        url: '../../images/i03.png',
        name: '家居布帘',
        id: '22'
      },
      {
        url: '../../images/i03.png',
        name: '柔纱帘',
        id: '23'
      },
      {
        url: '../../images/i03.png',
        name: '遮光布帘',
        id: '20'
      }
    ],
    goods: []
  },

  onLoad: function () {
    this.getData();
  },
  getData: function () {
    var that = this;
    wx.request({
      url: 'https://lvzhitang.com/admin/Wxxcx/banner_list/',
      header: {//请求头
        "Content-Type": "applciation/json"
      },
      method: "GET",//get为默认方法/POST
      success: function (res) {
        that.setData({
          banner: res.data.data
        })
      }
    }),
      wx.request({
        url: 'https://lvzhitang.com/admin/Wxxcx/product_list/',
        header: {//请求头
          "Content-Type": "applciation/json"
        },
        method: "GET",//get为默认方法/POST
        success: function (res) {
          that.setData({
            goods: res.data.data
          })
        }
      })
  },
  itemclick: function (e) {
    var specId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../productdetails/productdetails?specId=' + specId,
    })
  },
  menuclick: function (e) {
    var news_columnid = e.currentTarget.dataset.id;
    var name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '../productlists/productlists?news_columnid=' + news_columnid+'&name='+name,
    })
  }
})
