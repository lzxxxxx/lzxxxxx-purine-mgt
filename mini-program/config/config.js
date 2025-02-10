const config = {
  development: {
    // apiBaseUrl: 'http://10.42.33.143:3000',
    apiBaseUrl: 'http://localhost:3000'
  },
  production: {
    apiBaseUrl: 'https://api.your-domain.com' // 替换成你的正式环境域名
  }
};

// 根据环境返回对应配置
export const getConfig = () => {
  // 判断是否为开发环境
  const isDev = __wxConfig.envVersion === 'develop' || __wxConfig.envVersion === 'trial';
  return isDev ? config.development : config.production;
}; 