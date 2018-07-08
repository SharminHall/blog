/**
 * 自定义API异常
 */
const ApiErrorName = require('./ApiErrorNames');

class ApiError extends Error {

    constructor( error_name, error_status, error_message ){
        super();

        let error_info = ApiErrorName.getErrorInfo(error_name)

        this.name = error_name;
        this.status = error_info.status;
        this.message = error_info.message;
    }
}

module.exports = ApiError;