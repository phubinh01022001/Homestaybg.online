const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');

router.get('/create', homeController.create);
router.post('/store', homeController.store);
router.get('/:id/edit', homeController.edit);
router.put('/:id', homeController.update);
router.delete('/:id', homeController.delete);
router.delete('/:id/force', homeController.force);
router.patch('/:id/restore', homeController.restore);
router.get('/showChungCu', homeController.showChungCu);
router.get('/showNhaRieng', homeController.showNhaRieng);
router.get('/showBietThu', homeController.showBietThu);
router.get('/:txtName/search', homeController.search);
router.get('/:slug', homeController.show);

module.exports = router;
