// page/new-pages/user/user.js
Page({
  data:{
	latitude: 25.060327,
    longitude: 116.410711,
	covers: [{
      latitude: 25.060327,
      longitude: 116.410711,
    }],
	markers: [{
      latitude: 25.060327,
	  longitude: 116.410711,

    }],
	accuracy: 16,
    thumb:'',
    nickname:'',
    orders:[{id:1,name:'新鲜芹菜 半斤',number:'2017080121821',thumb:'/image/s5.jpg',count:4,money:0.04,status:'待支付'},
        {id:2,name:'新鲜芹菜 半斤',number:'2017080121822',thumb:'/image/s6.jpg',count:1,money:0.03,status:'待支付'}],
    hasAddress:false,
    address:{}
  },
  onLoad(){
   
  },
  onShow(){
    
  },
  //http://lbs.qq.com/tool/getpoint/ 坐标拾取器
  click: function (e) {
    wx.openLocation({
      latitude: 23.107094,
      longitude: 113.321185,
      scale: 18,
      name: '起航网络工作室',
      address: '广东省广州市越秀区S2芳村-广州塔航线'
    })
  },
  teltoUs:function(){
	   wx.makePhoneCall({
			phoneNumber: '18664369878' //仅为示例，并非真实的电话号码
		})
   },
  onShareAppMessage: function () {
    return {
      title: '爬行者网络工作室',
      desc: '专注于网站建设与运营',
      path: "page/index/index",
    }
  }	
  
})