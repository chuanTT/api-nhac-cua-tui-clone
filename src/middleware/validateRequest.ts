import { UnprocessableEntity } from "http-errors";
import { NextFunction, Response } from "express";

import { ConfigError } from "../common/validate";
import { unlinkFile } from "../common/uploadFile";
import { isEmptyObj } from "../common/functions";
import { configValidateType } from "../types";

const validateRequest =
  (LoadConfig: configValidateType) =>
  (req: any, _res: Response, next: NextFunction) => {
    let arrErorr = {};

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
            arrErorr = { ...arrErorr, ...isError };
          }
        } else {
          !LoadConfig[key][keyValue]?.isDisableKey &&
            (arrErorr = {
              ...arrErorr,
              [keyValue]: `Cần phải truyền lên ${keyValue}`,
            });
        }
      }
    }

    if (isEmptyObj(arrErorr)) {
      next();
    } else {
      if (req?.file?.filename) {
        unlinkFile(req?.file?.path);
      }

      if (req?.files) {
        if (Array.isArray(req?.files)) {
          req?.files?.forEach((file: any) => {
            unlinkFile(file?.path);
          });
        }
      }
      next(UnprocessableEntity());
    }
  };

export default validateRequest;
