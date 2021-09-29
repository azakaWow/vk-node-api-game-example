import dotenv from 'dotenv';
const result = dotenv.config();

if (result.error) {
  throw result.error;
}

export const NODE_ENV: string = result.parsed!.NODE_ENV;
export const SERVER_PORT: number = +result.parsed!.SERVER_PORT;
export const APP_ID: number = +result.parsed!.APP_ID;
export const API_SECRET: string = result.parsed!.API_SECRET;
export const IS_DEVELOPMENT: boolean = NODE_ENV === 'development';
export const IS_PRODUCTION: boolean = NODE_ENV === 'production';
export const LOGS_PATH: string = result.parsed!.LOGS_PATH;
export const SERVER_ACCESS_TOKEN: string = result.parsed!.SERVER_ACCESS_TOKEN;
