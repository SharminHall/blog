
const ApiErrorNames = {};

ApiErrorNames.UNKONE_ERROR = 'unknowError';
ApiErrorNames.USER_NOT_EXIST = 'user_not_exist';

const error_map = new Map();

error_map.set(ApiErrorNames.UNKONE_ERROR, { status: -1, message: '未知错误' });
error_map.set(ApiErrorNames.USER_NOT_EXIST, { status: 101, message: '用户不存在' });

ApiErrorNames.getErrorInfo = (error_name) => {

  let error_info;

  if (error_name) {
    error_info = error_map.get(error_name);
  }
  if (!error_info) {
    error_name = 'unknowError';
    error_info = error_map.get(error_name);
  }

  return error_info;
}

module.exports = ApiErrorNames;
