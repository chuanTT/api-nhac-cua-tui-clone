import { FindOneOptions, FindOptionsWhere } from "typeorm";
import { NextFunction, Request, Response } from "express";

import { UserRepo } from "../service/users.service";
import { User } from "../entity/User";

type existsUserMiddlewareType = Omit<FindOneOptions<User>, "where"> & {
  where?: FindOptionsWhere<User>;
};

export const existsUserMiddleware =
  ({
    select = ["id"]
  }: existsUserMiddlewareType) =>
  async (req: Request, res: Response, next: NextFunction) => {
    await UserRepo.findOne({
      select,
    });
  };
