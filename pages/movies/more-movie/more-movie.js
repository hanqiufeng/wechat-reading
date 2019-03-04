// pages/movies/more-movie/more-movie.js
var util = require('../../../utils/util.js');
const app = getApp();

Page({
  data: {
    movies: {},
    navigateTitle: '',
    requestUrl: '',
    totalCount: 0,
    isEmpty: true,
  },

  onLoad: function(options) {
    var category = options.category;
    this.data.navigateTitle = category;

    var dataUrl = app.globalData.doubanBase;
    switch (category) {
      case "正在热映":
        dataUrl = dataUrl + "/v2/movie/in_theaters"
        break;
      case "即将上映":
        dataUrl = dataUrl + "/v2/movie/coming_soon"
        break;
      default:
        dataUrl = dataUrl + "/v2/movie/top250"
    }
    // console.log(dataUrl)
    this.data.requestUrl = dataUrl;
    util.http(dataUrl, this.processDoubanData);
  },

  // 上滑加载
  // onScrollLower: function(event) {
  //   console.log("加载更多" + new Date());
  //   var nextUrl = this.data.requestUrl +
  //     "?start=" + this.data.totalCount + "&count=20";
  //   util.http(nextUrl, this.processDoubanData);
  //   wx.showNavigationBarLoading()
  // },
  onReachBottom: function(event) {
    var nextUrl = this.data.requestUrl +
      "?start=" + this.data.totalCount + "&count=20";
    util.http(nextUrl, this.processDoubanData)
    wx.showNavigationBarLoading()
  },

  // 下拉刷新
  onPullDownRefresh: function() {
    console.log("下拉刷新" + new Date());
    var refreshUrl = this.data.requestUrl +
      "?star=0&count=20";
    this.data.movies = {};
    this.data.isEmpty = true;
    this.data.totalCount = 0;
    util.http(refreshUrl, this.processDoubanData);
    wx.showNavigationBarLoading();
    wx.stopPullDownRefresh();
  },

  processDoubanData: function(moviesDouban) {
    // console.log(moviesDouban)
    var movies = [];
    for (var idx in moviesDouban.subjects) {
      var subject = moviesDouban.subjects[idx];
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + "...";
      }
      var temp = {
        stars: util.convertToStarsArray(subject.rating.stars),
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id,
      }
      movies.push(temp);
    }
    var totalMovies = {};

    // 如果要绑定新加载的数据，那么需要同原来的数据合并在一起
    if (!this.data.isEmpty) {
      totalMovies = this.data.movies.concat(movies);
    } else {
      totalMovies = movies;
      this.data.isEmpty = false;
    }
    this.setData({
      movies: totalMovies
    });
    this.data.totalCount += 20;
    wx.hideNavigationBarLoading();
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var navigateTitle = this.data.navigateTitle;
    wx.setNavigationBarTitle({
      title: navigateTitle
    })
  },

  onMovieTap: function(event) {
    var movieId = event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: '../movie-detail/movie-detail?id=' + movieId
    })
  },

})