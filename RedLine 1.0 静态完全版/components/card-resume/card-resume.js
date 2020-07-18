Component({
  properties: {
     // 卡片编号
     cid: {
      type: String,
      default: ''
    },
    // 卡片风格
    // 0:图文卡片; 1:简历卡片; 2:文案卡片;
    style: {
      type: String,
      default: ''
    },
    cardcolor: {
      type: String,
      default: ''
    },
    // 用户数据
    userurl: {
      type: String,
      default: ''
    },
    username: {
      type: String,
      default: ''
    },
    // 信息
    grade: {
      type: String,
      default: ''
    },
    profession: {
      type: String,
      default: ''
    },
    class: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    company: {
      type: String,
      default: ''
    },
    introduction: {
      type: String,
      default: ''
    }
  },
  data: {

  },
  methods: {

  }
})