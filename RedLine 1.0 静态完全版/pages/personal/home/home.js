const app = getApp()
Page({
  data: {
    slideButtons: [{
      type: 'warn',
      text: '删除',
      extClass: 'test',
      src: '/page/weui/cell/icon_del.svg', // icon的路径
    }],
    personal: {
      userurl: 'https://pic.gksec.com/2020/07/08/79d1c6f44b144/9809a0604ca7bd0dbfbf1427e46d743e.jpg',
      username: '清欢挽歌',
      sex: '男',
      signature: '至味清欢，挽歌铃唱',
      group: '9'
    },
    // 测试数据
    messageLists: [{
        // 卡片编号
        "cid": '10001',
        "date": '2020-07-14',
        // 卡片风格
        // 0:图文卡片; 1:简历卡片; 2:文案卡片;
        "style": '0',
        // 用户数据
        "userurl": 'https://pic.gksec.com/2020/07/08/79d1c6f44b144/9809a0604ca7bd0dbfbf1427e46d743e.jpg',
        "username": '清欢挽歌',
        // 文案数据
        "imageurl": [{
          id: 0,
          url: 'https://pic.gksec.com/2020/07/16/7c1caa3e67c77/4e7d2fe1380ce2a1ef5c8ee99a36ee10.jpg'
        }, {
          id: 1,
          url: 'https://pic.gksec.com/2020/07/16/e6a54658b08d4/6f6247dd6fc649997d69fb9bfcce25a5.jpg',
        }, {
          id: 2,
          url: 'https://pic.gksec.com/2020/07/16/27b85fc4ff361/486aee64d32dc24b4ade47cdaa945793.jpg'
        }, {
          id: 3,
          url: 'https://pic.gksec.com/2020/07/16/a8385b0470000/ce6749e5db656ce3d272f0e9053c245b.jpg'
        }, {
          id: 4,
          url: 'https://pic.gksec.com/2020/07/16/7bf3be8ae1398/1eabd00434c0d46f3169eb875b212c1d.jpg'
        }, {
          id: 5,
          url: 'https://pic.gksec.com/2020/07/16/9925608a78dfb/61f5d6da5f1b4f0242a2f15fee479287.jpg'
        }],
        "title": '个性签名',
        "boxtext": '至味清欢，换歌铃唱'
      },
      {
        // 卡片编号
        "cid": '10002',
        "date": '2020-07-07',
        // 卡片风格
        // 0:图文卡片; 1:简历卡片; 2:文案卡片;
        "style": '1',
        "cardcolor": 'red',
        // 用户数据
        "userurl": 'https://pic.gksec.com/2020/07/08/79d1c6f44b144/9809a0604ca7bd0dbfbf1427e46d743e.jpg',
        "username": '清欢挽歌',
        // 文案数据
        "title": '个性签名',
        "boxtext": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
    ]
  },

  // detail跳转
  detailpage(e) {
    var data = e.currentTarget.dataset.smile;
    wx.navigateTo({
      url: '/pages/public/detail/detail?cid=' + data,
    })
  },

  // publish跳转
  publishpage(e) {
    wx.navigateTo({
      url: '/pages/personal/publish/publish',
    })
  },

  // publish跳转
  modificationpage(e) {
    wx.navigateTo({
      url: '/pages/personal/modification/modification',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
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