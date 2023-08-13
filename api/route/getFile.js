import { Router } from "express";
import {getFile} from "../controller/fileUpload.js"

const router=Router()

router.get("/:user/:name",getFile)

export default router;