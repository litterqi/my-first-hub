// page/details/details.js
Page({
  data:{
    goods: {
      id: 1,
      image: '/image/a1.jpg',
      image2: '/image/a2.jpg',
      image3: '/image/a3.jpg',
      image4: '/image/a4.jpg',
      title: '新鲜梨花带雨',
      price: 0.01,
      stock: '有货',
      detail: '这里是梨花带雨详情。',
      parameter: '125g/个',
      service: '不支持退货'
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