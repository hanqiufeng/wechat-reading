Page({
  data: {
    images: [{
        src: "/images/post/logo-1.jpg"
      },
      {
        src: "/images/post/logo-2.jpg"
      },
      {
        src: "/images/post/logo-3.jpg"
      }
    ],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true, // 是否自动切换
    interval: 5000, // 自动切换时间间隔
    duration: 500, //滑动动画时长
    post_content_demo: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("onLoad");
    var post_content = [{
      date: "sep 19 2019",
      title: "正是虾肥蟹壮时",
      img: {
        author_img: "/images/post/head-1.jpg",
        post_img: "/images/post/timg.jpg",
      },
      content: "秋风起，蟹飘香。天气渐渐凉下来了，秋意渐起。大闸蟹正是最肥美的时候，许久前定的大闸蟹，终于从阳澄湖搭乘飞机到手里。青色的蟹壳，扑闪扑闪的眼睛，还有被绳子困住的毛绒绒的蟹脚，蟹肥得一只快抵上手掌大小。由于阳澄湖以水清无污染著称，因此大闸鞋只需要稍加清洗便可上锅蒸。为保留大闸蟹的鲜美滋味，无需加其他调料，只需要一点紫苏去腥即可。蒸20分钟便可看到青壳变成了诱人的红艳艳的颜色，再过就老了。打开锅，蟹肥得黄黄的油已经流了出来。",
      collect_num: "96",
      view_num: "112",
    }, {
      date: "sep 15 2019",
        title: "有些话，我不能对你说……",
      img: {
        author_img: "/images/post/head-2.jpg",
        post_img: "/images/post/text_2.jpg",
      },
        content: "2007 年，我第一次见到老胡的时候，他还很瘦。穿一件红色的New Balance T恤，好像是参加城际马拉松赛发的。整个办公室都乱糟糟的。戴着厚底儿眼镜的前台助理把自己的东西收拾好，抱着箱子走到门口，扑通一声扔地上，又气势汹汹地跑回来：“胡总，您还是给我写个欠条吧。三个月工资两千四，虽说不多，但对我来说是我孩子一学期的补课费。”老胡从正在忙碌的电脑后头站起来，拿了一张白纸，刷刷刷写着，签名的时候，是龙飞凤舞的几个字：胡知山。",
      collect_num: "23",
      view_num: "452",
    }]
    this.setData({
      post_key: post_content
    });
  },
})