//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    PageCur: 'home',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
  },
  // 导航切换函数
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  }
})