const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    cid: '',
    name: '',
    groupcontent: {
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      people: [{
          name: '张三',
          isShow: true,
          uid: 'u10001',
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
        },
        {
          name: '李四',
          isShow: true,
          uid: 'u10002',
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
        },
        {
          name: '王五',
          isShow: true,
          uid: 'u10003',
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
        },
        {
          name: '赵六',
          isShow: true,
          uid: 'u10004',
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
        },
      ]
    }
  },
  searchIcon(e) {
    let key = e.detail.value.toLowerCase();
    let list = this.data.groupcontent.people;
    for (let i = 0; i < list.length; i++) {
      let a = key;
      let b = list[i].name.toLowerCase();
      if (b.search(a) != -1) {
        list[i].isShow = true
      } else {
        list[i].isShow = false
      }
    }
    var url = 'groupcontent.people'
    this.setData({
      [url]: list
    })
  },
  /* ===== 自定义函数 ===== */
  // 关注状态改变
  lovechange(event) {
    console.log(this.data.groupcontent.love)
    console.log(event)
    var dates = 'groupcontent.love'

    this.setData({
      [dates]: !event.target.dataset.love,
    })

    console.log(this.data.groupcontent.love)

    // 后端逻辑
    // 两个函数
    // 删除用户表中，圈子数组的本圈子cid
    // 删除圈子表中，用户数组的用户标识uid
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /* ===== 自定义函数 ===== */
    /* 1. 通过圈子cid，获取圈子的详细信息
    /* 2. 组装到data.groupcontent中
    /* ===================== */
    this.setData({
      cid: options.cid,
      name: options.name,
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