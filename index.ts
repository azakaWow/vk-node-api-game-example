import fastify from "fastify";
import { updatePlayerScore } from "./api";
import { SERVER_PORT, IS_DEVELOPMENT } from "./config";
import { loggerConfig, corsConfig } from './serverConfig';
import fastifyCors from 'fastify-cors';

const server = fastify(loggerConfig);

if (IS_DEVELOPMENT) {
  server.register(fastifyCors, corsConfig)
}

server.post("/api/updatePlayerScore", updatePlayerScore);

server.listen(SERVER_PORT, (err) => {
  if (err) {
    console.log(err)
    process.exit(1);
  }
  console.log(`Server started at port ${SERVER_PORT}`)
});
