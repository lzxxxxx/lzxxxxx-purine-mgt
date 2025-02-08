Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: ''
    }
  },

  data: {
    years: [],
    months: [],
    days: [],
    pickerValue: [0, 0, 0],
    currentDate: null
  },

  lifetimes: {
    attached() {
      this.initDatePicker();
    }
  },

  methods: {
    initDatePicker() {
      // 生成年份数组（前后10年）
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let i = currentYear - 10; i <= currentYear + 10; i++) {
        years.push(i);
      }

      // 生成月份数组
      const months = Array.from({length: 12}, (_, i) => i + 1);

      // 初始化日期
      const currentDate = this.properties.value ? 
        new Date(this.properties.value) : 
        new Date();

      this.setData({
        years,
        months,
        currentDate
      }, () => {
        this.updateDays();
        this.updatePickerValue();
      });
    },

    updateDays() {
      const year = this.data.years[this.data.pickerValue[0]];
      const month = this.data.months[this.data.pickerValue[1]];
      const daysInMonth = new Date(year, month, 0).getDate();
      const days = Array.from({length: daysInMonth}, (_, i) => i + 1);
      this.setData({ days });
    },

    updatePickerValue() {
      const date = this.data.currentDate;
      const yearIndex = this.data.years.findIndex(y => y === date.getFullYear());
      const monthIndex = date.getMonth();
      const dayIndex = date.getDate() - 1;

      this.setData({
        pickerValue: [yearIndex, monthIndex, dayIndex]
      });
    },

    onPickerChange(e) {
      const values = e.detail.value;
      this.setData({ pickerValue: values }, () => {
        this.updateDays();
      });
    },

    onConfirm() {
      const year = this.data.years[this.data.pickerValue[0]];
      const month = this.data.months[this.data.pickerValue[1]];
      const day = this.data.days[this.data.pickerValue[2]];
      
      const date = new Date(year, month - 1, day);
      const formattedDate = this.formatDate(date);
      
      this.triggerEvent('confirm', { date: formattedDate });
    },

    onClose() {
      this.triggerEvent('close');
    },

    preventBubble() {
      // 阻止冒泡
    },

    formatDate(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  }
}); 