app.factory('JobsFactory', ['$http', '$routeParams', function($http, $routeParams){
  console.log('Jobs Factory Loaded');


  var jobs = { list: [] };
  var clientJobs = { list: [] };

  function getJobs(){
    $http({
      method: 'GET',
      url: '/jobs'
    }).then(function(response){
      console.log(response.data);
      response.data.forEach(function(job) {
        job.isOpen = job.id == $routeParams.expandJob;
      });
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

//identify the jobs of clients
  function getJobsForClient(clientId){
    $http({
      method: 'GET',
      url: '/jobs/' + clientId
    }).then(function(response){
      console.log(response.data);
      clientJobs.list = response.data;
    });
  }

//email job details to client
  function emailJobstoClient(jobId){
    $http({
      method: 'GET',
      url: '/jobs/email/' + jobId
    }).then(function(response){
      swal("Email Sent!");
      console.log(response);
    });
  }


  return {
    jobs: jobs,
    addJob: addJob,
    deleteJob: deleteJob,
    saveJob: saveJob,
    getJobs: getJobs,
    getJobsForClient: getJobsForClient,
    clientJobs: clientJobs,
    emailJobstoClient: emailJobstoClient
  }

}]);
