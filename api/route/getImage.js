import { Router } from "express";
import {getImage} from "../controller/fileImage.js"
const router=Router();

router.get("/:user/:name",getImage)


export default router