const { findAll,findImg } = require('../controller/installStatusController');
const express = require('express');
const router = express.Router();

router.get('/', findAll);
router.get('/:id', findImg);

module.exports = router;
