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

app.get('/contactsList/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.contacts.findOne({_id:mongojs.ObjectId(id)}, function(err, docs){
		res.json(docs);
	})
});

app.put('/contactsList/:id', function(req, res){
	var id = req.params.id;
	console.log(req.body.name);
	db.contacts.findAndModify(
		{
			query:{_id:mongojs.ObjectId(id)},
			update:{$set:{
				name: req.body.name,
				surname: req.body.surname,
				floor: req.body.floor,
				department: req.body.department,
				phone: req.body.phone,
				email: req.body.email
			}},
			new: true
		},function(err,docs){
		res.json(docs);
	})
});

app.listen(3000);
console.log('Server running on port 3000');