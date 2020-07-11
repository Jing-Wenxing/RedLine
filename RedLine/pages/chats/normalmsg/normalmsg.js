// pages/chats/normalmsg/normalmsg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    InputBottom: 0,
    messagetitle: '',
    myurl: '',
    friendurl: '',
    messageLists: [{
        role: 'me',
        text: '神仙你在干嘛',
        time: '17:59'
      },
      {
        role: 'friend',
        text: '没在干嘛',
        time: '18:00'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      messagetitle: options.title,
      myurl: options.myurl,
      friendurl: options.friendurl,
    })
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

  },

  InputFocus(e) {
    this.setData({
      InputBottom: e.detail.height
    })
  },
  InputBlur(e) {
    this.setData({
      InputBottom: 0
    })
  }
})