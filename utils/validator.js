export const validator = {
  // 检测类型
  types: {},
  // 提醒消息
  messages: [],
  // 当前校验配置
  config: {},
  // 接口方法
  // data为键值对
  validate: function (data) {
    var i, msg, type, checker, resultOk;
    // 重置message
    this.message = [];
    for (i in data) {
      if (data.hasOwnProperty(i)) {
        type = this.config[i];
        checker = this.types[type];

        if (!type) {
          continue;
        }
        if (!cheker) {
          throw {
            name: 'ValidationError',
            message: 'No handler to validate type' + type
          };
        }
        resultOk = checker.validate(data[i]);
        if (!resultOk) {
          msg = 'Invalid value for *' + i + '*,' + checker.instructions;
          this.messages.push(msg);
          return this.hasErrors();
        }
      }
    }
    // 一次性过所有types 校验
    // return this.hasErrors();
  },
  hasErrors: function () {
    return this.message.length !== 0;
  }
}

// 非空值校验
validator.types.isNoEmpty = {
  validate: function (value) {
    return value !== '';
  }
}

var data = {
  {
    value: 1235,
    type: 'isNoEmpty',
    msg: '姓名不能为空'
  },
  {
    value: '411146566326',
    type: 'isVicode',
    msg: '身份证格式不正确'
  }
}

validator.validate(data);