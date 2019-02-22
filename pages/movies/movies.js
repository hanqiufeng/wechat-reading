Page({
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250',
      method:"GET",
      header:{
        "Content-Type":"json"
      },
      success:function(res){
        console.log(res)
      },
      fail:function(error){
        console.log("error:" + error)
      },
      complate:function(){}
    })
  },
})