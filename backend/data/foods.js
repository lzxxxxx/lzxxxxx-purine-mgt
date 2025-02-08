const foods = [
  // 海鲜类 (Seafood)
  {
    name: "沙丁鱼",
    purineContent: 480,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "富含omega-3脂肪酸，但嘌呤含量极高",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "鲭鱼",
    purineContent: 427,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "深海鱼类，嘌呤含量极高",
    source: "中国营养学会"
  },
  {
    name: "鱿鱼",
    purineContent: 350,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "软体海鲜，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "带鱼",
    purineContent: 230,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "常见海鱼，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "鲈鱼",
    purineContent: 160,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "淡水鱼，嘌呤含量较高",
    source: "中国营养学会"
  },
  {
    name: "草鱼",
    purineContent: 128,
    category: "seafood",
    riskLevel: "medium",
    suggestion: "可少量食用",
    description: "常见淡水鱼，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "螃蟹",
    purineContent: 150,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "甲壳类海鲜，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "虾仁",
    purineContent: 147,
    category: "seafood",
    riskLevel: "medium",
    suggestion: "建议限制食用",
    description: "甲壳类海鲜，嘌呤含量较高",
    source: "中国营养学会"
  },
  {
    name: "鲍鱼",
    purineContent: 285,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "贝类海鲜，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "扇贝",
    purineContent: 245,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "贝类海鲜，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "海参",
    purineContent: 219,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "刺胞动物，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "鳗鱼",
    purineContent: 297,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "富含维生素A，但嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "章鱼",
    purineContent: 231,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "软体动物，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "蛤蜊",
    purineContent: 136,
    category: "seafood",
    riskLevel: "medium",
    suggestion: "建议限制食用",
    description: "贝类，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "鲅鱼",
    purineContent: 257,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "海鱼，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "海蛎子",
    purineContent: 215,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "贝类，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "鲫鱼",
    purineContent: 128,
    category: "seafood",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "淡水鱼，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "鲤鱼",
    purineContent: 152,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "淡水鱼，嘌呤含量较高",
    source: "中国营养学会"
  },
  {
    name: "青鱼",
    purineContent: 146,
    category: "seafood",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "淡水鱼，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "鲢鱼",
    purineContent: 138,
    category: "seafood",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "淡水鱼，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "鲳鱼",
    purineContent: 178,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "海水鱼，嘌呤含量较高",
    source: "中国营养学会"
  },
  {
    name: "黄花鱼",
    purineContent: 165,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "海水鱼，嘌呤含量较高",
    source: "中国营养学会"
  },
  {
    name: "海螺",
    purineContent: 158,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "软体动物，嘌呤含量较高",
    source: "中国营养学会"
  },
  {
    name: "梭子蟹",
    purineContent: 148,
    category: "seafood",
    riskLevel: "medium",
    suggestion: "建议限制食用",
    description: "甲壳类海鲜，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "牡蛎",
    purineContent: 138,
    category: "seafood",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "贝类，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "鲐鱼",
    purineContent: 345,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "深海鱼类，嘌呤含量极高",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "鲨鱼",
    purineContent: 286,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "软骨鱼类，嘌呤含量高",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "银鱼",
    purineContent: 234,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "小型鱼类，嘌呤含量高",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "鲥鱼",
    purineContent: 198,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "河海洄游鱼，嘌呤含量较高",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "鲟鱼",
    purineContent: 297,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "名贵鱼类，嘌呤含量高",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "鲻鱼",
    purineContent: 187,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "海水鱼，嘌呤含量较高",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "青蟹",
    purineContent: 152,
    category: "seafood",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "甲壳类海鲜，嘌呤含量较高",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "河虾",
    purineContent: 143,
    category: "seafood",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "淡水虾类，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },

  // 肉类 (Meat)
  {
    name: "猪肝",
    purineContent: 260,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "内脏类食物，嘌呤含量极高",
    source: "中国营养学会"
  },
  {
    name: "牛肝",
    purineContent: 288,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "内脏类食物，嘌呤含量极高",
    source: "中国营养学会"
  },
  {
    name: "羊肉（瘦）",
    purineContent: 182,
    category: "meat",
    riskLevel: "high",
    suggestion: "建议限制食用",
    description: "红肉类，嘌呤含量较高",
    source: "中国营养学会"
  },
  {
    name: "牛肉（瘦）",
    purineContent: 175,
    category: "meat",
    riskLevel: "high",
    suggestion: "建议限制食用",
    description: "红肉类，嘌呤含量较高",
    source: "中国营养学会"
  },
  {
    name: "猪肉（瘦）",
    purineContent: 130,
    category: "meat",
    riskLevel: "medium",
    suggestion: "适量食用，每餐不超过50g",
    description: "常见肉类，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "鸡肝",
    purineContent: 243,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "禽类内脏，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "鸭肉",
    purineContent: 138,
    category: "meat",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "禽类肉，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "鸡蛋",
    purineContent: 5,
    category: "meat",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "优质蛋白来源，嘌呤含量很低",
    source: "中国营养学会"
  },
  {
    name: "鹅肝",
    purineContent: 256,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "禽类内脏，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "兔肉",
    purineContent: 132,
    category: "meat",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "瘦肉类，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "鸭肝",
    purineContent: 243,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "禽类内脏，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "猪脑",
    purineContent: 150,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "内脏类，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "火腿",
    purineContent: 131,
    category: "meat",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "加工肉制品，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "猪心",
    purineContent: 241,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "内脏类，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "牛肚",
    purineContent: 165,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "内脏类，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "鸡胗",
    purineContent: 157,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "禽类内脏，嘌呤含量较高",
    source: "中国营养学会"
  },
  {
    name: "猪肾",
    purineContent: 218,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "内脏类，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "牛舌",
    purineContent: 160,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "特色部位，嘌呤含量较高",
    source: "中国营养学会"
  },
  {
    name: "鸽肉",
    purineContent: 147,
    category: "meat",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "禽类肉，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "猪小肠",
    purineContent: 240,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "内脏类，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "鸡胸肉",
    purineContent: 164,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "禽类瘦肉，嘌呤含量较高",
    source: "中国营养学会"
  },
  {
    name: "火鸡肉",
    purineContent: 150,
    category: "meat",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "禽类肉，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "鸭血",
    purineContent: 132,
    category: "meat",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "血制品，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "猪蹄",
    purineContent: 126,
    category: "meat",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "胶原蛋白丰富，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "鹅肉",
    purineContent: 165,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "禽类肉，嘌呤含量较高",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "鸡翅",
    purineContent: 138,
    category: "meat",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "禽类肉，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "猪排骨",
    purineContent: 132,
    category: "meat",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "含骨肉类，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "猪舌",
    purineContent: 158,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "特色部位，嘌呤含量较高",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "鸡爪",
    purineContent: 126,
    category: "meat",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "胶原蛋白丰富，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "鸭脖",
    purineContent: 145,
    category: "meat",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "特色部位，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "羊肝",
    purineContent: 289,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者禁食",
    description: "内脏类，嘌呤含量高",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "牛肉干",
    purineContent: 180,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "加工肉制品，嘌呤含量较高",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "腊肠",
    purineContent: 156,
    category: "meat",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "腌制肉制品，嘌呤含量较高",
    source: "中国食物成分表(第6版)"
  },

  // 豆类 (Beans)
  {
    name: "黄豆",
    purineContent: 190,
    category: "beans",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "富含植物蛋白，但嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "豆豉",
    purineContent: 142,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "发酵豆制品，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "豆腐",
    purineContent: 68,
    category: "beans",
    riskLevel: "medium",
    suggestion: "可少量食用，建议每餐不超过100g",
    description: "植物蛋白来源，嘌呤含量适中",
    source: "中国营养学会"
  },
  {
    name: "绿豆",
    purineContent: 128,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "常见豆类，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "豆腐乳",
    purineContent: 112,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "发酵豆制品，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "红豆",
    purineContent: 158,
    category: "beans",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "常见豆类，嘌呤含量较高",
    source: "中国营养学会"
  },
  {
    name: "豌豆",
    purineContent: 132,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "常见豆类，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "蚕豆",
    purineContent: 142,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "常见豆类，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "豆芽",
    purineContent: 96,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "新鲜豆芽，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "腐竹",
    purineContent: 127,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "豆制品，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "豆浆",
    purineContent: 45,
    category: "beans",
    riskLevel: "low",
    suggestion: "可以适量饮用",
    description: "豆制饮品，嘌呤含量较低",
    source: "中国营养学会"
  },
  {
    name: "黑豆",
    purineContent: 180,
    category: "beans",
    riskLevel: "high",
    suggestion: "痛风患者应限制食用",
    description: "常见豆类，嘌呤含量高",
    source: "中国营养学会"
  },
  {
    name: "豆干",
    purineContent: 92,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "豆制品，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "芸豆",
    purineContent: 140,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "常见豆类，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "毛豆",
    purineContent: 88,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "新鲜豆类，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "黄豆芽",
    purineContent: 85,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "新鲜豆芽，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "豆腐丝",
    purineContent: 95,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "豆制品，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "绿豆粉丝",
    purineContent: 45,
    category: "beans",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "淀粉制品，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "红薯粉",
    purineContent: 35,
    category: "beans",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "薯类制品，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "莜面",
    purineContent: 92,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "燕麦面，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "油条",
    purineContent: 28,
    category: "beans",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "面制品，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "薏仁",
    purineContent: 98,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "药食同源，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "红薯",
    purineContent: 42,
    category: "beans",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "薯类主食，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "粉条",
    purineContent: 25,
    category: "beans",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "淀粉制品，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "高粱",
    purineContent: 86,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "杂粮，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "粟米",
    purineContent: 82,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "杂粮，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "黑米",
    purineContent: 88,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "杂粮，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "紫米",
    purineContent: 82,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "杂粮，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "糙米",
    purineContent: 96,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "全谷物，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "绿豆粉丝",
    purineContent: 45,
    category: "beans",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "淀粉制品，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "红薯粉",
    purineContent: 35,
    category: "beans",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "薯类制品，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "莜面",
    purineContent: 92,
    category: "beans",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "燕麦面，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "油条",
    purineContent: 28,
    category: "beans",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "面制品，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },

  // 蔬菜类 (Vegetables)
  {
    name: "蘑菇",
    purineContent: 92,
    category: "vegetables",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "菌类食物，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "菠菜",
    purineContent: 70,
    category: "vegetables",
    riskLevel: "medium",
    suggestion: "可适量食用",
    description: "富含铁质，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "韭菜",
    purineContent: 32,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "叶菜类，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "白菜",
    purineContent: 28,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "常见蔬菜，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "竹笋",
    purineContent: 85,
    category: "vegetables",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "春季时蔬，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "茄子",
    purineContent: 21,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "常见蔬菜，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "胡萝卜",
    purineContent: 17,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "富含胡萝卜素，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "青椒",
    purineContent: 19,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "富含维生素C，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "冬瓜",
    purineContent: 16,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "水分充足，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "生菜",
    purineContent: 15,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "常见蔬菜，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "芹菜",
    purineContent: 34,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "富含纤维，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "南瓜",
    purineContent: 25,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "富含胡萝卜素，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "土豆",
    purineContent: 16,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "主食类蔬菜，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "莴笋",
    purineContent: 32,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "茎类蔬菜，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "豆角",
    purineContent: 28,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "豆类蔬菜，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "萝卜",
    purineContent: 14,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "根类蔬菜，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "茼蒿",
    purineContent: 38,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "叶菜类，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "油菜",
    purineContent: 35,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "叶菜类，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "韭黄",
    purineContent: 32,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "特色蔬菜，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "茭白",
    purineContent: 35,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "茎类蔬菜，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "荸荠",
    purineContent: 28,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "根茎类，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "莲藕",
    purineContent: 26,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "根茎类，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "苦瓜",
    purineContent: 28,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "特色蔬菜，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "丝瓜",
    purineContent: 24,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "瓜类蔬菜，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "芦笋",
    purineContent: 42,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "茎类蔬菜，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "西兰花",
    purineContent: 32,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "花菜类，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "洋葱",
    purineContent: 13,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "根类蔬菜，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "蒜苗",
    purineContent: 38,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "芽苗类，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "香菜",
    purineContent: 23,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "香草类，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "生姜",
    purineContent: 18,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "调味类，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "蒜头",
    purineContent: 15,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "调味类，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "茴香",
    purineContent: 38,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "香料类，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "芥菜",
    purineContent: 34,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "叶菜类，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "莴苣",
    purineContent: 28,
    category: "vegetables",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "叶菜类，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },

  // 主食类 (Staple Foods)
  {
    name: "大米",
    purineContent: 14,
    category: "grains",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "主食，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "面条",
    purineContent: 12,
    category: "grains",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "主食，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "馒头",
    purineContent: 25,
    category: "grains",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "面制品，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "燕麦",
    purineContent: 94,
    category: "grains",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "全谷物，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "玉米",
    purineContent: 29,
    category: "grains",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "粗粮，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "糯米",
    purineContent: 18,
    category: "grains",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "主食，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "小米",
    purineContent: 16,
    category: "grains",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "杂粮，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "荞麦",
    purineContent: 118,
    category: "grains",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "杂粮，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "薏仁",
    purineContent: 98,
    category: "grains",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "药食同源，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "红薯",
    purineContent: 42,
    category: "grains",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "薯类主食，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "粉条",
    purineContent: 25,
    category: "grains",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "淀粉制品，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "高粱",
    purineContent: 86,
    category: "grains",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "杂粮，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "粟米",
    purineContent: 82,
    category: "grains",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "杂粮，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "黑米",
    purineContent: 88,
    category: "grains",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "杂粮，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "紫米",
    purineContent: 82,
    category: "grains",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "杂粮，嘌呤含量中等",
    source: "中国营养学会"
  },
  {
    name: "糙米",
    purineContent: 96,
    category: "grains",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "全谷物，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "绿豆粉丝",
    purineContent: 45,
    category: "grains",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "淀粉制品，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "红薯粉",
    purineContent: 35,
    category: "grains",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "薯类制品，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "莜面",
    purineContent: 92,
    category: "grains",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "燕麦面，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "油条",
    purineContent: 28,
    category: "grains",
    riskLevel: "low",
    suggestion: "可以正常食用",
    description: "面制品，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "燕麦片",
    purineContent: 94,
    category: "grains",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "谷物，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "玉米面",
    purineContent: 56,
    category: "grains",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "谷物粉，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },

  // 水果类 (Fruits)
  {
    name: "苹果",
    purineContent: 14,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "富含膳食纤维，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "香蕉",
    purineContent: 12,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "富含钾，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "橙子",
    purineContent: 10,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "富含维生素C，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "葡萄",
    purineContent: 13,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "含糖量较高，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "梨",
    purineContent: 12,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "水分充足，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "西瓜",
    purineContent: 7,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "夏季水果，嘌呤含量很低",
    source: "中国营养学会"
  },
  {
    name: "草莓",
    purineContent: 14,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "浆果类水果，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "桃子",
    purineContent: 11,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "夏季水果，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "柿子",
    purineContent: 9,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "秋季水果，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "枣",
    purineContent: 19,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "补血佳果，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "猕猴桃",
    purineContent: 15,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "维C之王，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "山楂",
    purineContent: 12,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "开胃助消化，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "芒果",
    purineContent: 16,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "热带水果，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "荔枝",
    purineContent: 13,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "夏季水果，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "柚子",
    purineContent: 11,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "柑橘类，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "火龙果",
    purineContent: 18,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "热带水果，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "杨梅",
    purineContent: 16,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "时令水果，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "石榴",
    purineContent: 15,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "抗氧化水果，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "无花果",
    purineContent: 14,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "特色水果，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "杏",
    purineContent: 12,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "核果类，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "樱桃",
    purineContent: 17,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "小浆果，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "李子",
    purineContent: 14,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "核果类，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "蓝莓",
    purineContent: 12,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "抗氧化浆果，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "枇杷",
    purineContent: 11,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "时令水果，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "甘蔗",
    purineContent: 9,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "甜味水果，嘌呤含量低",
    source: "中国营养学会"
  },
  {
    name: "龙眼",
    purineContent: 19,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "补血水果，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "木瓜",
    purineContent: 16,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "消化酶丰富，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "榴莲",
    purineContent: 18,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "热带水果之王，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "椰子",
    purineContent: 15,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "热带水果，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "菠萝",
    purineContent: 14,
    category: "fruits",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "含水果酵素，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },

  // 调味品类 (Condiments)
  {
    name: "酱油",
    purineContent: 85,
    category: "condiments",
    riskLevel: "medium",
    suggestion: "适量使用",
    description: "发酵调味品，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "蚝油",
    purineContent: 92,
    category: "condiments",
    riskLevel: "medium",
    suggestion: "适量使用",
    description: "海鲜调味品，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "豆瓣酱",
    purineContent: 86,
    category: "condiments",
    riskLevel: "medium",
    suggestion: "适量使用",
    description: "发酵调味品，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "味精",
    purineContent: 0,
    category: "condiments",
    riskLevel: "low",
    suggestion: "适量使用",
    description: "谷氨酸钠，不含嘌呤",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "料酒",
    purineContent: 8,
    category: "condiments",
    riskLevel: "low",
    suggestion: "可以正常使用",
    description: "调味酒，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "甜面酱",
    purineContent: 76,
    category: "condiments",
    riskLevel: "medium",
    suggestion: "适量使用",
    description: "发酵调味品，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },

  // 饮品类 (Beverages)
  {
    name: "啤酒",
    purineContent: 145,
    category: "beverages",
    riskLevel: "high",
    suggestion: "痛风患者应避免饮用",
    description: "发酵酒类，嘌呤含量较高",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "白酒",
    purineContent: 12,
    category: "beverages",
    riskLevel: "low",
    suggestion: "少量饮用",
    description: "蒸馏酒，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "红茶",
    purineContent: 32,
    category: "beverages",
    riskLevel: "low",
    suggestion: "可以适量饮用",
    description: "茶类饮品，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "绿茶",
    purineContent: 28,
    category: "beverages",
    riskLevel: "low",
    suggestion: "可以适量饮用",
    description: "茶类饮品，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "咖啡",
    purineContent: 21,
    category: "beverages",
    riskLevel: "low",
    suggestion: "可以适量饮用",
    description: "咖啡因饮品，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "可乐",
    purineContent: 12,
    category: "beverages",
    riskLevel: "low",
    suggestion: "少量饮用",
    description: "碳酸饮料，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },

  // 坚果类 (Nuts)
  {
    name: "花生",
    purineContent: 79,
    category: "nuts",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "常见坚果，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "核桃",
    purineContent: 68,
    category: "nuts",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "补脑坚果，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "杏仁",
    purineContent: 52,
    category: "nuts",
    riskLevel: "medium",
    suggestion: "适量食用",
    description: "养生坚果，嘌呤含量中等",
    source: "中国食物成分表(第6版)"
  },
  // 乳制品类 (Dairy)
  {
    name: "牛奶",
    purineContent: 8,
    category: "dairy",
    riskLevel: "low",
    suggestion: "可以自由饮用",
    description: "优质蛋白来源，嘌呤含量很低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "酸奶",
    purineContent: 10,
    category: "dairy",
    riskLevel: "low",
    suggestion: "可以自由食用",
    description: "发酵乳制品，嘌呤含量很低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "奶酪",
    purineContent: 16,
    category: "dairy",
    riskLevel: "low",
    suggestion: "可以适量食用",
    description: "浓缩乳制品，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "黄油",
    purineContent: 0,
    category: "dairy",
    riskLevel: "low",
    suggestion: "可以适量使用",
    description: "乳脂肪，几乎不含嘌呤",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "奶油",
    purineContent: 2,
    category: "dairy",
    riskLevel: "low",
    suggestion: "可以适量使用",
    description: "乳制品，嘌呤含量很低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "炼乳",
    purineContent: 12,
    category: "dairy",
    riskLevel: "low",
    suggestion: "可以适量食用",
    description: "浓缩乳制品，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "乳酪",
    purineContent: 14,
    category: "dairy",
    riskLevel: "low",
    suggestion: "可以适量食用",
    description: "发酵乳制品，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  },
  {
    name: "奶粉",
    purineContent: 20,
    category: "dairy",
    riskLevel: "low",
    suggestion: "可以适量食用",
    description: "脱水乳制品，嘌呤含量低",
    source: "中国食物成分表(第6版)"
  }
];

module.exports = foods; 