

const organizeImage=(pathfolderImage,file)=>{

    file.mv(pathfolderImage,(err)=>{
        if(err){
            console.log(err);
        }
        })
}



export {organizeImage}