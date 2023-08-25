import path from "path"
import {uploadPath} from "./alias.js"
import fs from "fs"

const garbageCollector=()=>{
    try {
        let errorFile=fs.readdirSync(uploadPath)
        
if(errorFile){
    errorFile.forEach(item=>{
        fs.unlinkSync(path.join(uploadPath,item))
})
}    
    } catch (error) {
    console.log(error.message);       
    }
    
}

export {garbageCollector}