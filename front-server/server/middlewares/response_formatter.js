const ApiError = require('../app/error/ApiError');

const res_formatter = async (ctx, next) => {
  if (ctx.body) {
    ctx.body = {
      status: 200,
      message: 'success',
      data: ctx.body
    }
  } else {
    ctx.body = {
      status: 200,
      message: 'success',
      data: null
    }
  }
}

// 针对某类url进行处理
const url_filter = parttern => (
  async (ctx, next) => {
    let reg = new RegExp(parttern);
    try {
      await next();
    } catch (error) {
      if (error instanceof ApiError && reg.test(ctx.originalUrl)) {
        ctx.body = {
          status: error.status,
          message: error.message
        }
      }
      throw error;
    }
    if (reg.test(ctx.originalUrl)) {
      res_formatter(ctx)
    }
  }
)

module.exports = url_filter;