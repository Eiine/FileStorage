import fs from "fs"
import path from "path"
import {uploadPath} from "../utils/alias.js"

const createFolder= async(nameFolder,user)=> {
  const newFolder = path.join(uploadPath, nameFolder);
  try{
  if (user) {
    let folderUser=path.join(uploadPath,user,nameFolder)
    if(fs.existsSync(folderUser)){
      return folderUser
  }
    await fs.mkdirSync(folderUser);
    return folderUser
  }

  if(fs.existsSync(newFolder)){
      return newFolder
  }
  
  
    await fs.mkdirSync(newFolder);
    console.log('Carpeta creada exitosamente.');
    return newFolder;  // Retorna la ruta de la carpeta creada
  } catch (err) {
    console.error('Error al crear la carpeta:', err);
    throw err;  // Lanza el error para manejarlo externamente si es necesario
  }
}

  export {createFolder}