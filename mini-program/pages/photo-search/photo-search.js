import { getConfig } from '../../config/config'; // 引入 getConfig 方法
import request from '../../utils/request'; // 引入公共请求方法

Page({
  data: {
    weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    dateList: [],
    selectedDate: '',
    weekList: [], // 存储多周的日期数据
    currentIndex: 1, // 当前显示的周索引，默认显示中间那周
    touchStartX: 0, // 记录触摸开始位置
    animation: null,
    animationData: null,
    totalPurine: 0,
    targetPurine: 1400,
    canvasContext: null,
    dayRecords: [],
    isModalVisible: false, // 控制弹窗显示
    modalContent: null, // 弹窗内容
    type: 'add', // 默认为新增模式
    progress: 0,
    isDatePickerVisible: false
  },

  onLoad() {
    this.initDateList();
    this.setData({
      selectedDate: this.formatDate(new Date())
    });
    this.getDietRecordForDate();
  },

  async getDietRecordForDate() {
    // 请求当日数据
    const {records, totalPurine} = await request(`/api/diet-records/${this.data.selectedDate}`);
    this.setData({
      totalPurine,
      dayRecords: records
    });
  },

  initDateList() {
    const today = new Date();
    const currentDay = today.getDay();
    const weekList = [];
    
    // 生成三周的日期数据（上周、本周、下周）
    for (let weekOffset = -1; weekOffset <= 1; weekOffset++) {
      const weekDates = [];
      const weekStart = new Date(today);
      weekStart.setDate(today.getDate() - currentDay + (weekOffset * 7));
      
      for (let i = 0; i < 7; i++) {
        const date = new Date(weekStart);
        date.setDate(weekStart.getDate() + i);
        weekDates.push({
          date: date.getDate(),
          fullDate: this.formatDate(date),
          weekDay: date.getDay(),
          hasRecord: false
        });
      }
      weekList.push(weekDates);
    }
    
    this.setData({ 
      weekList,
      dateList: weekList[1] // 默认显示本周
    });
  },

  formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  async initProgressRing() {
    try {
      const query = wx.createSelectorQuery();
      query.select('#progressRing')
        .fields({ node: true, size: true })
        .exec((res) => {
          if (!res[0]) {
            console.error('Canvas element not found');
            return;
          }
          const canvas = res[0].node;
          const ctx = canvas.getContext('2d');
          
          // 设置canvas尺寸
          const dpr = wx.getSystemInfoSync().pixelRatio;
          canvas.width = 80 * dpr;  // 固定宽度
          canvas.height = 80 * dpr;  // 固定高度
          ctx.scale(dpr, dpr);
          
          this.setData({ canvasContext: ctx }, () => {
            this.drawProgressRing();
          });
        });
    } catch (error) {
      console.error('初始化Canvas失败:', error);
    }
  },

  drawProgressRing() {
    if (!this.data.canvasContext) {
      console.error('Canvas context not initialized');
      return;
    }
    const ctx = this.data.canvasContext;
    const { totalPurine, targetPurine } = this.data;
    const progress = Math.min(totalPurine / targetPurine, 1);
    
    const centerX = 40;
    const centerY = 40;
    const radius = 35;
    
    // 清空画布
    ctx.clearRect(0, 0, 80, 80);
    
    // 绘制灰色背景圆
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#E5E5E5';
    ctx.lineWidth = 4;
    ctx.stroke();
    
    // 绘制进度圆
    const endAngle = (-0.5 + progress * 2) * Math.PI;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -0.5 * Math.PI, endAngle);
    ctx.strokeStyle = '#007AFF';
    ctx.lineWidth = 4;
    ctx.stroke();
  },

  onDateSelect(e) {
    const date = e.currentTarget.dataset.date;
    this.setData({ selectedDate: date });
    this.getDietRecordForDate();
  },

  takePhoto() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['camera', 'album'],
      success: (res) => {
        const tempFilePath = res.tempFiles[0].tempFilePath;
        
        // 显示加载提示
        wx.showLoading({
          title: '识别中...',
          mask: false
        });
        
        const { apiBaseUrl } = getConfig();
        const uploadUrl = `${apiBaseUrl}/api/diet-records/upload`;
        const app = getApp();
        let userId = '';
        
        // 检查用户登录状态
        if (app.globalData && app.globalData.userInfo) {
          userId = app.globalData.userInfo.openId;
        } else {
          wx.hideLoading();
          wx.showToast({
            title: '请先登录',
            icon: 'none'
          });
          return;
        }
        
        // 上传图片
        wx.uploadFile({
          url: uploadUrl,
          filePath: tempFilePath,
          name: 'image',
          header: {
            'user-id': userId
          },
          success: (uploadRes) => {
            try {
              const result = JSON.parse(uploadRes.data);
              // 添加到记录列表
              const newRecord = {
                name: result.name,
                purine: result.purine,
                desc: result.desc,
                imageUrl: result.imageUrl,
                time: this.formatTime(new Date()),
              };
              if(!newRecord.purine){ //如果识别出的嘌呤为0，意味着没识别出来
                throw newRecord;
              }
              
              // 弹窗展示扫描结果
              this.setData({
                modalContent: newRecord,
                isModalVisible: true, // 显示自定义弹窗
                type: 'add'
              });
            } catch (error) {
              wx.showToast({
                title: '识别失败',
                icon: 'error'
              });
              console.error('解析识别结果失败:', error);
            }
          },
          fail: (error) => {
            wx.showToast({
              title: '上传失败',
              icon: 'error'
            });
            console.error('上传图片失败:', error);
          },
          complete: () => {
            wx.hideLoading();
          }
        });
      }
    });
  },

  async handleModalConfirm() {
    // 如果是查看详情模式，则直接关闭弹窗
    if (this.data.type === 'view') {
      this.setData({
        isModalVisible: false,
        modalContent: null
      });
      return;
    }
    
    // 处理弹窗确认逻辑
    const newRecord = this.data.modalContent;
    const records = [...this.data.dayRecords];
    records.unshift(newRecord);
    
    this.setData({
      dayRecords: records,
      totalPurine: +this.data.totalPurine + +newRecord.purine,
      isModalVisible: false, // 隐藏弹窗
      modalContent: null
    });

    //调用创建接口新增一条记录
    const createRecordUrl = '/api/diet-records';
    await request(createRecordUrl, {
      method: 'POST',
      data: {
        date: this.data.selectedDate,
        record: newRecord
      }
    });
    
    wx.showToast({
      title: '添加成功',
      icon: 'success'
    });
  },

  handleModalCancel() {
    this.setData({
      isModalVisible: false,
      modalContent: null
    });
  },

  showRecordDetail(e) {
    const record = e.currentTarget.dataset.record;
    this.setData({
      modalContent: record,
      isModalVisible: true,
      type: 'view'
    });
  },

  formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  },

  touchStart(e) {
    this.setData({
      touchStartX: e.touches[0].clientX
    });
  },
  
  touchEnd(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const moveX = touchEndX - this.data.touchStartX;
    
    // 判断滑动方向和距离
    if (Math.abs(moveX) > 50) { // 滑动距离大于50px才触发
      if (moveX > 0) {
        // 向右滑动，显示上一周（更早的日期）
        this.loadPrevWeek();
      } else {
        // 向左滑动，显示下一周（更晚的日期）
        this.loadNextWeek();
      }
    }
  },

  onReady: function() {
    this.animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease',
    });
  },

  loadPrevWeek() {
    this.animation.opacity(0).step();
    this.setData({
      animationData: this.animation.export()
    });
    
    setTimeout(() => {
      const weekList = [...this.data.weekList];
      const lastWeek = this.generateWeekDates(-2);
      weekList.unshift(lastWeek);
      weekList.pop();
      
      this.setData({
        weekList,
        dateList: weekList[1]
      });
      
      this.animation.opacity(1).step();
      this.setData({
        animationData: this.animation.export()
      });
    }, 300);
  },

  loadNextWeek() {
    this.animation.opacity(0).step();
    this.setData({
      animationData: this.animation.export()
    });
    
    setTimeout(() => {
      const weekList = [...this.data.weekList];
      const nextWeek = this.generateWeekDates(2);
      weekList.push(nextWeek);
      weekList.shift();
      
      this.setData({
        weekList,
        dateList: weekList[1]
      });
      
      this.animation.opacity(1).step();
      this.setData({
        animationData: this.animation.export()
      });
    }, 300);
  },

  generateWeekDates(weekOffset) {
    const today = new Date();
    const currentDay = today.getDay();
    const weekDates = [];
    
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - currentDay + (weekOffset * 7));
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      weekDates.push({
        date: date.getDate(),
        fullDate: this.formatDate(date),
        weekDay: date.getDay(),
        hasRecord: false
      });
    }
    
    return weekDates;
  },

  async drawProgress(progress) {
    const query = wx.createSelectorQuery();
    const canvas = await new Promise(resolve => {
      query.select('#progressRing')
        .fields({ node: true, size: true })
        .exec((res) => {
          resolve(res[0]);
        });
    });

    const ctx = canvas.node.getContext('2d');
    const dpr = wx.getSystemInfoSync().pixelRatio;
    canvas.width = canvas.width * dpr;
    canvas.height = canvas.height * dpr;
    ctx.scale(dpr, dpr);

    const centerX = canvas.width / (2 * dpr);
    const centerY = canvas.height / (2 * dpr);
    const radius = 35;

    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制灰色背景圆
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#E5E5E5';
    ctx.lineWidth = 4;
    ctx.stroke();

    // 绘制进度圆
    const endAngle = (-0.5 + progress / 100 * 2) * Math.PI;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -0.5 * Math.PI, endAngle);
    ctx.strokeStyle = '#007AFF';
    ctx.lineWidth = 4;
    ctx.stroke();
  },

  showDatePicker() {
    this.setData({
      isDatePickerVisible: true
    });
  },

  onDatePickerClose() {
    this.setData({
      isDatePickerVisible: false
    });
  },

  onDatePickerConfirm(e) {
    const { date } = e.detail;
    
    // 获取选中日期所在的周
    const selectedDate = new Date(date);
    const currentDay = selectedDate.getDay();
    const weekStart = new Date(selectedDate);
    weekStart.setDate(selectedDate.getDate() - currentDay);
    
    // 生成该周的日期数据
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      weekDates.push({
        date: date.getDate(),
        fullDate: this.formatDate(date),
        weekDay: date.getDay(),
        hasRecord: false
      });
    }
    
    // 更新日期列表和选中日期
    this.setData({
      dateList: weekDates,
      selectedDate: this.formatDate(selectedDate),
      isDatePickerVisible: false
    });
    
    // 获取选中日期的记录
    this.getDietRecordForDate();
  }
}); 