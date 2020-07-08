Page({
    data: {
        InputBottom: 0,
        friend: '',
        myurl:'',
        friendurl:'',
        icon:'',
        iconstyle:'',
        messageLists: [{
                role: 'me',
                url: 'https://pic.gksec.com/2020/07/08/f3ad2e0c3b67f/n5m~__``u@uou`bu~_hdql4.jpg',
                text: '神仙你在干嘛',
                time: '17:59'
            },
            {
                role: 'friend',
                url: 'https://pic.gksec.com/2020/07/08/79d1c6f44b144/9809a0604ca7bd0dbfbf1427e46d743e.jpg',
                text: '没在干嘛',
                time: '18:00'
            }
        ]
    },
    onLoad: function (options) {
        this.setData({
            friend: options.title,
            myurl: options.myurl,
            friendurl: options.friendurl,
            icon: options.icon,
            iconstyle: options.iconstyle,
        })
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