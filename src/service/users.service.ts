import { AppDataSource } from "../data-source"
import { User } from "../entity/User"

export const UserRepo = AppDataSource.getRepository(User)


