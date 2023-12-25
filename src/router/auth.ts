import * as express from "express";

import { loginController, registerController } from "../controllers/auth.controllers";
import { loginRequest, registerRequest } from "../middleware/auth.middleware";
import validateRequest from "../middleware/validateRequest";
const router = express.Router();

router.post("/register", validateRequest(registerRequest), registerController);
router.post("/login", validateRequest(loginRequest), loginController);

export default router;
