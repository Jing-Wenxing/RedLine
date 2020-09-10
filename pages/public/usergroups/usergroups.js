// pages/public/usergroups/usergroups.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groups : [],
    uid: '',
    groupList: [
      {
        isShow: true,
        avatarurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg',
        groupname: '计算机科学与技术',
        grouptag: ['信工院'],
        description: ''
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.uid)
    this.setData({
      uid: options.uid
    })

    wx.showLoading({
      title: '加载中',
      mask: true
    });
    var that = this;
    
    wx.cloud.callFunction({
      name: 'profileService',
      data: {
        action:'getOtherProfile',
        oid: options.uid
      },
      success: function(res) {
        console.log(res.result.data[0].group)
        that.setData({
          groups : res.result.data[0].group
        })
      },
      fail: function(res){
        wx.hideLoading()
        wx.showToast({
          title: '获取失败，请重试',
          icon: 'none',
          duration: 1000
        })
        console.log(res)
      }
    })
  
    wx.cloud.callFunction({
      name: 'circleService',
      data: {
        action:'getGroupById',
        idList: that.data.groups
      },
      success: function(res) {
        console.log(res)
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