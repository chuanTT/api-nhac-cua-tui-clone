import { NextFunction, Response } from "express";
import * as jwt from "jsonwebtoken";
import { Unauthorized } from "http-errors";
import { UserRepo } from "../service/users.service";
import { newRequest } from "../types";
import { User } from "../entity/User";

export const createToken = (data: any, expiresIn = process.env.EXPIRESIN) => {
  const SECRET_KEY = process.env.SECRET_KEY;
  let token = "";
  if (SECRET_KEY) {
    token = jwt.sign(data, process.env.SECRET_KEY ?? "", { expiresIn });
  }
  return token;
};

const verifyTokenFuc = (token: string) => {
  let data = {};
  const SECRET_KEY = process.env.SECRET_KEY;
  if (SECRET_KEY) {
    data = jwt.verify(token, process.env.SECRET_KEY ?? "");
  }
  return data;
};

const getTokenFuc = (req: any): string => {
  const authorization = req.header("Authorization");
  const token = authorization && authorization.split(" ")[1];
  return token;
};

export const verifyTokenMiddleware = async (
  req: newRequest<User>,
  res: Response,
  next: NextFunction
) => {
  const token = getTokenFuc(req);

  if (!token) {
    return next(Unauthorized());
  }

  try {
    const data: any = verifyTokenFuc(token);
    const result = await UserRepo.findOne({
      select: ["id"],
      where: {
        id: data?.id,
        token
      },
    });

    if (result) {
      req.existsData = result;
      req.params.id = result.id.toString();
      return next();
    }
  } catch {}

  next(Unauthorized());
};
