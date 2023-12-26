import { NextFunction, Request, Response } from "express";
import { BadRequest, UnprocessableEntity } from "http-errors";

import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { UserRepo, createTokenUser } from "../service/users.service";
import { newRequest } from "../types";
import { bcryptCompare } from "../common/bcryptFuc";
import { statusObj } from "../config/statusMsg";

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
      const token = await createTokenUser({ id: result.id });
      return res.status(201).json(token);
    }
  } catch {
    next(BadRequest());
  }
};

export const loginController = async (
  req: newRequest<User>,
  res: Response,
  next: NextFunction
) => {
  const { existsData } = req;
  const { password } = req.body;
  const hashPwd = bcryptCompare(password, existsData?.password);
  if (hashPwd) {
    const token = await createTokenUser({ id: existsData.id });
    return res.status(200).json(token);
  }
  next(UnprocessableEntity(statusObj.user.loginError));
};

export const verifyTokenController = async (
  req: newRequest<User>,
  res: Response
) => {
  const { existsData } = req;
  return res.status(200).json(existsData);
};

export const logoutController = async (
  req: newRequest<User>,
  res: Response,
  next: NextFunction
) => {
  const { existsData } = req;

  if (existsData?.id) {
    await UserRepo.update(
      {
        id: existsData?.id,
      },
      {
        token: null,
      }
    );

    return res.status(200).json()
  }

  next(BadRequest());
};
