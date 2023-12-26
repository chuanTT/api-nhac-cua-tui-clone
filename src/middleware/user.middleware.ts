import { FindOneOptions } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { BadRequest, UnprocessableEntity } from "http-errors";

import { UserRepo } from "../service/users.service";
import { User } from "../entity/User";
import { funcWhereFind } from "../common/functions";
import { newRequest } from "../types";

type keyUserEntity = keyof User;

type existsUserMiddlewareType = Omit<FindOneOptions<User>, "where"> & {
  where?: keyUserEntity[][] | keyUserEntity[];
  msgError?: string;
  isExists?: boolean;
};

export const existsUserMiddleware =
  ({
    select = ["id"],
    where = ["user_name"],
    msgError = "Tài khoản đã tồn tại",
    isExists,
  }: existsUserMiddlewareType) =>
  async (req: newRequest<User>, res: Response, next: NextFunction) => {
    const newObject = {
      ...Object.assign({}, req.body),
      ...req.params,
      ...req.query,
    };

    const newWhere = funcWhereFind({
      where,
      obj: newObject,
    });

    try {
      const result = await UserRepo.findOne({
        select,
        where: newWhere,
        cache: 1000,
      });

      if (result) {
        req.existsData = result;
        !isExists ? next(UnprocessableEntity(msgError)) : next();
      } else {
        !isExists ? next() : next(UnprocessableEntity(msgError));
      }

      return;
    } catch {}
    next(BadRequest());
  };
