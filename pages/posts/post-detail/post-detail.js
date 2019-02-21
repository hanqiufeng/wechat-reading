var postsData = require("../../../data/posts-data.js")

Page({
  data: {
    currentPostId: '',
    isPlayingMusic: false,
    // postData:{},
    // collect: false,
  },

  onLoad: function(options) {
    var postId = options.id;
    this.data.currentPostId = postId;

    var postData = postsData.postList[this.data.currentPostId];
    this.setData({
      postData: postData
    })
    // this.data.postData = postData;

    var postsCollected = wx.getStorageSync('posts_collected');
    var postsShare = wx.getStorageSync('posts_share');
    if (postsCollected && postsShare) {
      var postCollected = postsCollected[postId];
      var postShare = postsShare[postId];
      postCollected = false;
      postShare = false;
      this.setData({
        collected: postCollected,
        share: postShare,
      })
    } else {
      var postsCollected = {};
      var postsShare = {};
      postsCollected[postId] = false;
      postsShare[postId] = false;
      wx.setStorageSync('posts_collected', postsCollected);
      wx.setStorageSync('posts_share', postsShare);
    }
  },

  onCollectTap: function(event) {
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[this.data.currentPostId];
    // 收藏变为未收藏 未收藏变为收藏
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    // 更新文章收藏状态
    wx.setStorageSync('posts_collected', postsCollected)
    // 更新数据绑定
    this.setData({
      collected: postCollected
    })
    wx.showToast({
      title: postCollected ? '已收藏' : '取消收藏',
      icon: postCollected ? 'success' : 'none',
      duration: 1000,
      mask: true,
    })
  },

  onShareTap: function(event) {
    var postsShare = wx.getStorageSync('posts_share');
    var postShare = postsShare[this.data.currentPostId];
    postShare = !postShare;
    postsShare[this.data.currentPostId] = postShare;

    this.showModal(postShare, postsShare);

    // wx.setStorageSync('posts_share', postsShare);
    // this.setData({
    //   share: postShare
    // })
    // wx.showToast({
    //   title: postShare ? '已分享' : '取消分享',
    //   icon: postShare ? 'success' : 'none',
    //   duration: 1000,
    //   mask: true,
    // })
    // wx.showModal({
    //   title: '分享',
    //   content: '是否分享该文章',
    //   cancelText:"取消分享",
    //   cancelColor:'#333',
    //   confirmText:"分享",
    //   confirmColor:"#405f80",
    // })


    // var itemList=[
    //   "分享到微信好友",
    //   "分享到朋友圈",
    //   "分享到QQ",
    //   "分享到微博",
    // ];
    // wx.showActionSheet({
    //   itemList: itemList,
    //   itemColor:"#405f80",
    //   success:function(res){
    //     // res.errMsg 用户是否点击取消按钮
    //     // res.tapIndex 数组元素的序号，从零开始
    //     wx.showModal({
    //       title: '用户' + itemList[res.tapIndex],
    //       content: "用户是否取消？" + res.errMsg+'暂时无法实现分享',
    //     })
    //   },
    // })
  },

  showToast: function() {
    wx.setStorageSync('posts_share', postsShare);
    this.setData({
      share: postShare
    })
    wx.showToast({
      title: postShare ? '已分享' : '取消分享',
      icon: postShare ? 'success' : 'none',
      duration: 1000,
      mask: true,
    })
  },

  showModal: function(postShare, postsShare) {
    var that = this;
    wx.showModal({
      title: '分享',
      content: postShare ? '分享该文章' : '取消分享该文章',
      cancelText: "取消",
      cancelColor: '#333',
      confirmText: "确认",
      confirmColor: "#405f80",
      success: function(res) {
        if (res.confirm) {
          wx.setStorageSync('posts_share', postsShare);
          that.setData({
            share: postShare
          })
        }
      }
    })
  },

  onMusicTap: function(event) {
    var postData = postsData.postList[this.data.currentPostId];
    // console.log(postData);
    var isPlayingMusic = this.data.isPlayingMusic;
    if (isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    } else {
      wx.playBackgroundAudio({
        dataUrl: postData.music.url,
        title: postData.music.title,
        coverImgUrl: postData.music.coverImg,
      })
      this.setData({
        isPlayingMusic:true
      })
    }
  },

})