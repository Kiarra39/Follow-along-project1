export default class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        Error.captureStackTrace();
        this.statusCode=statusCode;
    }
}
