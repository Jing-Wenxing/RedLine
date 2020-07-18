// pages/groups/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    member: [{
        cid: '11001'
      },
      {
        cid: '11002'
      },
    ],
    groupList: [{
        iconname: '计',
        iconstyle: 'bg-red',
        name: '计算机科学与技术',
        cid: '11001',
        tags: [{
            tag_name: '1班',
            tag_color: 'blue',
          },
          {
            tag_name: '2018',
            tag_color: 'blue',
          },
          {
            tag_name: '信工院',
            tag_color: 'blue',
          }
        ],
      },
      {
        url: 'https://pic.gksec.com/2020/07/10/a275e42a5266c/logos.png',
        name: 'ATD 计算机协会',
        cid: '11002',
        tags: [{
            tag_name: '社团',
            tag_color: 'blue',
          },
          {
            tag_name: '学术科技类',
            tag_color: 'blue',
          },
        ],
      }
    ],
  },
  pagechangeall() {
    wx.navigateTo({
      url: '/pages/groups/all/all',
    })
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