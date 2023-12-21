import * as express from "express";
const router = express.Router();

router.post("/register", (req, res) => {
  const { user_name, email, password } = req.body;
  console.log(user_name);
});

export default router;
