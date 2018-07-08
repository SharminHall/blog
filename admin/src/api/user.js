import request from '@/util/request'

export const fetchUserInfo = () => request({ url: '/user/getUser', method: 'GET' })
