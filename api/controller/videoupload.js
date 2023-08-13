import {uploadPath} from "../utils/alias.js"
import {garbageCollector} from "../utils/garbageCollector.js"
import {createFolder} from "../utils/createFolder.js"
import { organizeFile } from "../utils/organizeFile.js";
import { v4 as uuidv4 } from 'uuid';
import path from "path";
import fs from "fs";

const videoUpload=async(req,res)=>{
 
    const {file}=req.files;
    const user=uuidv4();
    const extencionSafe=[".mp4",".avi",".mp3","ogg","mpge"];
    const safe= extencionSafe.includes(path.extname(file.name));
    if(!safe){
        //Clear server file error
        garbageCollector()
       return res.status(500).send({message:"Extencion not found"})
    }
    let pathFolder= await createFolder(user)
    let pathfolderImage=path.join(pathFolder, file.name="imagen"+path.extname(file.name));
    //send img folder
    organizeFile(pathfolderImage,file)

 res.send("archivo recibido")
}






export{videoUpload}