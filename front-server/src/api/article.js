import request from '@/util/request'

export const fetchArticle = (id) => request({ url: `/article/getArticle?id=${id}`, method: 'GET'})
export const pushArticle = (data) => request({ url: '/article/pushArticle', method: 'POST', data })
export const updateArticle = (data) => request({ url: '/article/updateArticle', method: 'POST', data })

export const fetchArticleList = () => request({ url: '/article/getArticleList', method: 'GET' })
