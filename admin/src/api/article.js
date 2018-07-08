import request from '@/util/request'

export const fetchArticle = (id) => request({ url: `/article/getArticle?${id}`, method: 'GET' })
export const addArticle = (data) => request({ url: '/article/addArticle', method: 'POST', data })
export const updateArticle = (data) => request({ url: '/article/updateArticle', method: 'POST', data })

export const fetchArticleList = () => request({ url: '/article/getArticleList', method: 'GET' })
