// pages/home/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: '',
    searchkey: '',
    userList: [],
    groupList: [],
    localUserList:[]
    /*
    userList: [{
      avatarurl: '',
      firstname: '何',
      area: ['湖南省', '长沙市', '芙蓉区'],
      profession: '计算机科学与技术',
      grade: '15',
    }],
    groupList: [{
      avatarurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg',
      groupname: '计算机科学与技术',
      grouptag: ['信工院'],
      description: ''
    }],
    */
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    var that = this
    var key = options.searchvalue
    var city = options.city
    this.setData({
      city: options.city,
      searchkey: options.searchvalue
    })
    
      wx.cloud.callFunction({
        name: 'profileService',
        data: {
          action: 'searchUserByCity',
          key : city
        },
        success: function(res) {
          var localUserLi = res['result']['data']
          that.setData({
            localUserList:localUserLi
          })
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

    //获取用户搜索结果
    wx.cloud.callFunction({
      name: 'profileService',
      data: {
        action: 'searchUser',
        key : key
      },
      success: function(res) {
        var userLi = res['result']['data']
        that.setData({
          userList : userLi
        })
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

    //获取圈子搜索结果
    wx.cloud.callFunction({
      name: 'circleService',
      data: {
        action: 'searchGroup',
        key : key
      },
      success: function(res) {
        var groupLi = res['result']['data']
        that.setData({
          groupList: groupLi,
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