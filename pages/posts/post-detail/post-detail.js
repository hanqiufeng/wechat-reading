var postsData = require("../../../data/posts-data.js")

Page({
  data: {
    currentPostId:'',
    // postData:{},
    // collect: false,
  },

  onLoad: function(options) {
    var postId = options.id;
    this.data.currentPostId = postId;
    var postData = postsData.postList[postId];

    this.setData({
      postData: postData
    })
    // this.data.postData = postData;

    var postsCollected = wx.getStorageSync('posts_collected');
    var postsShare = wx.getStorageSync('posts_share');
    if (postsCollected && postsShare) {
      var postCollected = postsCollected[postId];
      var postShare = postsShare[postId];
      this.setData({
        collected: postCollected,
        share: postShare,
      })
    }else{
      var postsCollected = {};
      var postsShare = {};
      postsCollected[postId] = false;
      postsShare[postId] = false;
      wx.setStorageSync('posts_collected', postsCollected);
      wx.setStorageSync('posts_share', postsShare);
    }
  },

  onCollectTap: function(event){
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[this.data.currentPostId];
    // 收藏变为未收藏 未收藏变为收藏
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    // 更新文章收藏状态
    wx.setStorageSync('posts_collected', postsCollected)
    // 更新数据绑定
    this.setData({
      collected:postCollected
    })
  },

  onShareTap:function(event){
    var postsShare = wx.getStorageSync('posts_share');
    var postShare = postsShare[this.data.currentPostId];
    postShare = !postShare;
    postsShare[this.data.currentPostId] = postShare;
    wx.setStorageSync('posts_share', postsShare);
    this.setData({
      share: postShare
    })
  },

})