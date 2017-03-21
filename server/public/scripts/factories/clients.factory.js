app.factory('ClientsFactory', ['$http', function($http){
    console.log('Clients Factory Loaded');


    var clients = { list: [] };

getClients();

function getClients(){
  $http({
    method: 'GET',
    url: '/clients'
  }).then(function(response){
    console.log(response.data);
    clients.list = response.data;
  });
}//end function

function addClient(newClient) {
  $http.post('/clients', newClient).then(function(response){
    getClients();
    console.log(response);
  });
}

function deleteClient(clientId) {
  console.log(clientId);
  $http.delete('/clients/' + clientId).then(function(response){
    getClients();

  });
}

function saveClient(client) {
  console.log('client being saved:', client);
  console.log('client id being save:', client.id);
  $http.put('/clients/update/' + client.id, client).then(function(response){
    getClients();
    console.log('response', response);

  });
}

return {
 clients: clients,
 addClient: addClient,
 deleteClient: deleteClient,
 saveClient: saveClient
}

}]);
