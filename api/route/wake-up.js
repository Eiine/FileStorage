import { Router } from "express";
import { wakeUp } from "../controller/wake-up.js";
const route = Router();

route.post("/", wakeUp);

export default route;
