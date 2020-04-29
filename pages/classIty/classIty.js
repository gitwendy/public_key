Page({

  /**
   * 页面的初始数据
   */

  data: {
    popularMovie: [], //热门电影
    list: [], //top250
    recentUpdate: []



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b',
      method: "GET",
      header: {
        "content-type": "application/text"
      },

      fail(err) {
        console.log('错误提示', err);
      },
      success: res => {
        this.setData({
          popularMovie: res.data.subjects,


        })
        // console.log(this.data.popularMovie);
      }
    });
    wx.request({
      url: 'https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=6',
      method: "GET",
      header: {
        "content-type": "application/text"
      },

      fail(err) {
        console.log('错误提示', err);
      },
      success: res => {
        // console.log(res.data.subjects)
        this.setData({
          list: res.data.subjects,


        })
        console.log(this.data.list);
      }
    })
    wx.request({
      url: 'https://api.douban.com/v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=6',
      method: "GET",
      header: {
        "content-type": "application/text"
      },

      fail(err) {
        console.log('错误提示', err);
      },
      success: res => {
        // console.log(res.data.subjects)
        this.setData({
          recentUpdate: res.data.subjects,


        })
        console.log(this.data.recentUpdate);
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // console.log(this.data.list);
    console.log("页面的初始化完成")

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("页面切换了")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("后台切换到了前台")

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  toDetails(e) {
    console.log(e.currentTarget.dataset.index);
    let index = e.currentTarget.dataset.index;

    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function() {
      wx.hideLoading()
    }, 5000)
    // 路由跳转详情
    wx.navigateTo({
      url: `/pages/detail/detail?id=${index}`

    })

  }

})