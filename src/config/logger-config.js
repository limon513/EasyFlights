const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, errors } = format;

const myFormat = printf(({ level, message, label, timestamp, errors }) => {
    return `${timestamp} [${label}] ${level}: ${message} : ${JSON.stringify(errors)}`;
});

const logger = createLogger({
  format: combine(
    timestamp({
        format: "YYYY-MM-DD HH:mm:ss"
    }),
    myFormat
  ),
  transports: [new transports.Console(),new transports.File({filename:'serverlog.md'})]
});

module.exports = logger;