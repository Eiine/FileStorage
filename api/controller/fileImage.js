import {createFolder} from "../utils/createFolder.js"
import {organizeImage} from "../utils/organizeImage.js"
import {uploadPath} from "../utils/alias.js"
import { v4 as uuidv4 } from 'uuid';
import fs from "fs"
import path from "path"


const uploadImage=async (req,res)=>{
    
    let user=uuidv4();
    let {file}=req.files
    //console.log(req.ip);
    //console.log(dato.file.mimetype.split("/")[1]);//En caso de querer la extencion
    
    let pathFolder= await createFolder(user)
    
    let pathfolderImage=path.join(pathFolder, file.name)

    //send img folder
    organizeImage(pathfolderImage,file)
    
    res.status(200).send({url:`http://localhost:3000/getImage/${user}/${file.name}`})
}

const getImage=async(req,res)=>{
    
    let {user,name}=req.params
    let exist=path.join(uploadPath, user,name)
    
    if( fs.existsSync(exist)) {
        return res.status(200).sendFile(exist)
    }

    return res.status(404).send({message:"Archivo no encontrado"})

    
}




export {uploadImage, getImage}