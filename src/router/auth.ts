import * as express from "express";

import {
  loginController,
  logoutController,
  registerController,
  verifyTokenController,
} from "../controllers/auth.controllers";
import { loginRequest, registerRequest } from "../middleware/auth.middleware";
import validateRequest from "../middleware/validateRequest";
import { existsUserMiddleware } from "../middleware/user.middleware";
import { statusObj } from "../config/statusMsg";
import { verifyTokenMiddleware } from "../middleware/verifyToken.middleware";
const router = express.Router();

router.post(
  "/register",
  validateRequest(registerRequest),
  existsUserMiddleware({}),
  registerController
);
router.post(
  "/login",
  validateRequest(loginRequest),
  existsUserMiddleware({
    select: ["id", "password"],
    isExists: true,
    msgError: statusObj.user.loginError,
  }),
  loginController
);

router.get(
  "/verify-token",
  verifyTokenMiddleware,
  existsUserMiddleware({
    select: [
      "id",
      "full_name",
      "birthday",
      "avatar",
      "birthday",
      "gender",
      "view_playlist",
      "view_profile",
      "created_at",
    ],
    isExists: true,
    msgError: statusObj.user.loginError,
  }),
  verifyTokenController
);

router.get("/logout", verifyTokenMiddleware, logoutController)

export default router;
