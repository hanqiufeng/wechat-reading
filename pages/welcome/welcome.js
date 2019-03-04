//welcome.js

Page({
  data: {
    text:"Hello,七月·安生"
  },

  onTap: function () {
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

})


