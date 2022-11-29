const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');
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

router.post('/images', upload.single('image'),async (req, res, next) => {
    const file = req.file
    // console.log(file)
    const result = await uploadFile(file)
    console.log(result)

    const image = result.Key
    req.body.image = image
    const homes = new Home(req.body)
    homes
        .save()
        .then(() => res.redirect('/me/stored/homes'))
        .catch((error) => {});
    
    // res.send({imagePath: `/images/${result.Key}`})
  });
//   store(req, res, next) {    
//     const homes = new Home(req.body);
//     homes
//       .save()
//       .then(() => res.redirect('/me/stored/homes'))
//       .catch((error) => {});
//   }

router.get('/create', homeController.create);
router.post('/store', homeController.store);
router.get('/:id/edit', homeController.edit);
router.put('/:id', homeController.update);
router.delete('/:id', homeController.delete);
router.delete('/:id/force', homeController.force);
router.patch('/:id/restore', homeController.restore);
router.get('/showFull', homeController.showFull);
router.get('/showChungCu', homeController.showChungCu);
router.get('/showNhaRieng', homeController.showNhaRieng);
router.get('/showBietThu', homeController.showBietThu);
router.post('/search', homeController.search);
router.get('/:slug', homeController.show);

module.exports = router;
