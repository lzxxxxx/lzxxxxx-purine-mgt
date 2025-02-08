const axios = require('axios');
const generateToken = require('./jwt');

const getCozeToken = async () => {
  try {
    const jwtToken = generateToken();
    
    const response = await axios.post('https://api.coze.cn/api/permission/oauth2/token', {
      duration_seconds: 86399,
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer"
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
      }
    });

    return response.data.access_token;
  } catch (error) {
    console.error('获取Coze token失败:', error.response?.data || error.message);
    throw error;
  }
};

module.exports = { getCozeToken }; 