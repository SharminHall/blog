const user = {
  'userLogin': {
    name: '用户登录',
    desc: '用户登录接口',
    url: '/user/login',
    method: 'POST',
    reqParams: [
      {name: 'username', require: true, type: 'string', explain: '用户名'}
    ],
    resParams: {
      data: true,
      meta: {
        status: '状态值',
        message: '消息'
      }
    }
  },
  'userRegister': {
    name: '用户注册',
    desc: '用户注册接口',
    url: '/user/register',
    method: 'POST',
    reqParams: [
      {name: 'username', require: false, type: 'string', explain: '用户名'}
    ],
    resParams: {
      data: {
        name: '姓名',
        password: '密码'
      },
      meta: {
        status: '状态值',
        message: '消息'
      }
    }
  }
}

export default user
