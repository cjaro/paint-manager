app.factory('JobsFactory', ['$http', function($http){
  console.log('Jobs Factory Loaded');


  var jobs = { list: [] };
  var clientJobs = { list: [] };

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
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false
    }, function(){
      $http.delete('/jobs/' + jobId).then(function(response){
        getJobs();
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
      });
    })
  }

  function saveJob(job) {
    console.log('job being saved:', job);
    console.log('job id being save:', job.id);
    $http.put('/jobs/update/' + job.id, job).then(function(response){
      getJobs();
      swal("Saved!");
      console.log('response', response);

    });
  }

  function getJobsForClient(clientId){
    $http({
      method: 'GET',
      url: '/jobs/' + clientId
    }).then(function(response){
      console.log(response.data);
      clientJobs.list = response.data;
    });
  }







  return {
    jobs: jobs,
    addJob: addJob,
    deleteJob: deleteJob,
    saveJob: saveJob,
    getJobsForClient: getJobsForClient,
    clientJobs: clientJobs,

  }

}]);
