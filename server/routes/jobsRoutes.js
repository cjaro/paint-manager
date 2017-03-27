var express = require('express');
var router = express.Router();
var pool = require('../config/database-pool.js'); // Creates database pool, if you need to change database, do it in the config object in this file

// return all jobs
router.get('/', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query('SELECT jobs.*, clients.name, jobs.id FROM clients RIGHT OUTER JOIN jobs ON clients.id=jobs.client_id')
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
      }).catch(function(err) {
        console.log('error connecting to database:', err);
    });
});

// Add new job
router.post('/', function (req, res) {
  var newJob = req.body;
  console.log('new Job: ', newJob);
  pool.connect()
    .then(function (client) {
      client.query('INSERT INTO jobs (status , task_1, task_2, tasks_cost, materials, materials_cost, total_cost, date, client_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        [newJob.status, newJob.task_1, newJob.task_2, newJob.tasks_cost, newJob.materials, newJob.materials_cost, newJob.total_cost, newJob.date, newJob.client_id])
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

// delete job
router.delete('/:id', function(req, res) {
  var jobId = req.params.id;
  console.log('Deleting Job ID:, ', jobId);
  pool.connect()
    .then(function (client) {
      client.query('DELETE FROM jobs WHERE id = $1',
        [jobId])
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

// save changes to job
router.put('/update/:id', function(req, res) {
  var jobId = req.params.id;
  var jobObject = req.body;
  console.log('Updating job:, ', jobObject);
  pool.connect()
    .then(function (client) {
      client.query('UPDATE jobs SET status=$1, task_1=$2, task_2=$3, tasks_cost=$4, materials=$5, materials_cost=$6, total_cost=$7, date=$8, client_id=$9 WHERE id = $10 RETURNING *',
        [jobObject.status, jobObject.task_1, jobObject.task_2, jobObject.tasks_cost, jobObject.materials, jobObject.materials_cost, jobObject.total_cost, jobObject.date, jobObject.client_id, jobId])
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
