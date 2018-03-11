// pages/pay/pay.js
var json = require('../../data/Home_data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{},
    array:['不限送货时间','工作日送货','双休日、节假日送货'],
    index:0,
    hasAddress:false,
  },

  select:function(e){
    this.setData({
      index:e.detail.value
    })
  },

  goaddress:function(){
    wx.navigateTo({
      url: '../../pages/address/address',
    })
  },

  pay:function(e){
    wx.showModal({
      title: '支付提示',
      content: '本程序仅用于演示，支付接口API已屏蔽',
      showCancel:false,
      success:function(res){
        if(res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var payId = options.id
    var data = json.homeIndex[payId]
    this.setData({
      data:data
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
    var _this = this
    wx.getStorage({
      key: 'address',
      success: function(res) {
        _this.setData({
          address:res.data,
          hasAddress:true
        })
      },
    })
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