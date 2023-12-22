import { config } from "dotenv";
config();
import { AppDataSource } from "./data-source";
import app from "./server";

const port = process.env.PORT || 3002;

AppDataSource.initialize()
  .then(() => {
  })
  .catch((error) => console.log(error));
  app.listen(port, () => console.log(`server listen ${port}`));


