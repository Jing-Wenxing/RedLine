//index.js
//获取应用实例
const app = getApp()
var myDate = new Date()

//定位服务
var QQMapWX = require('../../lib/qqmap-wx-jssdk.js');

var qqmapsdk = new QQMapWX({
  key:'FDEBZ-N6B66-LGYSC-M23JB-7N3AT-4NFSP'
});

wx.cloud.init({
  env: 'minipro-4x4pl',
  traceUser: true,
})

Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false,
    isform: true,
    PageCur: 'home',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    save: false,
    gradearray: [],
    classarray: ['1', '2', '3', '4', '5', '6', '7', '8'],
    professionarray: ['国际经济与贸易', '金融学', '市场营销', '会计学', '法学', '人力资源管理', '旅游管理', '财务管理', '英语', '日语', '汉语言文学', '播音与主持艺术', '广播电视编导', '摄影', '视觉传达设计', '艺术设计', '环境设计', '工业设计', '产品设计', '园林', '风景园林', '电子信息工程', '计算机科学与技术', '软件工程', '土木工程', '物流工程', '食品科学与工程', '工程管理', ],
    personal: {
       username: '',
       firstname: '',
       lastname: '',
       fullname:'',
       grade: '',
       profession: '',
       class: '',
       area: [],
       city: '',
       group: []
    },
    searchvalue: '',
    customItem: '',
    // 地址值
    area: ['', '选择城市', ''],
    cardCur: 0,
    swiperList: [],
  },
  bindGradeChange: function (e) {
    var url = 'personal.grade'
    this.setData({
      [url]: this.data.gradearray[e.detail.value]
    })
  },
  bindClassChange: function (e) {
    var url = 'personal.class'
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
  bindAreaChange0: function (e) {
    var url = 'personal.area'
    this.setData({
      [url]: e.detail.value
    })
  },
  saveupdate() {
    let that = this;
    var isComplete = true;
    var form = this.data.personal;

    //检测表单是否完整填写
    for(var i in form){
      if(i=="fullname"){
        continue
      }
      if(i=="city"){
        continue
      }
      if((typeof form[i]) == 'object' && JSON.stringify(form[i]) == "{}"){
        isComplete = false
      }
      if((typeof form[i]) == 'string' && form[i] == ""){
        isComplete = false
      }
    }
    if(!isComplete){
      wx.showToast({
        title: '请完整填写资料',
        icon: 'none',
        duration: 1500
      })
    }
    if(isComplete){
      // 保存
      wx.showLoading({
        title: '保存中',
        mask: true
      });

      form['fullname'] = form['firstname'] + form['lastname']
      form['city'] = form['area'][1]
      wx.cloud.callFunction({
        name: 'profileService',
        data: {
          action:'addProfile',
          addData: form
        },
        success: function(res) {
          wx.hideLoading()
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 1000
          })
          that.setData({
            isform: false
          })
        },
        fail: function(res){
          wx.hideLoading()
          wx.showToast({
            title: '提交失败，请重试',
            icon: 'none',
            duration: 1000
          })
        }
      })

    }
    
  },
  inputs(e) {
    let value = e.detail.value;
    var str = e.currentTarget.dataset.name;
    this.setData({
      [str]: value,
      save: true
    });
  },
  onLoad: function () {
    var that = this;
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    // 获取年份列表
    var year = myDate.getFullYear();
    var gradearray = []
    for (let i = year; i >= 2002; i--) {
      gradearray.push(i.toString())
    }

    var swiperLists = []

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
                  //console.log("用户的code:" + res.code);
                  // 后端锅
                }
              });
            }
          });
        } else {
          // 用户没有授权
          // 改变 isHide 的值，显示授权页面
          this.setData({
            isHide: true
          });
        }
      }
    });
    //是否填写过资料
    wx.cloud.callFunction({
      name: 'profileService',
      data: {
        action:'getProfile',
      },
      success: function(res) {
        that.setData({
          isform : (res.result.data[0] == null)
        })
        if(res.result.data[0] != null){
          wx.cloud.callFunction({
            name: 'profileService',
            data: {
              action:'getProfile',
            },
            success: function(res) {
              that.setData({
                swiperList :  res.result.data[0].group
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

        }

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


    this.setData({
      gradearray: gradearray,
      swiperList: swiperLists,
    });

    //定位信息
    var _this = this;
    qqmapsdk.reverseGeocoder({
      success: function(res) {//成功后的回调
        _this.setData({
          city :res.result.address_component.city
          })
        console.log(res);
      },
      fail: function(error) {
        _this.setData({
          city:'位置获取失败'
      })
        console.error(error);
      },
      complete: function(res) {
        //console.log(res);
      }
    })
  },

  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      this.setData({
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
  },

  // 搜索页切换函数
  pagechangesearch() {
    let searchvalue = this.data.searchvalue;
    if (searchvalue != '') {
      wx.navigateTo({
        url: '/pages/home/search/search?searchvalue=' + searchvalue + '&city=' + this.data.city,
      })
    }
    else{
      wx.showToast({
        title: '请填写要搜索的内容',
        icon: 'none',
        duration: 1000
      })
    }

  },
  // 搜索值确定
  updatesearchvalue(e) {
    
    this.setData({
      searchvalue: e.detail.value,
    })
  },
  // 地址切换函数
  bindAreaChange: function (e) {
    this.setData({
      area: e.detail.value,
      city: e.detail.value[1]
    })

    // 后端代码
    // 上传改变地域的值
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      this.onLoad()
  }
  /* ===== 自定义函数 ===== */
  // 关注状态改变
  /*
  lovechange(event) {
    console.log(this.data.swiperList[event.target.dataset.index].love)
    console.log(event)
    var dates = 'swiperList[' + event.target.dataset.index + '].love'

    this.setData({
      [dates]: !event.target.dataset.love,
    })

    console.log(this.data.swiperList[event.target.dataset.index].love)
  },
  */
})