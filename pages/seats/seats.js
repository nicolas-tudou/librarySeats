// pages/seats/seats.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgColor_seatsRules: '#fff',
    bgColor_seatsOrder: '#fff',
    bgColor_studySign: '#fff',
    bgColor_seatSearch: '#fff',
    bgColor_localChose: '#fff',
    bgColor_leave: '#fff',
    bgColor_release: '#fff',
    bgColor_report: '#fff'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  // 点击操作
  seatsRules: function() {
    this.setData({
      bgColor_seatsRules: '#ccc'
    })
    setTimeout(() => {
      this.setData({
        bgColor_seatsRules: '#fff'
      }, 300)
    })
    wx.navigateTo({
      url: '/pages/seatsRules/seatsRules',
    })
  },
  seatsOrder: function() {
    this.setData({
      bgColor_seatsOrder: '#ccc'
    })
    setTimeout(() => {
      this.setData({
        bgColor_seatsOrder: '#fff'
      }, 300)
    })
  },
  studySign: function() {
    this.setData({
      bgColor_studySign: '#ccc'
    })
    setTimeout(() => {
      this.setData({
        bgColor_studySign: '#fff'
      }, 300)
    })
  },
  seatSearch: function() {
    this.setData({
      bgColor_seatSearch: '#ccc'
    })
    setTimeout(() => {
      this.setData({
        bgColor_seatSearch: '#fff'
      }, 300)
    })
  },
  localChose: function() {
    this.setData({
      bgColor_localChose: '#ccc'
    })
    setTimeout(() => {
      this.setData({
        bgColor_localChose: '#fff'
      }, 300)
    })
  },
  leave: function() {
    this.setData({
      bgColor_leave: '#ccc'
    })
    setTimeout(() => {
      this.setData({
        bgColor_leave: '#fff'
      }, 300)
    })
  },
  release: function() {
    this.setData({
      bgColor_release: '#ccc'
    })
    setTimeout(() => {
      this.setData({
        bgColor_release: '#fff'
      }, 300)
    })
  },
  report: function() {
    this.setData({
      bgColor_report: '#ccc'
    })
    setTimeout(() => {
      this.setData({
        bgColor_report: '#fff'
      }, 300)
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