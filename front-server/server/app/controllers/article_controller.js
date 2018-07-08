const mongooseDB = require('../../db/db.js');
const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');

exports.getArticle = async ( ctx, next ) => {
    console.log('--------------------- get article ---------------------')
    let query = ctx.request.query;
    try {
        let result = await mongooseDB.article.findOne({id: query.id}).exec()
        console.log(result)
        ctx.body = result
    } catch (e) {
        ctx.body = e
    }
}

exports.getArticleList = async ( ctx, next ) => {
    console.log('--------------------- get articlelist ---------------------')
    try {
        let result = await mongooseDB.article.find({}).exec()
        ctx.body = result
    } catch (e) {
        ctx.body = e
    }
}

exports.addArticle = async (ctx, next) => {
    let body = ctx.request.body;
    console.log('--------------------- add article ---------------------')
    let newArticle = new mongooseDB.article({
        id: 0,
        title: body.title,
        tag: body.tag,
        content: body.content,
        pushTime: body.pushTime,
        updateTime: body.updateTime,
        commentNum: 0
    })

    try {
        await newArticle.save().then(() => {
            return Promise.resolve('OK')
        })
        ctx.body = ''
    } catch (e) {
        ctx.body = e
    }
}
