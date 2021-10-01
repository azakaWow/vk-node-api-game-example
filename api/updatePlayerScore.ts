import checkVkMD5 from "../auth/checkVkMD5";
import { setScore } from "../vkApi";

interface IupdatePlayerScore {
  userId: string;
  score: number;
  authKey: string;
}

export default async function updatePlayerScore(request, reply) {
  try {
    const {
      userId,
      score,
      authKey
    }: IupdatePlayerScore = request.body;


    request.log.info(
      `/api/updatePlayerScore: userId=${userId}, score=${score}`
    );

    // ID should always be convertible to Integer
    if (isNaN(+userId)) {
      throw new Error("UserId is non valid" + userId);
    }

    // Checking if score is a valid integer
    if (isNaN(+score)) {
      throw new Error("Score must be an Integer " + score);
    }

    // basic vk md5 auth
    if (!checkVkMD5(authKey, userId)) {
      return reply.code(403).send();
    }



    await setScore(score, userId);


    return reply.code(200).send();
  } catch (e) {
    request.log.error(e);
    return reply.code(500).send();
  }
}
