import * as express from "express";
import helmet from "helmet";
import * as cors from "cors";
import * as createError from "http-errors";
import routerPage from "./router"

const app = express();

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routerPage)

app.use((_req, _res, next) => {
  next(createError.NotFound());
});

const errorHandler: express.ErrorRequestHandler = (err, req, res, next) => {
  const code = err.status || 500
  res.status(code).json({
    status: code,
    message: err.message || "Internal Server Error",
    errors: err?.errors || null
  })
};

app.use(errorHandler);

export default app;
