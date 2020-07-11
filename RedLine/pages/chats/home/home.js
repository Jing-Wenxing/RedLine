// pages/home/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    myurl: 'https://pic.gksec.com/2020/07/08/79d1c6f44b144/9809a0604ca7bd0dbfbf1427e46d743e.jpg',
    attentionnum: 0,
    foundnum: 0,
    CustomerServernum: 0,
    gridCol: 3,
    skin: false,
    systemmessage: {
      icon: 'noticefill',
      iconstyle: 'bg-red',
      name: '系统消息',
      message: '关于新功能上线的公告',
      finalTime: '17:20',
      unread: '1'
    },
    messageList: [{
        url: 'https://pic.gksec.com/2020/07/08/561775df28517/1234d5df46sdf.jpg',
        name: '仙女夏凡',
        message: '明天周几',
        finalTime: '17:04',
        unread: '0'
      },
      {
        url: 'https://pic.gksec.com/2020/07/08/f3ad2e0c3b67f/n5m~__``u@uou`bu~_hdql4.jpg',
        name: '清欢挽歌',
        message: '神仙时候完工',
        finalTime: '17:04',
        unread: '1'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})