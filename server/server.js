var express = require('express');
var app = express();
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var db = mongojs('telefonillo', ['contacts']);

app.use(express.static(__dirname + '/..'));
app.use(bodyParser.json());

app.get('/contactsList', function(req, res){
	console.log('I receive a GET request');

	db.contacts.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});

});

app.post('/contactsList', function(req, res){
	console.log(req.body);
	db.contacts.insert(req.body, function(err, docs){
		res.json(docs);
	});
});

app.delete('/contactsList/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.contacts.remove({_id: mongojs.ObjectId(id)}, function(err, docs){
		res.json(docs);
	});
});

app.listen(3000);
console.log('Server running on port 3000');