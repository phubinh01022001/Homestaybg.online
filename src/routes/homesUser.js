const express = require('express');
const router = express.Router();
const homesUserController = require('../app/controllers/HomeUserController');
const Home = require('../app/models/Home')
// S3
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const { uploadFile, getFileStream } = require('./s3')

router.get('/images/:key',( req , res )=>{
    const key = req.params.key
    const readStream = getFileStream(key)

    readStream.pipe(res)
})

router.get('/showFull_user', homesUserController.showFull_user);
router.get('/showChungCu_user', homesUserController.showChungCu_user);
router.get('/showNhaRieng_user', homesUserController.showNhaRieng_user);
router.get('/showBietThu_user', homesUserController.showBietThu_user);
router.post('/search_user', homesUserController.search_user);
router.get('/:slug', homesUserController.show_user);


module.exports = router;
