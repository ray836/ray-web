const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', function (req, res, next) {
  res.render('challenges');
});


module.exports = router;
