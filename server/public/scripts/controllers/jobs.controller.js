app.controller('JobsController', ['JobsFactory', 'ClientsFactory', function(JobsFactory, ClientsFactory){
    console.log('Jobs Controller Loaded');

    var self = this;
     self.jobs = JobsFactory.jobs;
     self.getJobs = JobsFactory.getJobs;
     self.addJob = JobsFactory.addJob;
     self.deleteJob = JobsFactory.deleteJob;
     self.saveJob = JobsFactory.saveJob;
     self.oneAtATime = true;
     self.clients = ClientsFactory.clients;

  self.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  self.items = ['Item 1', 'Item 2', 'Item 3'];

  self.addItem = function() {
    var newItemNo = self.items.length + 1;
    self.items.push('Item ' + newItemNo);
  };

  self.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false,
  };





}]);
