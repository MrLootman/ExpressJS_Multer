import type { RequestHandler } from "express";
import userRepository from "./userRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const user = await userRepository.create(req.body);

    if (user) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
  }
};

export default { add };
