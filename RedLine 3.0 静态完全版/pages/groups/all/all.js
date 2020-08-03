const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    groupList: [{
        love: true,
        cid: '10001',
        isShow: true,
        avatarurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg',
        groupname: '计算机科学与技术',
        grouptag: [{
            tagtext: '信工院'
          },
          {
            tagtext: '2018级'
          },
          {
            tagtext: '1班'
          },
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        love: true,
        cid: '10002',
        isShow: true,
        avatarurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg',
        groupname: '计算机科学与技术',
        grouptag: [{
            tagtext: '信工院'
          },
          {
            tagtext: '2018级'
          },
          {
            tagtext: '2班'
          },
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
    ],
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