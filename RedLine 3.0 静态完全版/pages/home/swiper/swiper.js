const app = getApp();
Page({
  data: {
    cardCur: 0,
    swiperList: [{
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        love: true,
        cid: '10002',
        avatarurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg',
        groupname: '计算机科学与技术',
        grouptag: [{
            tagtext: '信工院'
          },
          {
            tagtext: '2018级'
          },
          {
            tagtext: '2班'
          },
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
    ],
  },
  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可

    /* ===== 自定义函数 ===== */
    /* 1. 通过用户uid获取该用户下的所有圈子cid
    /* 2. 根据cid数组，再次获取圈子的详细信息
    /* 3. 组装到data.swiperList中
    /* ===================== */
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  /* ===== 自定义函数 ===== */
  // 关注状态改变
  lovechange(event) {
    console.log(this.data.swiperList[event.target.dataset.index].love)
    console.log(event)
    var dates = 'swiperList[' + event.target.dataset.index + '].love'

    this.setData({
      [dates]: !event.target.dataset.love,
    })

    console.log(this.data.swiperList[event.target.dataset.index].love)

    // 后端逻辑
    // 两个函数
    // 删除用户表中，圈子数组的本圈子cid
    // 删除圈子表中，用户数组的用户标识uid
  },
})