const router = require('express').Router()
const { fileUploader, cloudinary } = require('../config/cloudinary.config');
const { isAuthenticated } = require('../middleware/jwt.js')
const User = require('../models/User.model')


router.post('/upload', fileUploader.single('image'), (req, res, next) => {
  console.log(req.file.path);
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }

  res.json({ secure_url: req.file.path });
});



router.post('/editprofile', (req, res, next) => {

  const { bio, user } = req.body
  console.log(user, bio)

  User.findByIdAndUpdate(user, { bio: bio }, { new: true })
    .then(response => res.json(response))
    .catch(err => console.log(err))

})
router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => res.status(200).json(user))
    .catch(err => console.log(err))

})


router.put('/profilepicture', (req, res, next) => {

  const currentUser = req.payload._id

  const { image } = req.body

  console.log(image)

  User.findById(req.params.image)

  User.findByIdAndUpdate(currentUser, { image: image }, { new: true })
    .then(user => res.status(200).json(user))
    .catch(err => console.log(err))


})


module.exports = router;