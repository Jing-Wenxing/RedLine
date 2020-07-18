Page({
  data: {
    files: [
      //   {
      //     url: 'https://pic.gksec.com/2020/07/08/79d1c6f44b144/9809a0604ca7bd0dbfbf1427e46d743e.jpg',
      // }
    ],
    min: 0,
    max: 200,
    currentWordNumber: '',
    // cardstyle.style: 0,
    cardstyle: {
      style: 0,
      cardcolor: 'white',
    },
    ColorList: [{
        title: '嫣红',
        name: 'red',
        color: '#e54d42'
      },
      {
        title: '桔橙',
        name: 'orange',
        color: '#f37b1d'
      },
      {
        title: '明黄',
        name: 'yellow',
        color: '#fbbd08'
      },
      {
        title: '橄榄',
        name: 'olive',
        color: '#8dc63f'
      },
      {
        title: '海蓝',
        name: 'blue',
        color: '#0081ff'
      },
      {
        title: '纯色',
        name: 'white',
        color: '#ffffff'
      },
    ]
  },
  onLoad() {
    this.setData({
      selectFile: this.selectFile.bind(this),
      uplaodFile: this.uplaodFile.bind(this)
    })
  },
  // 卡片切换 
  tabSelect(e) {
    var str = 'cardstyle.style';
    this.setData({
      [str]: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  // 颜色切换
  colorchange(e) {
    var str = 'cardstyle.cardcolor';
    this.setData({
      [str]: e.currentTarget.dataset.smile,
    })
  },
  inputs(e) {
    var value = e.detail.value;
    var len = parseInt(value.length);
    if (len > this.data.max) return;

    this.setData({
      currentWordNumber: len
    });
    if (this.data.currentWordNumber == 200) {
      wx.showModal({
        title: '提示',
        content: '您输入的次数已达上限',
      })
    }
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  selectFile(files) {
    console.log('files', files)
    // 返回false可以阻止某次文件上传
  },
  uplaodFile(files) {
    console.log('upload files', files)
    // 文件上传的函数，返回一个promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('some error')
      }, 1000)
    })
  },
  uploadError(e) {
    console.log('upload error', e.detail)
  },
  uploadSuccess(e) {
    console.log('upload success', e.detail)
  }
});