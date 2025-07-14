import { Router } from "express";
import {authCallback} from "../controller/auth.Contoller.js";
let router = Router();

router.post("/authCallback",authCallback);

export default router;