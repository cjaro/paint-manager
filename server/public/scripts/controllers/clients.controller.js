app.controller('ClientsController', ['ClientsFactory', function(ClientsFactory){
    console.log('Clients Controller Loaded');

    var self = this;
     self.clients = ClientsFactory.clients;
     self.getClients = ClientsFactory.getClients;
     self.addClient = ClientsFactory.addClient;
     self.deleteClient = ClientsFactory.deleteClient;
     self.saveClient = ClientsFactory.saveClient;

     

}]);
