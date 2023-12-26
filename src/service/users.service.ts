import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { createToken } from "../middleware/verifyToken.middleware";

export const UserRepo = AppDataSource.getRepository(User);


export const createTokenUser = async (data: any) => {
  const token = createToken(data);
  await UserRepo.update(
    {
      id: data.id,
    },
    {
      token,
    }
  );
  return {
    token,
  };
};
