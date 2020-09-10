// pages/personal/workresume/workresume.js
wx.cloud.init({
  env: 'minipro-4x4pl',
  traceUser: true,
})
var myDate = new Date()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    save: true,
    gradearray: [],
    classarray: ['1', '2', '3', '4', '5', '6', '7', '8', ],
    professionarray: ['国际经济与贸易', '金融学', '市场营销', '会计学', '法学', '人力资源管理', '旅游管理', '财务管理', '英语', '日语', '汉语言文学', '播音与主持艺术', '广播电视编导', '摄影', '视觉传达设计', '艺术设计', '环境设计', '工业设计', '产品设计', '园林', '风景园林', '电子信息工程', '计算机科学与技术', '软件工程', '土木工程', '物流工程', '食品科学与工程', '工程管理', ],
    psrsonal: {
      username: '',
      signature: '',
      firstname: '',
      lastname: '',
      grade: '',
      profession: '',
      class: '',
      phonenumber: '',
      wxnumber: '',
      qqnumber: '',
      company: '',
      area: [],
      resume: '',
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
    var form = this.data.psrsonal
    var id =  form._id
    var verify = true
    wx.showLoading({
      title: '保存中',
      mask: true
    });

    form['city'] = form['area'][1]
    if(form['phonenumber'] != null && form['phonenumber'].length != 11){
      wx.showToast({
        title: '手机号应为11位',
        icon: 'none',
        duration: 1000
      })
      verify = false
    }

    if(verify){
      delete form._id;
      wx.cloud.callFunction({
        name: 'profileService',
        data: {
          action:'setProfile',
          Collectionid: id,
          updateData: form
        },
        success: function(res) {
          wx.hideLoading()
          console.log(res)
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 1000
          })
        },
        fail: function(res){
          wx.hideLoading()
          wx.showToast({
            title: '提交失败',
            icon: 'none',
            duration: 1000
          })
        }
      })
      this.setData({
        save: false,
      })
    }

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
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    var that = this;
    wx.cloud.callFunction({
      name: 'profileService',
      data: {
        action:'getProfile',
      },
      success: function(res) {
        that.setData({
          psrsonal : res.result.data[0]
        })
        wx.hideLoading()
      },
      fail: function(res){
        wx.hideLoading()
        wx.showToast({
          title: '获取失败，请重试',
          icon: 'none',
          duration: 1000
        })
      }
    })

    // 获取年份列表
    var year = myDate.getFullYear();
    var gradearray = []

    for (let i = year; i >= 2002; i--) {
      gradearray.push(i.toString())
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