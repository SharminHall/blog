/* eslint-disable */

const apidocList = [
  {
    cname: '用户',
    ename: 'user',
    children: [
      { name: 'userLogin', cname: '用户登录' },
			{ name: 'userRegister', cname: '用户注册' }
    ]
  }
]

const apidoc = {
  state: {
    apidocList
  }
}

export default apidoc
