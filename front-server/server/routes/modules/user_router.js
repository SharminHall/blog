const router = require('koa-router')();
const user_controller = require('../../app/controllers/user_controller');

router.get('/user/getUser', user_controller.getUser);
router.post('/user/regesterUser', user_controller.registerUser);

module.exports = router;
