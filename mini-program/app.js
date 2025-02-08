// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: {
            appid: 'wx06ce06278044d6c0',
            secret: 'aa55a74c90ec241e2a141cd3bd130602',
            js_code: res.code,
            grant_type: 'authorization_code'
          },
          success: response => {
            const app = getApp();
            if (response.data) {
              const { openid, session_key } = response.data;
              // 存储用户相关信息到 globalData
              app.globalData.userInfo = {
                openId: openid,
                sessionKey: session_key
              };
            }
          },
          fail: error => {
            console.error('请求失败', error);
          }
        });
      }
    })
  },
  globalData: {
    userInfo: null,
  }
})
