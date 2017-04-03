var express = require('express');
var router = express.Router();
var pool = require('../config/database-pool.js'); // Creates database pool, if you need to change database, do it in the config object in this file


// return all clients
router.get('/', function (req, res) {
  pool.connect()
  .then(function (client) {
    client.query('SELECT * FROM clients ORDER BY id DESC')
    .then(function (result) {
      client.release();
      res.send(result.rows);
    })
    .catch(function (err) {
      console.log('error on SELECT', err);
      res.sendStatus(500);
    });
  });
});

// Add new client
router.post('/', function (req, res) {
  var newClient = req.body;
  console.log('new Client: ', newClient);
  pool.connect()
  .then(function (client) {
    client.query('INSERT INTO clients (name, email, phone, address, notes) VALUES ($1, $2, $3, $4, $5)',
    [newClient.name, newClient.email, newClient.phone, newClient.address, newClient.notes])
    .then(function (result) {
      client.release();
      res.sendStatus(201);
    })
    .catch(function (err) {
      console.log('error on INSERT', err);
      res.sendStatus(500);
    });
  });
});

// delete client
router.delete('/:id', function(req, res) {
  var clientId = req.params.id;
  console.log('Deleting Client ID:, ', clientId);
  pool.connect()
  .then(function (client) {
    client.query('DELETE FROM clients WHERE id = $1',
    [clientId])
    .then(function (result) {
      client.release();
      res.sendStatus(200);
    })
    .catch(function (err) {
      console.log('error on SELECT', err);
      res.sendStatus(500);
    });
  });
});

// save changes to client
router.put('/update/:id', function(req, res) {
  var clientId = req.params.id;
  var clientObject = req.body;
  console.log('Updating client:, ', clientObject);
  pool.connect()
  .then(function (client) {
    client.query('UPDATE clients SET name = $1, email = $2, phone = $3,  address = $4, notes=$5 WHERE id = $6 RETURNING *',
    [clientObject.name, clientObject.email, clientObject.phone, clientObject.address, clientObject.notes, clientId])
    .then(function (result) {
      console.log(result.rows);
      client.release();
      res.sendStatus(200);
    })
    .catch(function (err) {
      console.log('error on UPDATE', err);
      res.sendStatus(500);
    });
  }).catch(function(err) {
    console.log('error connecting to database:', err);
  });
});





module.exports = router;
