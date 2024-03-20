// page/details/details.js
Page({
  data:{
    goods: {
      id: 1,
      image: '/image/d1.jpg',
      image2: '/image/d1.jpg',
      image3: '/image/d1.jpg',
      image4: '/image/d1.jpg'
    },
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },
  onShareAppMessage: function () {
    return {
      title: '爬行者网络工作室',
      desc: '专注于网站建设与运营',
      path: "page/index/index",
    }
  },
})