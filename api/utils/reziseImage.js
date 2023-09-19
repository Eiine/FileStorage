import Jimp from "jimp";
import { createFolder } from "../utils/createFolder.js";
import path from "path";

const resizeImage = async (imagePath, height, width, user) => {
  try {
    // Leer la imagen con Jimp
    const image = await Jimp.read(imagePath);

    // Redimensionar la imagen con Jimp
    await image.resize(width, height);

    // Crear la carpeta temporal
    let folderTemp = await createFolder("temp", user);

    // Obtener la extensión de la imagen
    const extension = path.extname(imagePath);

    // Crear la ruta de salida para la imagen redimensionada
    const outputPath = path.join(folderTemp, "image" + extension);

    // Guardar la imagen redimensionada
    await image.writeAsync(outputPath);

    return outputPath;
  } catch (error) {
    console.error(error.message);
  }
};

export { resizeImage };
