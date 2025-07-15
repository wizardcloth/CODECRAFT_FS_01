import { Router } from "express";
import { getUsersEmail } from "../controller/User.controller.js";
import { getUsersGoogle } from "../controller/User.controller.js";
import {protectedRoute} from "../middleware/auth.middleware.js";
const router = Router();

router.get("/google",getUsersGoogle);
router.get("/email",getUsersEmail);

export default router;