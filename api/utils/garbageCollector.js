import path from "path"
import {uploadPath} from "./alias.js"
import fs from "fs"

const garbageCollector=()=>{

    let errorFile=fs.readdirSync(uploadPath)
        
if(errorFile){
    errorFile.forEach(item=>{
        fs.unlinkSync(path.join(uploadPath,item))
})
}
}

export {garbageCollector}