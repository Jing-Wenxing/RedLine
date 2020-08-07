// pages/public/userprofile/userprofile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid: '',
    psrsonal: {
      sex: '男',
      signature: '至味清欢，挽歌铃唱',
      firstname: '长',
      lastname: '者',
      grade: '15',
      profession: '计算机科学与技术',
      class: '1',
      phonenumber: '123456789',
      wxnumber: '123456789',
      qqnumber: '123456789',
      company: '深圳市腾讯计算机系统有限公司',
      area: '广州 深圳',
      resume: '我是垃圾',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.uid)
    this.setData({
      uid: options.uid
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

  }
})