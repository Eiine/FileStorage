import { Router } from "express";
import {videoUpload} from "../controller/videoupload.js"
const router=Router();

router.post("/",videoUpload)


export default router;