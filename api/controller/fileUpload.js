import { v4 as uuidv4 } from 'uuid';
import { createFolder } from '../utils/createFolder.js';
import {organizeFile  } from "../utils/organizeFile.js";
import {uploadPath} from "../utils/alias.js"
import path from "path"
import fs from 'fs';
import dotenv from "dotenv"
dotenv.config()
const fileUpload=async(req,res)=>{
 const user=uuidv4();
 
 if(!req.files || !req.files.file){
       return res.status(422).send({message: "You need send file."})
   }
 
 const {file}=req.files
 let pathFolder= await createFolder(user)
        let pathfolderFile=path.join(pathFolder, file.name="archivo"+path.extname(file.name))
        //send img folder
        organizeFile(pathfolderFile,file)
        res.status(200).send({url:`${process.env.URL_BACK}/getFile/${user}/${file.name}`})
}


const getFile=(req,res)=>{
 const {user,name}=req.params;
 let exist= path.join(uploadPath, user,name)

 if(!fs.existsSync(exist)){
        return res.status(404).send({message:"File not found"})
 }

 res.download(exist)

}





export{fileUpload,getFile}