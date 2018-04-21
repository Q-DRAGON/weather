//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    weatherData: [],
    selected: 'nightHeight',
    view: {
      nightHeight: wx.getSystemInfoSync().windowHeight * 0.4,
      eveningHeight: wx.getSystemInfoSync().windowHeight * 0.6,
      dayHeight: wx.getSystemInfoSync().windowHeight * 0.8,
      morningHeight: wx.getSystemInfoSync().windowHeight * 1,
    },
    pageHeight: wx.getSystemInfoSync().windowHeight,
    halfForTwentyPercent: wx.getSystemInfoSync().windowHeight * 0.2 / 2,
  },
  changeElementHeight: function (elem) {
    if (elem === 'nightHeight') {
      this.setData({
        selected: 'nightHeight',
        view: {
          nightHeight: wx.getSystemInfoSync().windowHeight * 0.4,
          eveningHeight: wx.getSystemInfoSync().windowHeight * 0.6,
          dayHeight: wx.getSystemInfoSync().windowHeight * 0.8,
          morningHeight: wx.getSystemInfoSync().windowHeight * 1,
        }
      })
      console.log('selected', this.data.selected)
    } else if (elem === 'eveningHeight') {
      this.setData({
        selected: 'eveningHeight',
        view: {
          nightHeight: wx.getSystemInfoSync().windowHeight * 0.2,
          eveningHeight: wx.getSystemInfoSync().windowHeight * 0.6,
          dayHeight: wx.getSystemInfoSync().windowHeight * 0.8,
          morningHeight: wx.getSystemInfoSync().windowHeight * 1,
        }
      })
      console.log('selected', this.data.selected)
    } else if (elem === 'dayHeight') {
      this.setData({
        selected: 'dayHeight',
        view: {
          nightHeight: wx.getSystemInfoSync().windowHeight * 0.2,
          eveningHeight: wx.getSystemInfoSync().windowHeight * 0.4,
          dayHeight: wx.getSystemInfoSync().windowHeight * 0.8,
          morningHeight: wx.getSystemInfoSync().windowHeight * 1,
        }
      })
      console.log('selected', this.data.selected)
    } else if (elem === 'morningHeight') {
      this.setData({
        selected: 'morningHeight',
        view: {
          nightHeight: wx.getSystemInfoSync().windowHeight * 0.2,
          eveningHeight: wx.getSystemInfoSync().windowHeight * 0.4,
          dayHeight: wx.getSystemInfoSync().windowHeight * 0.6,
          morningHeight: wx.getSystemInfoSync().windowHeight * 1,
        }
      })
      console.log('selected', this.data.selected)
    }
  },
  //事件处理函数
  bindTouchForNight: function (event) {
    // console.log(event.target.dataset.id)
    // let view = this.data.view
    // let v = event.target.dataset.id + 'Height'
    // for (let i in this.data.view) {
    //   if(v == i) {
    //     console.log('youle', i)
    //   }
    // }
    this.changeElementHeight('nightHeight')
  },
  bindTouchForEvening: function (event) {
    this.changeElementHeight('eveningHeight')
  },
  bindTouchForDay: function (event) {
    this.changeElementHeight('dayHeight')
  },
  bindTouchForMorning: function (event) {
    this.changeElementHeight('morningHeight')
  },
})
