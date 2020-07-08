Page({
    data: {
        // tab切换  
        currentTab: 0,
        navbarInitTop: 0, //导航栏初始化距顶部的距离
        isFixedTop: false //是否固定顶部
    },
    swichNav: function (e) {
        console.log(e);
        var that = this;
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current,
            })
        }
    },
    swiperChange: function (e) {
        console.log(e);
        this.setData({
            currentTab: e.detail.current,
        })
    },
    onShareAppMessage: function () {
        // 用户点击右上角分享
        return {
            title: 'title', // 分享标题
            desc: 'desc', // 分享描述
            path: 'path' // 分享路径
        }
    }
})