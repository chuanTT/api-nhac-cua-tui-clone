import { registerRequest } from "../middleware/auth.middleware";
import validateRequest from "../middleware/validateRequest";
import * as express from "express";
const router = express.Router();

router.post("/register", validateRequest(registerRequest), (req, res) => {
  const { user_name, email, password } = req.body;
  console.log(user_name)
});

export default router;
