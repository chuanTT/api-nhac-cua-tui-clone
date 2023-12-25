import * as jwt from "jsonwebtoken";

export const createToken = (data: any, expiresIn = process.env.EXPIRESIN) => {
  const SECRET_KEY = process.env.SECRET_KEY;
  let token = "";
  if (SECRET_KEY) {
    token = jwt.sign(data, process.env.SECRET_KEY ?? "", { expiresIn });
  }
  return token;
};
