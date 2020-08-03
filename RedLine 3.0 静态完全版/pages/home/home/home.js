const app = getApp();
Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    searchvalue: '',
    customItem: '',
    // 地址值
    area: ['湖南省', '长沙市', '芙蓉区'],
  },
  // 搜索页切换函数
  pagechangesearch() {
    let that = this;
    let searchvalue = that.data.searchvalue;

    if (searchvalue != '') {
      wx.navigateTo({
        url: '/pages/home/search/search?searchvalue=' + searchvalue,
      })
    }
  },
  // 搜索值确定
  updatesearchvalue(e) {
    let that = this;
    that.setData({
      searchvalue: e.detail.value,
    })
  },
  // 地址切换函数
  bindAreaChange: function (e) {
    this.setData({
      area: e.detail.value
    })

    // 后端代码
    // 上传改变地域的值
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