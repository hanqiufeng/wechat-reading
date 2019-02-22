App({
  globalData:{
    g_isPlayingMuisc:false, //记录上一篇文章是否播放音乐
    g_currentMusicPostId:null, // 记录当前播放的是那一篇文章
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 清除真机中的缓存数据
    // wx.clearStorage();
    // wx.clearStorageSync();
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
