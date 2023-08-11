import cron from "node-cron";
import fs from "fs";
import path from "path";
import { uploadPath } from "./alias.js";

const jobs = () => {
  let job1 = cron.schedule('*/15 * * * *', () => {
    fs.readdir(uploadPath, (err, folders) => {
      if (err) throw err;

      for (const folder of folders) {
        const folderPath = path.join(uploadPath, folder);

        if (fs.statSync(folderPath).isDirectory()) {
          fs.rm(folderPath, { recursive: true }, err => {
            if (err) throw err;
            console.log(`Folder ${folder} Delete.`);
          });
        }
      }
    });
    console.log("Server Clear");
  });

  job1.start();
};

export { jobs };
