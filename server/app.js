const express = require("express");
const multer = require("multer");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const fileStroageEngine = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null,'./images')
    },
    filename : (req,file,cb) => {
        cb(null,file.originalname)
    },
})
const upload = multer({storage : fileStroageEngine});
app.post("/single",upload.single("image"),(req,res)=>{
    console.log(req.file);
    res.send("Done");
})
app.listen("5500");
