import sharp from "sharp"
import {createFolder} from "../utils/createFolder.js"
import fs from "fs"
import path from "path";
const reziseImage=async(imagePath,height,width,user)=>{
  try {
    const resizedImageBuffer = await sharp(imagePath)
      .resize(width, height,{
        fit:"contain"
      })
      .toBuffer();
        let folderTemp=await createFolder("temp",user)
        let extencion=path.extname(imagePath)
         const outputPath = path.join(folderTemp,"image"+extencion)
         await sharp(resizedImageBuffer).toFile(outputPath);
        return outputPath
  } catch (error) {
    console.log(error.message);
  }
    
}




export{reziseImage}