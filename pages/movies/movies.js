var util = require('../../utils/util.js');
const app = getApp();

Page({
  data: {
    inTheaters: {},
    comingSoon: {},
    top250: {},
    containerShow: true,
    searchPanelShow: false,
    searchResult: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var inTheatersUrl = app.globalData.doubanBase + "/v2/movie/in_theaters" + "?start=0&count=3";
    var comingSoonUrl = app.globalData.doubanBase + "/v2/movie/coming_soon" + "?start=0&count=3";
    var top250Url = app.globalData.doubanBase + "/v2/movie/top250" + "?start=0&count=3";

    this.getMovieListData(inTheatersUrl, "inTheaters", "正在热映")
    this.getMovieListData(comingSoonUrl, "comingSoon", "即将上映")
    this.getMovieListData(top250Url, "top250", "Top250")

  },

  onMoreTap: function(event) {
    var category = event.currentTarget.dataset.category;
    // console.log('即将跳转到' + category);
    wx.navigateTo({
      url: './more-movie/more-movie?category=' + category
    })
  },

  getMovieListData: function(getDataUrl, settedKey, categoryTitle) {
    var _that = this;
    wx.request({
      url: getDataUrl,
      method: "GET",
      header: {
        "Content-Type": "json"
      },
      success: function(res) {
        // console.log(res)
        _that.processDoubanData(res.data, settedKey, categoryTitle);
      },
      fail: function(error) {
        console.log("error:" + error)
      }
    })
  },

  onCancelImgTap:function(){
    this.setData({
      containerShow: true,
      searchPanelShow: false,
      searchResult: {},
    })
  },

  onBindFocus: function(event) {
    console.log("显示");
    this.setData({
      containerShow: false,
      searchPanelShow: true,
    })
  },

  onBindChange: function(event) {
    var text = event.detail.value;
    var searchUrl = app.globalData.doubanBase + "/v2/movie/search?q="+text;
    this.getMovieListData(searchUrl, "searchResult", "")
    
    // console.log("隐藏");
    // this.setData({
    //   containerShow: true,
    //   searchPanelShow: false,
    // })
  },

  processDoubanData: function(moviesDouban, settedKey, categoryTitle) {
    var movies = [];
    for (var idx in moviesDouban.subjects) {
      var subject = moviesDouban.subjects[idx];
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + "...";
      }
      var temp = {
        stars: util.converToStartsArray(subject.rating.stars),
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id,
      }
      movies.push(temp);
    }
    var readyData = {};
    readyData[settedKey] = {
      categoryTitle: categoryTitle,
      movies: movies
    };
    this.setData(readyData);
  },

  // 上滑加载
  onScrollLower: function (event) {
    console.log("暂时无法上滑加载")
    // console.log("加载更多" + new Date());
    // var nextUrl = this.data.requestUrl +
    //   "?start=" + this.data.totalCount + "&count=20";
    // util.http(nextUrl, this.processDoubanData);
    // wx.showNavigationBarLoading()
  },

})