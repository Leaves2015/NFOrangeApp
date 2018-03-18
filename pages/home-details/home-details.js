// pages/home-details/home-details.js
var json = require('../../data/Home_data.js')

Page({

  /* 页面的初始数据*/
  data: {
    HomeIndex:0
  },

  /*支付*/
  goPay:function(e){
    var Id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../../pages/pay/pay?id=' + Id
    })
  },

  boxtwo:function(e){
    var index = parseInt(e.currentTarget.dataset.index)
    this.setData({
      HomeIndex:index
    })
  },

  addcart:function(e){
    var cartItems = wx.getStorageSync("cartItems") || []
    var exist = cartItems.find(function(e1){
      return e1.id == e.target.dataset.id
    })

    /*如果购物车里面有该商品那么它的数量每次加一*/
    if (exist){
      exist.value = parseInt(exist.value) + 1
    }else{
      cartItems.push({
        id:e.target.dataset.id,
        title:e.target.dataset.title,
        image:e.target.dataset.image,
        price:e.target.dataset.price,
        value:1,
        selected:true
      })
    }

    wx.showToast({
      title: '加入购物车成功！',
      duration: 1000
    })

    /* 更新缓存数据 */
    wx.setStorageSync("cartItems", cartItems)
  },

  /* 生命周期函数--监听页面加载*/
  onLoad: function (options) {
    var homeid = options.id
    var Homedata = json.homeIndex[homeid];
    this.setData({
      data:Homedata
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