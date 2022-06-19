const express = require('express')
const path = require('path')
const multer = require('multer')
const swaggerDoc = require('swagger-ui-express')
const swagger_docs = require('./swaggerDoc')

const app = express()
const port = 3000

const img_storage = multer.diskStorage({
  destination: './',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' + Date.now() 
       + path.extname(file.originalname))
      // file.fieldname is name of the field (image)
      // path.extname get the uploaded file extension
  }
})

const image_upload = multer({
  storage: img_storage,
  limits: {
    fileSize: 1000000 // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) { 
       // upload only png and jpg format
       return cb(new Error('Please upload a Image'))
     }
   cb(undefined, true)
  }
}) 

app.use("/swagger-docs", swaggerDoc.serve, swaggerDoc.setup(swagger_docs))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.post('/hello', image_upload.single('image'), (req, res) => {
  console.log(req.body)
  res.send('Hello POST!')
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})