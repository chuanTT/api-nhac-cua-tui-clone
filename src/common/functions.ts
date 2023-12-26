import * as createError from "http-errors";
import { FindOptionsWhere } from "typeorm";

export function chunkArray(myArray: any[], chunk_size: number) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    const myChunk = myArray.slice(index, index + chunk_size);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
}

export const isEmptyObj = (obj: any) => {
  let emty = true;
  if (obj) {
    emty = Object.keys(obj).length === 0 && obj.constructor === Object;
  }
  return emty;
};

export const customError = (
  erorr: any,
  obj: {
    errors?: any;
  }
) => createError(erorr.status || 500, erorr.message, obj);

export const funcWhereFind = <T>({
  where,
  obj,
}: {
  obj: any;
  where: (keyof T)[] | (keyof T)[][];
}): FindOptionsWhere<T> | FindOptionsWhere<T>[] => {
  const isCheck = typeof where?.[0] === "string";

  const newWhere: FindOptionsWhere<T> = {};
  const newWhereArr: FindOptionsWhere<T>[] = [];

  where.forEach((keys: any) => {
    if (!Array.isArray(keys)) {
      const value = obj?.[keys];
      if (value) {
        newWhere[keys] = value;
      }
    } else {
      const objKey: FindOptionsWhere<T> = {};
      keys.map((key: any) => {
        const value = obj?.[key];
        if (value) {
          objKey[key] = value;
        }
      });
      newWhereArr.push(objKey);
    }
  });

  return isCheck ? newWhere : newWhereArr;
};
