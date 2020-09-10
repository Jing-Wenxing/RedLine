// pages/personal/modification/modification.js
wx.cloud.init({
  env: 'minipro-4x4pl',
  traceUser: true,
})

Page({

  /**
   * 页面的初始数据
   */
  data: {
    psrsonal: {
      username: '',
      firstname: '',
      lastname: '',
      grade: '',
      profession: '',
      class: '',
      phonenumber: '',
      wxnumber: '',
      qqnumber: '',
      company: '',
      area: [],
      resume: '',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    var that = this;
    wx.cloud.callFunction({
      name: 'profileService',
      data: {
        action:'getProfile',
      },
      success: function(res) {
        that.setData({
          psrsonal : res.result.data[0]
        })
        wx.hideLoading()
      },
      fail: function(res){
        wx.hideLoading()
        wx.showToast({
          title: '提交失败，请重试',
          icon: 'none',
          duration: 1000
        })
      }
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
    this.onLoad()
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