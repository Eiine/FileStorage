import { Router } from "express";
import fileUploadRouter from "../route/fileUpload.js"
import fileUimageRouter from "./fileImage.js"
import getImage from "./getImage.js"
const router=Router()

router.use("/fileUpload", fileUploadRouter);
router.use("/fileUimage", fileUimageRouter);
router.use("/getImage", getImage);



export default router