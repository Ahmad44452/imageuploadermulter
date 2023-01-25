const express = require('express');
let router = express.Router();
const fs = require('fs');
const multer = require("multer");

///////////// GET USER MODEL
const { Image } = require('../../models/imageModel');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    // console.log(req.body)
    // path.extname(file.originalname)
    const uniqueFilename = Date.now() + '-' + Math.round(Math.random() * 1E9) + '.' + file.mimetype.substring(6);
    req.body.filename = uniqueFilename;
    cb(null, uniqueFilename);
  }
});

const upload = multer({ storage: storage })

const routerMdCheck = (req, res, next) => {
  console.log("Middleware is working")
  next()
}

router.route("/check").get(routerMdCheck, async (req, res) => {
  try {
    // const images = await Image.find();
    // Send response
    return res.status(200).json({ data: 'hi again' });
  } catch (error) {
    res.status(400).json({
      message: "Error",
      error: error
    })
  }
})



router.route("/uploadimg").post(upload.single('userImg'), async (req, res) => {
  try {
    // console.log(req.body.filename)
    // const image = new Image({
    //   img: {
    //     data: fs.readFileSync('uploads/' + req.file.filename),
    //     contentType: "image/png"
    //   }
    // })
    // image.save();
    res.status(200).json(req.body.filename)
  } catch (error) {
    res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

router.route("/getimg/:id").get(async (req, res) => {
  try {
    // res.status(200).sendFile('./uploads/userImg.png')
    res.status(200).sendFile('/uploads/' + req.params.id, { root: __dirname + '../../../../' });
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

module.exports = router;