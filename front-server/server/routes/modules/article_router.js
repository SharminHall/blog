const router = require('koa-router')();
const article_controller = require('../../app/controllers/article_controller');

router.get('/article/getArticleList', article_controller.getArticleList);
router.get('/article/getArticle', article_controller.getArticle);
router.post('/article/addArticle', article_controller.addArticle);

module.exports = router;
