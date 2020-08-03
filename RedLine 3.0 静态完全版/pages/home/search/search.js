// pages/home/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchkey: '',
    searchcontent: {
      userList: [{
        uid: 'u10233',
        avatarurl: 'https://pic.gksec.com/2020/07/08/561775df28517/1234d5df46sdf.jpg',
        username: '清欢挽歌',
        firstname: '何',
        area: ['湖南省', '长沙市', '芙蓉区'],
        profession: '计算机科学与技术',
        grade: '15',
      }],
      groupList: [{
        love: true,
        cid: '10001',
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
      }, {
        love: true,
        cid: '10002',
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
      }]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      searchkey: options.searchvalue
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