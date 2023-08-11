import { Router } from "express";
import fileUploadRouter from "../route/fileUpload.js"
import fileUimageRouter from "./fileImage.js"
const router=Router()

router.use("/fileUpload", fileUploadRouter);
router.use("/fileUimage", fileUimageRouter);




export default router