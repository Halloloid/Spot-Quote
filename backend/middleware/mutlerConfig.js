const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary')

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname);
//     },
// });

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'spot-quote', // Cloudinary folder name
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
  },
});


const upload = multer({ storage });

module.exports = upload;
