const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    cid: '',
    name: '',
    people: [{
        name: '张三',
        isShow: true,
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
      },
      {
        name: '李四',
        isShow: true,
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
      },
      {
        name: '王五',
        isShow: true,
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
      },
      {
        name: '赵六',
        isShow: true,
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
      },
    ],
  },
  searchIcon(e) {
    let key = e.detail.value.toLowerCase();
    let list = this.data.people;
    for (let i = 0; i < list.length; i++) {
      let a = key;
      let b = list[i].name.toLowerCase();
      if (b.search(a) != -1) {
        list[i].isShow = true
      } else {
        list[i].isShow = false
      }
    }
    this.setData({
      people: list
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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