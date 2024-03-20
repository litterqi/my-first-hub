// page/details/details.js
Page({
  data:{
    goods: {
      id: 1,
      image: '/image/b1.jpg',
      image2: '/image/b2.jpg',
      image3: '/image/b3.jpg',
      image4: '/image/b4.jpg'
    },
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },
   teltoUs:function(){
	   wx.makePhoneCall({
			phoneNumber: '1340000' //仅为示例，并非真实的电话号码
		})
   }	
})