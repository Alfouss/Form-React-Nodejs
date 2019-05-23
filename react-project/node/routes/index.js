var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

const url = 'mongodb://localhost:27017/form';
const dbName = 'form';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/form', function(req, res, next) {
  console.log(JSON.stringify(req.body));
  res.send(req.body);

  MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  
  const col = db.collection('users');

  col.insertOne(req.body);

  db.close();
  });

});
module.exports = router;
