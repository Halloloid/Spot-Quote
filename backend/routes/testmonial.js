const express = require('express');
const {getAllTestMonials, createTestMonial,getTestMonialById} = require('../controllers/testmonialController');
const upload = require('../middleware/mutlerConfig');

const router = express.Router();

router.get('/:id',getTestMonialById);
router.get('/', getAllTestMonials);
router.post('/',upload.single('image'), createTestMonial);

module.exports = router;
