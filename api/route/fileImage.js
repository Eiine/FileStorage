import { Router } from "express";
import {uploadImage} from "../controller/fileImage.js"
const router=Router();

router.post("/",uploadImage)


export default router;