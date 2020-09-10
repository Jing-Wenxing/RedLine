const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    name: '',
    options:null,
    mygroup:[],
    love : false,
    groupcontent: {
      avatarurl: '',
      groupname: '',
      grouptag: [],
      description: ' ',
      member: []
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
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    var that = this
    var pageName = this.data['name']
    var dates = 'groupcontent.love'
    this.setData({
      [dates]: !event.target.dataset.love,
    })

    //console.log(this.data.love)

    // 后端逻辑
    // 两个函数
    // 删除用户表中，圈子数组的本圈子cid
    // 删除圈子表中，用户数组的用户标识uid
    
    var groupName = this.data.name
    //判断是否已关注,已关注add为0,将执行取消关注操作
    var add = this.data.love?0:1

    wx.cloud.callFunction({
      name: 'profileService',
      data: {
        action:'getProfile'
      },
      success: function(res) {
        var users = res['result']['data'][0]
        var groupData = users['group']
        var userId = users['_id']
        var userOpenId = users['_openid']
        var userName = users['firstname'] + users['lastname']

        wx.cloud.callFunction({
          name: 'circleService',
          data: {
            action :'currentGroup',
            name : groupName
          },
          success: function(res) {
            //console.log(res['result']['data'][0]['member'])
            var groups = res['result']['data'][0]
            var groupMember = res['result']['data'][0]['member']
            var groupId = res['result']['data'][0]['_id']
            //console.log(groupId)
            if(add==0){
              //用户关注列表删除
              for(var i=0;i<groupData.length;i++){
                if(groupData[i]['groupname'] == groupName){
                  groupData.splice(i,1)
                  break
                }
              }
              //圈子用户列表删除
              for(var j=0;j<groupMember.length;j++){
                if(groupMember[j]['_openid'] == userOpenId){
                  groupMember.splice(j,1)
                  break
                }
              }
              wx.cloud.callFunction({
                name: 'circleService',
                data: {
                  action : 'switchStatus',
                  user_id : userId,
                  uGroup : groupData,
                  group_id : groupId,
                  member : groupMember
                },
                success: function(res) {
                  //console.log(res)
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
            else if(add == 1){
              var newGroupData = groups
              delete newGroupData['member']
              delete newGroupData['isShow']
              groupData.push(newGroupData)
              //console.log(groupData)

              var newMember = {}
              newMember['name'] = userName
              newMember['_openid'] = userOpenId
              groupMember.push(newMember)

              wx.cloud.callFunction({
                name: 'circleService',
                data: {
                  action:'switchStatus',
                  uGroup : groupData,
                  user_id : userId,
                  group_id : groupId,
                  member : groupMember
                },
                success: function(res) {
                  //console.log(res)
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
            groups['member'] = groupMember
            that.setData({
              groupcontent:groups
            })
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

    if(add == 1){
      this.setData({
        love: true
      })
    }
    else if(add == 0){
      this.setData({
        love: false
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    /* ===== 自定义函数 ===== */
    /* 1. 通过圈子cid，获取圈子的详细信息
    /* 2. 组装到data.groupcontent中
    /* ===================== */

    this.setData({
      name: options.name,
      options:options,
    })
    //console.log(this.data.name)

    wx.cloud.callFunction({
      name: 'profileService',
      data: {
        action:'getProfile',
      },
      success: function(res) {
        for(var i in res.result.data[0]['group']){
            if(that.data.name == res.result.data[0]['group'][i]['groupname']){
              that.setData({
                love :  true
              })
            }
        }
        that.setData({
          mygroup :  res.result.data[0].group
        })
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

    wx.cloud.callFunction({
      name: 'circleService',
      data: {
        action:'currentGroup',
        name : this.data.name
      },
      success: function(res) {
        that.setData({
          groupcontent : res.result.data[0]
        })
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
        wx.cloud.callFunction({
          name: 'profileService',
          data: {
            action:'getProfile',
          },
          success: function(res) {
            for(var i in res.result.data[0].group){
                if(that.data.name == i['groupname']){
                  that.setData({
                    love :  true
                  })
                }
            }
            that.setData({
              mygroup :  res.result.data[0].group
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