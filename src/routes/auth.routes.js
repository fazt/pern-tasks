import { Router } from "express";
import {
  profile,
  signin,
  signout,
  signup,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/signin", signin);

router.post("/signup", signup);

router.post("/signout", signout);

router.get("/profile", profile);

export default router;
