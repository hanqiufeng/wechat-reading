// var util = require('../../../utils/util.js'); // ES5
import {
  Movie
} from "class/Movie.js"; // ES6
const app = getApp();

Page({
  data: {
    movie: {},
  },
  onLoad: function(options) {
    var movieId = options.id;
    var url = app.globalData.doubanBase + "/v2/movie/subject/" + movieId;
    var movie = new Movie(url); // ES6
    // var _that =this;
    // movie.getMovieData(function(movie) {
    //   _that.setData({
    //     movie: movie
    //   })
    // }); // ES6
     movie.getMovieData((movie)=> {
       this.setData({
        movie: movie
      })
    }); // ES6
    // util.http(url, this.processDoubanData);// ES5
  },

  // processDoubanData: function(data) {  // ES5
  //   // console.log(data)
  //   if (!data) {
  //     return;
  //   }
  //   var director = {
  //     avatar: "",
  //     name: "",
  //     id: ""
  //   }
  //   if (data.directors[0] != null) {
  //     if (data.directors[0].avatars != null) {
  //       director.avatar = data.directors[0].avatars.large

  //     }
  //     director.name = data.directors[0].name;
  //     director.id = data.directors[0].id;
  //   }
  //   var movie = {
  //     movieImg: data.images ? data.images.large : "",
  //     country: data.countries[0],
  //     title: data.title,
  //     originalTitle: data.original_title,
  //     wishCount: data.wish_count,
  //     commentCount: data.comments_count,
  //     year: data.year,
  //     generes: data.genres.join("、"),
  //     stars: util.convertToStarsArray(data.rating.stars),
  //     score: data.rating.average,
  //     director: director,
  //     casts: util.convertToCastString(data.casts),
  //     castsInfo: util.convertToCastInfos(data.casts),
  //     summary: data.summary
  //   }
  //   // console.log(movie)
  //   this.setData({
  //     movie: movie
  //   })
  // },

  viewMoviePostImg: function(e) {
    var src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src,
      urls: [src],
    })
  },
})