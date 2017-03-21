app.controller('ClientsController', ['ClientsFactory', function(ClientsFactory){
    console.log('Clients Controller Loaded');

    var self = this;
     self.clients = ClientsFactory.clients;
     self.getClients = ClientsFactory.getClients;
     self.addClient = ClientsFactory.addClient;
     self.deleteClient = ClientsFactory.deleteClient;
     self.saveClient = ClientsFactory.saveClient;

    // getClients();
    //
    // function getClients(){
    //   $http({
    //     method: 'GET',
    //     url: '/clients'
    //   }).then(function(response){
    //     console.log(response.data);
    //     self.clients = response.data;
    //   });
    // }//end function
    //
    // self.addClient = function(newClient) {
    //   $http.post('/clients', newClient).then(function(response){
    //     getClients();
    //     console.log(response);
    //   });
    // }
    //
    // self.deleteClient = function(clientId) {
    //   console.log(clientId);
    //   $http.delete('/clients/' + clientId).then(function(response){
    //     getClients();
    //
    //   });
    // }
    //
    // self.saveClient = function(client) {
    //   console.log(client);
    //   $http.put('/clients/' + client.id, client).then(function(response){
    //     getClients();
    //   });
    // }

}]);
