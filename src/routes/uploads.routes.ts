import { Router } from 'express';

import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

const uploadsRouter = Router();

aws.config.update({
  accessKeyId: process.env.S3_SECRET_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
});

var s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.S3_BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString()+file.originalname)
    },
    acl: 'public-read'
  })
})

uploadsRouter.post('/', upload.single('file'), ( request: any, response ) => {
  response.json({
    "url":request.file.location
  });
})

export default uploadsRouter