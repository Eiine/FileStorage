import {createFolder} from "../utils/createFolder.js"



const uploadImage=async (req,res)=>{
    let user="miguel"//req.params
    let dato=req.files
    //console.log(req.ip);
    //console.log(dato.file.mimetype.split("/")[1]);//En caso de querer la extencion
    let pathFolder= await createFolder(user)
    
    
    res.send("recivido")
}





export {uploadImage}