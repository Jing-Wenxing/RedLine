// pages/personal/workresume/workresume.js
var myDate = new Date()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    save: false,
    gradearray: [],
    classarray: ['1', '2', '3', '4', '5', '6', '7', '8', ],
    professionarray: ['国际经济与贸易', '金融学', '市场营销', '会计学', '法学', '人力资源管理', '旅游管理', '财务管理', '英语', '日语', '汉语言文学', '播音与主持艺术', '广播电视编导', '摄影', '视觉传达设计', '艺术设计', '环境设计', '工业设计', '产品设计', '园林', '风景园林', '电子信息工程', '计算机科学与技术', '软件工程', '土木工程', '物流工程', '食品科学与工程', '工程管理', ],
    psrsonal: {
      username: '清欢挽歌',
      signature: '至味清欢，挽歌铃唱',
      firstname: '长',
      lastname: '者',
      grade: '2018',
      profession: '计算机科学与技术',
      class: '1',
      phonenumber: '123456789',
      wxnumber: '123456789',
      qqnumber: '123456789',
      company: '深圳市腾讯计算机系统有限公司',
      area: ['湖南省', '长沙市', '芙蓉区'],
      resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
  },
  bindGradeChange: function (e) {
    var url = 'psrsonal.grade'
    this.setData({
      [url]: this.data.gradearray[e.detail.value]
    })
  },
  bindClassChange: function (e) {
    var url = 'psrsonal.class'
    this.setData({
      [url]: this.data.classarray[e.detail.value]
    })
  },
  bindProfessionChange: function (e) {
    var url = 'personal.profession'
    this.setData({
      [url]: this.data.professionarray[e.detail.value]
    })
  },
  bindAreaChange: function (e) {
    var url = 'psrsonal.area'
    this.setData({
      [url]: e.detail.value
    })
  },
  saveupdate() {
    // 示例保存
    wx.showLoading({
      title: '保存中...',
      mask: true
    });

    setTimeout(function () {
      wx.hideLoading()
    }, 500)

    /* 这里写后端上传代码 */

    this.setData({
      save: false,
    })
  },
  inputs(e) {
    let that = this;
    let value = e.detail.value;
    var str = e.currentTarget.dataset.name;
    that.setData({
      [str]: value,
      save: true
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取年份列表
    var year = myDate.getFullYear();
    var gradearray = []

    for (let int = 2002; int <= year; int++) {
      gradearray.push(int.toString())
    }

    this.setData({
      title: options.title,
      gradearray: gradearray,
    });
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