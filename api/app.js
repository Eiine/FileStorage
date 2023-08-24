import express from "express"
import routerGeneral from "./route/index.js"
import fileUpload from "express-fileupload";
import dotenv from "dotenv"
import cors from "cors"
import {createJsonApi,saveQueryBack} from "send-http-axios-doc"
import {rootPath, uploadPath} from "./utils/alias.js"
import { garbageCollector } from "./utils/garbageCollector.js";
import { jobs } from "./utils/jobs.js";
dotenv.config()
const app=express();
const port=3000


//Config Server
app.use(express.static("send"))
app.use(express.json())
app.use(cors("*"))
//Middlewares
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : uploadPath
    
}));

//RouteServer

app.use(routerGeneral)


//Doumentation
createJsonApi(app,port)
app.use("/saveQuery",saveQueryBack)
//jobs clear server
jobs()
//Server Listening

app.listen(port,()=>{
    console.log(`Server run in port: ${port}`);
})