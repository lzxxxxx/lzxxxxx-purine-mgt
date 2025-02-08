import { getConfig } from '../../config/config';
import request from '../../utils/request'; // 引入公共请求方法

Page({
  data: {
    foods: [],
    searchValue: '',
    loading: false
  },

  onLoad() {
    // 页面加载时获取所有食物
    this.fetchFoods();
  },

  // 搜索框输入事件
  onSearchInput(e) {
    const searchValue = e.detail.value;
    this.setData({ searchValue });
    this.fetchFoods(searchValue);
  },

  // 获取食物数据
  async fetchFoods(search = '') {
    try {
      this.setData({ loading: true });
      
      let url = `/api/foods`;
      if (search) {
        url += `?search=${encodeURIComponent(search)}`;
      }

      const data = await request(url);
      
      if (data) {
        this.setData({
          foods: data,
          loading: false
        });
      } else {
        this.setData({ loading: false });
      }
    } catch (error) {
      console.error('Error fetching foods:', error.message || error);
      wx.showToast({
        title: error.message || '获取数据失败',
        icon: 'none'
      });
      this.setData({ loading: false });
    }
  },

  // 点击食物项跳转到详情页
  onFoodTap(e) {
    const food = e.currentTarget.dataset.food;
    wx.navigateTo({
      url: `/pages/food-detail/food-detail?id=${food._id}`
    });
  }
});