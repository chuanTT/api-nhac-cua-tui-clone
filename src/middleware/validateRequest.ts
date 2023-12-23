import { UnprocessableEntity } from "http-errors";
import { NextFunction, Request, Response } from "express";

import { ConfigError } from "../common/validate";
import { unlinkFile } from "../common/uploadFile";
import { customError, isEmptyObj } from "../common/functions";
import { configValidateType } from "../types";

const validateRequest =
  (LoadConfig: configValidateType) =>
  (req: Request, _res: Response, next: NextFunction) => {
    let objErorr = {};

    for (const key in LoadConfig) {
      const object = Object.assign({}, req?.[key]);
      for (const keyValue in LoadConfig[key]) {
        // eslint-disable-next-line no-prototype-builtins
        if (object.hasOwnProperty(keyValue)) {
          const isError = ConfigError(
            keyValue,
            object[keyValue],
            LoadConfig[key][keyValue],
            object
          );
          if (isError[keyValue]) {
            objErorr = { ...objErorr, ...isError };
          }
        } else {
          !LoadConfig[key][keyValue]?.isDisableKey &&
            (objErorr = {
              ...objErorr,
              [keyValue]: `Cần phải truyền lên ${keyValue}`,
            });
        }
      }
    }

    if (isEmptyObj(objErorr)) {
      next();
    } else {
      if (req?.file?.filename) {
        unlinkFile(req?.file?.path);
      } else {
        if (Array.isArray(req?.files)) {
          req?.files?.forEach((file: any) => {
            unlinkFile(file?.path);
          });
        }
      }

      next(
        customError(UnprocessableEntity(), {
          errors: objErorr,
        })
      );
    }
  };

export default validateRequest;
