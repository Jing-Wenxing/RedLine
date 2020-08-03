//index.js
//获取应用实例
const app = getApp()
var myDate = new Date()

Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false,
    PageCur: 'home',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    save: false,
    gradearray: [],
    classarray: ['1', '2', '3', '4', '5', '6', '7', '8', ],
    psrsonal: {
      username: '',
      firstname: '',
      lastname: '',
      grade: '',
      profession: '',
      class: '',
      area: '',

      // username: '清欢挽歌',
      // firstname: '长',
      // lastname: '者',
      // grade: '2018',
      // profession: '计算机科学与技术',
      // class: '1',
      // area: ['湖南省', '长沙市', '芙蓉区'],
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
  onLoad: function () {
    var that = this;
    // 获取年份列表
    var year = myDate.getFullYear();
    var gradearray = []

    for (let int = 2002; int <= year; int++) {
      gradearray.push(int.toString())
    }

    console.log(gradearray)
    that.setData({
      gradearray: gradearray,
    });

    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
              // 根据自己的需求有其他操作再补充
              // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
              wx.login({
                success: res => {
                  // 获取到用户的 code 之后：res.code
                  console.log("用户的code:" + res.code);
                  // 后端锅
                }
              });
            }
          });
        } else {
          // 用户没有授权
          // 改变 isHide 的值，显示授权页面
          that.setData({
            isHide: true
          });
        }
      }
    });
  },

  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      that.setData({
        isHide: false
      });
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  },
  // 导航切换函数
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  }
})