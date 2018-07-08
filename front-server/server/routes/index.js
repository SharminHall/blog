const router = require('koa-router')();
const user_router = require('./modules/user_router');
const article_router = require('./modules/article_router');

router.use('/api', user_router.routes(), user_router.allowedMethods());
router.use('/api', article_router.routes(), article_router.allowedMethods());

module.exports = router;