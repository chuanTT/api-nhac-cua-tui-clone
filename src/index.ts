import { config } from "dotenv";
config();
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
