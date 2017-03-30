app.controller('ClientsController', ['ClientsFactory', 'JobsFactory', '$routeParams', function(ClientsFactory, JobsFactory, $routeParams){
    console.log('Clients Controller Loaded');
    var self = this;
     self.clients = ClientsFactory.clients;
     self.getClients = ClientsFactory.getClients;
     self.addClient = ClientsFactory.addClient;
     self.deleteClient = ClientsFactory.deleteClient;
     self.saveClient = ClientsFactory.saveClient;
     self.clientJobs = JobsFactory.clientJobs;
     self.oneAtATime = true;





  self.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1',
      open: false
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2',
      open: false
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

  self.columnField = undefined;
  self.reverse = false;

  self.columnSort = function (columnName) {
    console.log('column name', columnName);
    if (self.columnField === columnName) {
      self.reverse = !self.reverse;
    } else {
      self.columnField = columnName;
      self.reverse = false;
    }
  }

    self.isSortUp = function (columnName) {
      return self.columnField === columnName && !self.reverse;
    };
    self.isSortDown = function (columnName) {
      return self.columnField === columnName && self.reverse;
    };


// click to get jobs id
self.revealJobs = function (clientId){
  console.log('thing', clientId);
  JobsFactory.getJobsForClient(clientId)
}//call this function!!

// getJobsForClient()




}]);
