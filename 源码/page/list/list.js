// page/component/list/list.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
  ,
  onShareAppMessage: function () {
    return {
      title: '爬行者网络工作室',
      desc: '专注于网站建设与运营',
      path: "page/list/list",
    }
  }	
})