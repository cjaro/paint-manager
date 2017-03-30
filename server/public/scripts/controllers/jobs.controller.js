app.controller('JobsController', ['JobsFactory', 'ClientsFactory', '$routeParams', function(JobsFactory, ClientsFactory, $routeParams){
  console.log('Jobs Controller Loaded');

  var self = this;
  self.jobs = JobsFactory.jobs;
  self.getJobs = JobsFactory.getJobs;
  self.addJob = JobsFactory.addJob;
  self.deleteJob = JobsFactory.deleteJob;
  self.saveJob = JobsFactory.saveJob;
  self.clients = ClientsFactory.clients;
  self.oneAtATime = true;
  self.expandJob = $routeParams.expandJobId;
  self.index = 0;

  self.jobs.list.forEach(function(x, i){
    if(x.id == self.expandJob){
      self.index = i;
    }

    console.log('self index', self.index);
  });
  //
  //
  // self.jobs.list.forEach(function(item) {
  //   var isOpened = true;
  //   console.log(item.id);
  //   Object.defineProperty(item, isOpened,
  //     {
  //       get : function(){ return isOpened; },
  //       set : function(expandJob) {
  //         item.isOpened = (item.id == self.expandJob);
  //         console.log(item.id);
  //         if (isOpened) {
  //           console.log("stuff", item.id); item.isOpened =false;
  //
  //         }
  //       }});
  //     });

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

      self.updateTaskTotal = function(thisJob) {
        console.log('updating job totals');
        thisJob.total_cost = thisJob.tasks_cost + thisJob.materials_cost;
      }

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


    }]);
