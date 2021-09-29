import fetch from "node-fetch";
import { API_SECRET, SERVER_ACCESS_TOKEN } from "../config";

function makeScoreUrl(score: number, userId: string) {
  // More details regaring the method can be found here https://vk.com/dev/secure.addAppEvent?params[user_id]=15698286&params[activity_id]=2&params[value]=21&params[v]=5.131
  return `https://api.vk.com/method/secure.addAppEvent?user_id=${userId}&activity_id=2&value=${score}&access_token=${SERVER_ACCESS_TOKEN}&client_secret=${API_SECRET}&v=5.130`;
}

export default async function setScore(
  score: number,
  userId: string,
) {
  const url = makeScoreUrl(score, userId);

  const response = await fetch(url, {
    method: "POST",
  });

  const result: any = await response.json();

  if (result.error) {
    throw new Error(
      `CODE: ${result.error?.error_code}, MESSAGE: ${result.error?.error_msg}, JSON: ${JSON.stringify(result)}`
    );
  }
  if (response.ok && response.status === 200) {
    return result;
  } else {
    throw new Error(result);
  }
}
