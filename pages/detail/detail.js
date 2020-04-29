// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsData:[]//详情数据

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(JSON.parse(options.details));
  let id=options.id;
  console.log(options.id);
    let url = `https://api.douban.com/v2/movie/subject/${id}?apikey=0b2bdeda43b5688921839c8ecb20399b`

  wx.request({
    url:url ,
    method:"GET",
    success:res=>{
      this.setData({
        detailsData:res.data
      })
      console.log(this.data.detailsData);
    },
    header: {
      "content-type": "application/text"
    },
  })
  

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})