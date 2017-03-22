app.controller('AccordionDemoCtrl', ['ClientsFactory', function(ClientsFactory){
    console.log('Clients Controller Loaded');

    var self = this;
     self.clients = ClientsFactory.clients;
     self.getClients = ClientsFactory.getClients;
     self.addClient = ClientsFactory.addClient;
     self.deleteClient = ClientsFactory.deleteClient;
     self.saveClient = ClientsFactory.saveClient;
     self.oneAtATime = true;

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
    isFirstDisabled: false
  };


  ////sweet alerts
self.sweet = {};
self.sweet.option = {
    title: "Are you sure?",
    text: "You will not be able to recover this imaginary file!",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel plx!",
    closeOnConfirm: false,
    closeOnCancel: false
}
self.sweet.confirm = {
    title: 'Deleted!',
    text: 'Your imaginary file has been deleted.',
    type: 'success'
};

self.sweet.cancel = {
    title: 'Cancelled!',
    text: 'Your imaginary file is safe',
    type: 'error'
}

self.checkCancel=function(){
console.log("check cancel")
}
self.checkConfirm=function(){
  console.log("check confrim")
}


}]);


// app.controller('AccordionDemoCtrl', function () {
//   var self = this;
//   self.oneAtATime = true;
//
//   self.groups = [
//     {
//       title: 'Dynamic Group Header - 1',
//       content: 'Dynamic Group Body - 1'
//     },
//     {
//       title: 'Dynamic Group Header - 2',
//       content: 'Dynamic Group Body - 2'
//     }
//   ];
//
//   self.items = ['Item 1', 'Item 2', 'Item 3'];
//
//   self.addItem = function() {
//     var newItemNo = self.items.length + 1;
//     self.items.push('Item ' + newItemNo);
//   };
//
//   self.status = {
//     isCustomHeaderOpen: false,
//     isFirstOpen: true,
//     isFirstDisabled: false
//   };
// });
