// pages/home/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchcontent: '',
    // 测试数据
    messageLists: [{
        // 卡片编号
        "cid": '10001',
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
        // 卡片风格
        // 0:图文卡片; 1:简历卡片; 2:文案卡片;
        "style": '1',
        "cardcolor": 'red',
        // 用户数据
        "userurl": 'https://pic.gksec.com/2020/07/08/79d1c6f44b144/9809a0604ca7bd0dbfbf1427e46d743e.jpg',
        "username": '清欢挽歌',
        // 文案数据
        "title": '个性签名',
        "boxtext": '至味清欢，换歌铃唱'
      },
      {
        // 卡片编号
        "cid": '10003',
        // 卡片风格
        // 0:图文卡片; 1:简历卡片; 2:文案卡片;
        "style": '2',
        "cardcolor": 'white',
        // 用户数据
        "userurl": 'https://pic.gksec.com/2020/07/08/79d1c6f44b144/9809a0604ca7bd0dbfbf1427e46d743e.jpg',
        "username": '清欢挽歌',
        // 文案数据
        "grade": '15',
        "profession": '计算机科学与技术',
        "class": '1',
        "name": '冯',
        "company": '深圳市腾讯计算机系统有限公司',
        "introduction": '男，共青团员。精通PHP。'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      searchcontent: options.searchvalue
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