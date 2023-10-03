import { Router } from "express";
import fileUploadRouter from "../route/fileUpload.js";
import fileUimageRouter from "./fileImage.js";
import getImageRouter from "./getImage.js";
import getFileRouter from "./getFile.js";
import videoUploadRouter from "./videoUpload.js";
import wakeUpRoute from "./wake-up.js";
const router = Router();

router.use("/wakeup", wakeUpRoute);
router.use("/fileUpload", fileUploadRouter);
router.use("/fileUimage", fileUimageRouter);
router.use("/getImage", getImageRouter);
router.use("/getFile", getFileRouter);
router.use("/VideoUpload", videoUploadRouter);

export default router;
