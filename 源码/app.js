App({
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  onShareAppMessage: function () {
    return {
      title: '蓝子0410网络科技',
      desc: '专注于网站建设与运营',
      path: "page/index",
    }
  },
  globalData: {
    hasLogin: false
  }
})
