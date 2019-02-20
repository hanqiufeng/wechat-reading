var postsData = require("../../data/posts-data.js")

Page({
  data: {
    images: [
      {src: "/images/wx.png"},
      {src: "/images/vr.png"},
      {src: "/images/iqiyi.png"}
    ],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true, // 是否自动切换
    interval: 5000, // 自动切换时间间隔
    duration: 500, //滑动动画时长
  },

  onLoad: function() {
    // this.data.post_key = postsData.postList
    // console.log(this.data.images)
    this.setData({
      post_key: postsData.postList
    });
  },
})