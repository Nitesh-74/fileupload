const file=require("../model/File");

exports.localFileUpload=async (req,res)=>{
    try {
        const file=req.files.file;
        console.log("Files ",file);

        let path = __dirname + "/files/"+ Date.now()+`.${file.name.split(".")[1]}`;
        console.log("Path ",path);

        file.mv(path, (err)=>{
            console.log(err);
        });

        res.json({
            success:true,
            message:"Local file uploaded successfully"
        })
    } catch (error) {
        
    }
}