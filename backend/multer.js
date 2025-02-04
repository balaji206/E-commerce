const multer = require('multer')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'upload/')

    },
    filename:(req,file,cb)=>{
        const uniquesuffix = Date.now()+Math.round(Math.random()*1e9)
        const filename = file.originalname.split('.')[0] //image
        cb(null,filename+uniquesuffix+'.png')
    }
})
const upload = multer({storage:storage})
module.exports = upload