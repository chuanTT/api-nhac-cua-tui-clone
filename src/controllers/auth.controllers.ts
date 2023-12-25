import { NextFunction, Request, Response } from "express";
import { BadRequest } from "http-errors";

import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { createToken } from "../middleware/verifyToken.middleware";
import { UserRepo } from "../service/users.service";

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user_name, email, password } = req.body;

  try {
    const user = new User();
    user.user_name = user_name;
    user.email = email;
    user.password = password;
    const result = await AppDataSource.manager.save(user);

    if (result?.id) {
      const token = createToken({ id: result.id });
      user.token = token;
      await UserRepo.update(
        {
          id: result.id,
        },
        {
          token,
        }
      );

      return res.status(201).json({ token });
    }
  } catch {
    next(BadRequest());
  }
};

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const { user_name, email, password } = req.body;

    try {

    } catch {

    }

};
