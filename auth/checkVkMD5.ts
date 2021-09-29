const md5 = require("md5");
const { APP_ID, API_SECRET } = require("../config");

export default function checkVkMD5(authKey: string, userId: string): boolean {
  return authKey === md5(`${APP_ID}_${userId}_${API_SECRET}`);
};
