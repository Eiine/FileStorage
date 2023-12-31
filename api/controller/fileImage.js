import { createFolder } from "../utils/createFolder.js";
import { organizeFile } from "../utils/organizeFile.js";
import { uploadPath } from "../utils/alias.js";
import { resizeImage } from "../utils/reziseImage.js";
import { garbageCollector } from "../utils/garbageCollector.js";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const uploadImage = async (req, res) => {
  let user = uuidv4();
  if (!req.files || !req.files.file) {
    return res.status(422).send({ message: "You need send image file." });
  }
  console.log(req.files);
  let file = req.files.file;
  let extencionSafe = [".jpg", ".jpeg", ".png", ".WebP", "tiff", "gif"];
  let extencion = extencionSafe.includes(path.extname(file.name));
  console.log(extencion);
  try {
    //clear function error file
    if (!extencion) {
      garbageCollector();
      return res
        .status(422)
        .send({ message: "The image cannot be loaded for extencion." });
    }

    let pathFolder = await createFolder(user);
    console.log(pathFolder);
    let pathfolderImage = path.join(
      pathFolder,
      (file.name = "imagen" + path.extname(file.name))
    );
    console.log(pathfolderImage);
    //send img folder
    organizeFile(pathfolderImage, file);

    res
      .status(200)
      .send({ url: `${process.env.URL_BACK}/getImage/${user}/${file.name}` });
  } catch (error) {
    console.log(error);
    garbageCollector();
    return res.status(422).send({ message: "The image cannot be loaded." });
  }
};

const getImage = async (req, res) => {
  let { user, name, height, width } = req.params;
  let exist = path.join(uploadPath, user, name);
  try {
    //send image rezise
    if (fs.existsSync(exist) && height && width) {
      const image = await resizeImage(
        exist,
        parseInt(height),
        parseInt(width),
        user
      );
      return res.status(200).sendFile(image);
    }
    //send image original
    if (fs.existsSync(exist)) {
      return res.status(200).sendFile(exist);
    }
    return res.status(404).send({ message: "File not found" });
  } catch (error) {
    console.log(error);
    return res.status(422).send({ message: "The image cannot be loaded." });
  }
};

export { uploadImage, getImage };
