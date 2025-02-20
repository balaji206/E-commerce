const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({

    destination:(req,file,cb)=>{
        cb(null,'upload/');
    },
    filename:(req,file,cb)=>{
        const uniqueSuffix  = Date.now()+Math.round(Math.random()*1e9);
        const filename = file.originalname.split(".")[0]
        const fileExt = path.extname(file.originalname)
        cb(null,filename+uniqueSuffix+fileExt)

    }
})


const upload = multer({storage:storage});
module.exports={upload}   