class AppError extends Error{
   constructor(message,statusCode){
    super(message);
    this.statusCode = statusCode;
    this.errExplain = message;
   }
}

module.exports = AppError;