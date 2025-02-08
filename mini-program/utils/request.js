import { getConfig } from '../config/config';

/**
 * 封装微信请求方法
 * @param {string} path - API路径
 * @param {Object} options - 请求配置
 * @param {string} options.method - 请求方法 GET/POST/PUT/DELETE
 * @param {Object} options.data - 请求数据
 * @param {Object} options.params - URL参数
 * @returns {Promise} 返回请求结果
 */
const request = async (path, options = {}) => {
  const { apiBaseUrl } = getConfig();
  const { method = 'GET', data, params } = options;
  const app = getApp();
  const userId = app.globalData.userInfo.openId;

  // 构建URL
  let url = `${apiBaseUrl}${path}`;
  if (params) {
    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');
    url += `?${queryString}`;
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data,
      header: {
        'Content-Type': 'application/json',
        'user-id': userId // 将 user-id 添加到请求头，对应的是wx的openid
      },
      success: res => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(new Error(`请求失败: ${res.statusCode}`));
        }
      },
      fail: err => {
        reject(new Error(err.errMsg || '网络请求失败'));
      }
    });
  });
};

export default request; 