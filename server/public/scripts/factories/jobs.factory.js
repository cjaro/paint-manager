app.factory('JobsFactory', ['$http', function($http){
    console.log('Jobs Factory Loaded');


    var jobs = { list: [] };

getJobs();

function getJobs(){
  $http({
    method: 'GET',
    url: '/jobs'
  }).then(function(response){
    console.log(response.data);
    jobs.list = response.data;
  });
}//end function

function addJob(newJob) {
  $http.post('/jobs', newJob).then(function(response){
    getJobs();
    console.log(response);
  });
}

function deleteJob(jobId) {
  console.log(jobId);
  $http.delete('/jobs/' + jobId).then(function(response){
    getJobs();

  });
}

function saveJob(job) {
  console.log('job being saved:', job);
  console.log('job id being save:', job.id);
  $http.put('/jobs/update/' + job.id, job).then(function(response){
    getJobs();
    console.log('response', response);

  });
}

return {
 jobs: jobs,
 addJob: addJob,
 deleteJob: deleteJob,
 saveJob: saveJob,
}

}]);
