var postsData = require("../../data/posts-data.js")

Page({
  data: {
    images: [
      { src: "/images/wx.png", postId:"3"},
      { src: "/images/vr.png", postId: "4"},
      { src: "/images/iqiyi.png", postId: "5"}
    ],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true, // 是否自动切换
    interval: 5000, // 自动切换时间间隔
    duration: 500, //滑动动画时长
  },

  onLoad: function() {
    // 如果在onLoad方法中，不是异步的去执行一个数据绑定
    // 则不需要使用this.setData方法
    // 只需要对this.data赋值即可实现数据绑定
    // this.data.post_key = postsData.postList
    // console.log(this.data.images)
    this.setData({
      post_key: postsData.postList
    });
  },

  onImageTap:function(event){
    console.log(event);
    return;
    var postId = event.currentTarget.dataset.postid;
    // console.log(postId);
    wx.navigateTo({
      url: './post-detail/post-detail?id=' + postId
    })
  },

  onpostTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    // console.log(postId);
    wx.navigateTo({
      url: './post-detail/post-detail?id='+postId
    })
  },
})