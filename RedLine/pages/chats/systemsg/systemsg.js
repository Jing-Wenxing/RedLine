// pages/chats/systemsg/systemsg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messagesstyle: [{
        color: 'gray',
        icon: ''
      },
      {
        color: 'red',
        icon: 'cuIcon-likefill'
      },
      {
        color: 'orange',
        icon: 'cuIcon-noticefill'
      },
    ],
    messages: [{
        date: '今天',
        contents: [
          // 使用flag对于不同的系统消息进行分类
          // 0: 普通推送; 1: 关注消息; 2:重大公告;
          {
            flag: '2',
            title: '关于新功能上线的公告',
            text: '全新动态功能上线，可在首页使用该功能。',
            time: '11:00'
          },
          {
            flag: '0',
            title: '推送',
            text: '2020届毕业典礼暨学委授予仪式在林科大礼堂举行。',
            time: '9:46'
          }
        ]
      },
      {
        date: '昨天',
        contents: [{
          flag: '1',
          title: '关注',
          text: '你已成功关注『ATD计算机协会』圈子',
          time: '23:42'
        }]
      },
      {
        date:'07-09',
        contents:[
          {
            flag: '1',
            title: '加入',
            text: '你已成功加入『2018级计算机科学与技术一班』圈子',
            time: '18:26'
          },
          {
            flag: '0',
            title: '推送',
            text: '2020暑假预计放到9月12日',
            time: '15:14'
          }
        ]
      }
    ]
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