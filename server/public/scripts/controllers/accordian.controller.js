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
