const { register, login, updateImage } = require('../Controllers/AuthController')
const { checkUser } = require('../Middlewares/AuthMiddlewares')
const router = require('express').Router()
const upload = require("../Middlewares/multer")


router.post('/',checkUser)
router.post('/register',register)
router.post('/login',login)
router.post('/profile',upload.single("image"),updateImage)


module.exports = router