const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', function (req, res, next) {
  res.render('index');
});


module.exports = router;
