Component({
  properties: {
    title: {
      type: String,
      value: '提示'
    },
    content: {
      type: Object,
      value: {}
    },
    isVisible: {
      type: Boolean,
      value: false
    },
    type: {
      type: String,
      value: 'add' // 'add' 为新增模式，'view' 为查看模式
    }
  },
  methods: {
    onConfirm() {
      this.triggerEvent('confirm');
    },
    onCancel() {
      this.setData({
        isVisible: false // 隐藏弹窗
      });
      this.triggerEvent('cancel'); // 可选：触发取消事件
    }
  }
}); 