import * as createError from "http-errors";

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
