// pages/aboutMine/aboutMine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    hasSeat: false,
    userName: 'yangyu mizha',
    userImgUrl: '',
    seatNumber: '0000',
    seatPosition: "火星的北极",
    myUrl: "https://wx.qlogo.cn/mmopen/vi_32/hxwFFSLgDiburwE3NzFbj0NHmjGE9YpbC25tC5duq1891QjX7vicGOGEkrpevKicdOtUL6nyGLWtTDm8zIpOzYV7w/132",
    aviliableSeats: [],
    scrollTop:100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  releaseSeat: function(e) {
    wx.showModal({
      title: '退座确认',
      content: '确定要退座吗，不再学会了？',
      showCancel: true,
      success: (res) => {
        if(res.confirm) {
          wx.showToast({
            title: '退座成功',
            duration: 1500
          })
          setTimeout(() => {
            this.setData({
              hasSeat: false,
              seatNumber: '0000',
              seatPosition: "火星的北极"
            })
          }, 1500)
        }else if(res.cancel) {
          return
        }
      }
    })
  },
  occupy: function (e) {
    console.log(e)
    if (!this.data.aviliableSeats[e.target.id].available) {
      wx.request({
        url: 'https://easy-mock.com/mock/5b012f47e6e1035843cd3b32/example/userSeat?seatNumber=' + this.data.aviliableSeats[e.target.id].seatNumber,
        success: (res) => {
          wx.showToast({
            title: res.data.data.stata,
            duration: 2000
          })
          setTimeout(()=> {
            this.setData({
              hasSeat: true,
              seatNumber: this.data.aviliableSeats[e.target.id].seatNumber,
              seatPosition: this.data.aviliableSeats[e.target.id].seatPosition
            })
          }, 1500)
        }
      })
    }else {
      wx.showToast({
        title: '不可用',
        duration: 1000
      })
    }
  },

  getSeat: function() {
    if (!this.data.isLogin) {
      wx.showToast({
        title: '请先登录',
      })
    }else {
      wx.request({
        url: 'https://easy-mock.com/mock/5b012f47e6e1035843cd3b32/example/getSeatInfo',
        success: (res) => {
          let seatsArr = res.data.data.seatList;
          this.setData({
            aviliableSeats: seatsArr
          })
        }
      })
    }
  },

  login: function () {
    if(!wx.getStorageSync('userName')) {
      wx.getUserInfo({
        success: (res) => {
          console.log(3333)
          this.setData({
            isLogin: true,
            userName: res.userInfo.nickName,
            userImgUrl: res.userInfo.avatarUrl
          })
          wx.setStorage({
            key: 'userName',
            data: res.userInfo.nickName,
            success: () => {
              console.log('setStrorage userName is success')
            }
          })
          wx.setStorage({
            key: 'userImage',
            data: res.userInfo.avatarUrl,
            success: () => {
              console.log('setStrorage userImage is success')
            }
          })
        },
        fail: (err) => {
          console.log(err)
          wx.showToast({
            title: '登陆失败，请重新登陆',
          })
        }
      })
    }
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
    if(wx.getStorageSync('userName')) {
      this.setData({
        isLogin: true,
        userName: wx.getStorageSync('userName'),
        userImgUrl: wx.getStorageSync('userImage')
      })
    }
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