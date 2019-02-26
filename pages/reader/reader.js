// reader.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

    wx.showNavigationBarLoading() //在标题栏中显示加载
    let newwords = [{
      message: '从天而降',
      viewid: '-1',
      time: new Date(),
      greeting: 'hello'
    }].concat(this.data.words);

    setTimeout(() => {
      this.setData({
        words: newwords
      })

      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 500)

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('hi')

    if (this.data.loading) return;

    this.setData({
      loading: true
    });

    updateRefreshIcon.call(this);

    var words = this.data.words.concat([{
      message: '土生土长',
      viewid: '0',
      time: new Date(),
      greeting: 'hello'
    }]);

    setTimeout(() => {
      this.setData({
        loading: false,
        words: words
      })
    }, 2000)

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})

function updateRefreshIcon() {

  var deg = 0;

  console.log('旋转开始了.....')

  var animation = wx.createAnimation({

    duration: 1000

  });

  var timer = setInterval(() => {

    if (!this.data.loading)

      clearInterval(timer);

    animation.rotateZ(deg).step(); //在Z轴旋转一个deg角度

    deg += 360;

    this.setData({

      refreshAnimation: animation.export()

    })

  }, 2000);

}