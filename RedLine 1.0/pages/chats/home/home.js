const app = getApp();
Page({
    data: {
        myurl:'https://pic.gksec.com/2020/07/08/79d1c6f44b144/9809a0604ca7bd0dbfbf1427e46d743e.jpg',
        iconList: [{
            icon: 'likefill',
            color: 'red',
            badge: 0,
            name: '关注'
        }, {
            icon: 'discoverfill',
            color: 'blue',
            badge: 0,
            name: '发现'
        }, {
            icon: 'noticefill',
            color: 'orange',
            badge: 22,
            name: '通知'
        }],
        messageList: [{
            icon: 'noticefill',
            iconstyle: 'bg-red',
            name: '系统消息',
            message: '关于新功能上线的公告',
            finalTime: '17:20',
            unread: '1'
        }, {
            url: 'https://pic.gksec.com/2020/07/08/f3ad2e0c3b67f/n5m~__``u@uou`bu~_hdql4.jpg',
            name: '清欢挽歌',
            message: '神仙时候完工',
            finalTime: '17:04',
            unread: '1'
        }],
        gridCol: 3,
        skin: false
    },
    InputFocus(e) {
        this.setData({
            InputBottom: e.detail.height
        })
    },
    InputBlur(e) {
        this.setData({
            InputBottom: 0
        })
    }
})