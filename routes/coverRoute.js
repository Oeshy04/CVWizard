const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const CoverLetter = require('../models/coverLetter');
const CV = require('../models/cv');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

const upload = multer({ storage });

router.post('/', upload.single('file'), async (req, res) => {
  const { filename, mimetype, size } = req.file;
  const { name, email, message } = req.body;
  try {
    const newCoverLetter = new CoverLetter({
      name,
      email,
      message,
      file: {
        data: fs.readFileSync(path.join(__dirname, '../', req.file.path)),
        contentType: mimetype,
        size,
        filename
      }
    });

    const savedCoverLetter = await newCoverLetter.save();
    const cv = await CV.findOne({ email });
    if (cv) {
      cv.coverLetters.push(savedCoverLetter._id);
      await cv.save();
    }
    res.status(201).json(savedCoverLetter);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
