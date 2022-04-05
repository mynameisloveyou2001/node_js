const express = require('express')
const router = express.Router();

const newsController = require('../app/controllers/NewsController')
const siteController = require('../app/controllers/SiteController')

// newscontroller.index

router.use('/:search', siteController.search)
router.use('/', siteController.index)

module.exports = router;