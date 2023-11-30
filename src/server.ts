import * as express from "express";
import helmet from "helmet";
const app = express();

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

export default app
