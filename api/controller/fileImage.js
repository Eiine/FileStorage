import {createFolder} from "../utils/createFolder.js"
import {organizeFile} from "../utils/organizeFile.js"
import {uploadPath} from "../utils/alias.js"
import {reziseImage} from "../utils/reziseImage.js"
import {garbageCollector} from "../utils/garbageCollector.js"
import { v4 as uuidv4 } from 'uuid';
import fs from "fs"
import path from "path"
import dotenv from "dotenv"
dotenv.config()

const uploadImage=async (req,res)=>{
    
    let user=uuidv4();
    let {file}=req.files
    let extencionSafe=[".jpg",".jpeg",".png",".WebP","tiff","gif"]
    let extencion=extencionSafe.includes(path.extname(file.name))
    
    try{
    //clear function error file
    if(!extencion){
        
        garbageCollector()
        return res.status(422).send({message: "The image cannot be loaded."})
    }
    
        
        let pathFolder= await createFolder(user)
        let pathfolderImage=path.join(pathFolder, file.name="imagen"+path.extname(file.name))
    
        //send img folder
        organizeFile(pathfolderImage,file)
        
        res.status(200).send({url:`${process.env.URL_BACK}/getImage/${user}/${file.name}`})
    } catch (error) {
        console.log(error);
        garbageCollector()
       return res.status(422).send({message: "The image cannot be loaded."})
    }
   
}

const getImage=async(req,res)=>{
    
    let {user,name,height,width}=req.params
    let exist=path.join(uploadPath, user,name)
    try {
    
        //send image rezise
    if(fs.existsSync(exist) && height && width){
        const image=await reziseImage(exist,parseInt(height),parseInt(width),user)
        return res.status(200).sendFile(image)
    }
    //send image original
    if( fs.existsSync(exist)) {
        return res.status(200).sendFile(exist)
    }
    return res.status(404).send({message:"File not found"})

    } catch (error) {
        console.log(error);
        return res.status(422).send({message: "The image cannot be loaded."})
    }
    
    
}




export {uploadImage, getImage}