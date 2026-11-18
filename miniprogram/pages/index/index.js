Page({
  data: {
    dishes: [
      { name: '青椒肉丝', category: '家常菜' },
      { name: '番茄鸡蛋汤', category: '暖汤' },
      { name: '清炒时蔬', category: '素菜' }
    ]
  },
  showNotice() {
    wx.showToast({ title: '演示界面，功能未接入', icon: 'none' })
  }
})
