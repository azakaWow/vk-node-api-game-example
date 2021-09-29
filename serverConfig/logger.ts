import { LOGS_PATH } from '../config'

const makeLogDate = () => {
  const date = new Date();
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}


export const loggerConfig = {
  logger: {
    redact: ["req.headers.authorization"],
    file: `${LOGS_PATH}/logs_${makeLogDate()}.txt`,
    timestamp: () => `,"time":"${new Date().toISOString()}"`,
    serializers: {
      res(reply) {
        return {
          statusCode: reply.statusCode,
        };
      },
      req(request) {
        return {
          method: request.method,
          hostname: request.hostname,
          remoteAddress: request.ip,
          remotePort: request.socket.remotePort
        };
      },
    },
  },
};
