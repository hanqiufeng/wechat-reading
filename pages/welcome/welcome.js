//welcome.js

Page({
  data: {
    text: "Hello,七月·安生"
  },

  onTap: function() {
    console.log("正在为您跳转！");
    wx.switchTab({
      url: "../posts/post"
    });
    // 父子级页面跳转
    // wx.navigateTo({
    //   url: '../reader/reader',
    //   // url: "../posts/post",
    // });

    // 平级页面跳转
    // wx.redirectTo({
    //   url: '../posts/post',
    // })
  },

  scanQRCode: function() {
    wx.scanCode({
      success: function(result) {
        wx.showModal({
          content: JSON.stringify(result)
        })
      },
      fail: function(error) {
        wx.showModal({
          content: JSON.stringify(error)
        })
      }
    })
  },

  /*
   * 定义页面分享函数
   * 注意，path必须是以 / 开头的完整路径，代表用户点击分享消息后要跳转的小程序页面。
   * 可以附加参数
   */
  onShareAppMessage: function(event) {
    return {
      title: '离思五首·其四',
      desc: '曾经沧海难为水，除却巫山不是云',
      path: '/pages/posts/post-detail/post-detail?id=0'
    }
  },

})