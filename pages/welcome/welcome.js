//welcome.js

Page({
  data: {
    text:"Hello,七月·安生"
  },

  onTap: function () {
    // wx.navigateTo({
    //   url: '../posts/post',
    // });

    wx.redirectTo({
      url: '../posts/post',
    })
  },

})


