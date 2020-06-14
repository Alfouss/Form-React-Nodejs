var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

const url = 'mongodb://localhost:27017/form';

router.post('/form', function(req, res) {
  console.log(JSON.stringify(req.body));
  res.send(req.body);

  MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  
  const collection = db.collection('users');

  collection.insertOne(req.body);

  db.close();
  });

});
module.exports = router;
