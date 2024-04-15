var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JC Café', name:null });
});

router.post('/', function(req, res, next) {

  res.render('index', { title: 'JC Café', name:req.body.name });
});

router.get('/page1', function(req, res, next) {
  res.render('page1', { title: 'JC Café', name:null });
});

router.get('/page3', function(req, res, next) {
  res.render('page3', { title: 'JC Café', name:null });
});

router.get('/page4', function(req, res, next) {
  res.render('page4', { title: 'JC Café', name:null });
});


router.get('/page5', function(req, res, next) {
  res.render('page5', { title: 'JC Café', name:null });
});

router.get('/page6', function(req, res, next) {
  res.render('page6', { title: 'JC Café', name:null });
});



module.exports = router;
