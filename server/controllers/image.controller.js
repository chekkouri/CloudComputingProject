const AWS = require('aws-sdk')
const fs = require('fs');

async function upload(req, res){
    if(req.file.filename){
        const s3 = new AWS.S3({
            accessKeyId: "AKIAUVBAVPCXYVDLPD7J",
            secretAccessKey: "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",
          })

          console.log(req.file)
        
          const blob = fs.readFileSync(req.file.path)
          const uploadedImage = await s3.upload({
            Bucket: "fatimaezzahraachekkouri11.com",
            Key: req.file.filename,
            Body: blob,
          }).promise()

          console.log(upload,"asdasdasdasdasdasd")
        res.status(201).json({
            mesaage: "Image upload successfully",
            url: uploadedImage.Location
        });
    }else{
        res.status(500).json({
            mesaage: "There is an error!"
        });
    }
}

module.exports = {
    upload: upload
}