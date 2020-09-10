const app = getApp();

wx.cloud.init({
  env: 'minipro-4x4pl',
  traceUser: true,
})

Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    groupList: [],
  },
  searchIcon(e) {
    let key = e.detail.value.toLowerCase();
    let list = this.data.groupList;
    for (let i = 0; i < list.length; i++) {
      let a = key;
      let b = list[i].groupname.toLowerCase();
      if (b.search(a) != -1) {
        list[i].isShow = true
      } else {
        list[i].isShow = false
      }
    }
    this.setData({
      groupList: list
    })
  },
  /* ===== 自定义函数 ===== */
  // 关注状态改变
  /*
  lovechange(event) {
    console.log(this.data.groupList[event.target.dataset.index].love)
    console.log(event)
    var dates = 'groupList[' + event.target.dataset.index + '].love'

    this.setData({
      [dates]: !event.target.dataset.love,
    })

    console.log(this.data.groupList[event.target.dataset.index].love)

    // 后端逻辑
    // 两个函数
    // 删除用户表中，圈子数组的本圈子cid
    // 删除圈子表中，用户数组的用户标识uid
  },
  */
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
      name: 'circleService',
      data: {
        action:'getAllGroup',
      },
      success: function(res) {
        that.setData({
          groupList : res.result.data
        })
        wx.hideLoading()
      },
      fail: function(res){
        wx.hideLoading()
        wx.showToast({
          title: '获取失败，请重试',
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