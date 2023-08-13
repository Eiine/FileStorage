import { Router } from "express";
import {fileUpload} from "../controller/fileUpload.js"
const router=Router();


router.post("/",fileUpload )



export default router;