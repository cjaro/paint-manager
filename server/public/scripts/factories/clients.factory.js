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
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false
    }, function(){
      $http.delete('/clients/' + clientId).then(function(response){
        getClients();
        swal("Deleted!", "Your imaginary file has been deleted.", "success");

      });
    })
  }

  function saveClient(client) {
    console.log('client being saved:', client);
    console.log('client id being save:', client.id);
    $http.put('/clients/update/' + client.id, client).then(function(response){
      getClients();
      swal("Saved!");
      console.log('response', response);

    });
  }

  return {
    clients: clients,
    addClient: addClient,
    deleteClient: deleteClient,
    saveClient: saveClient,
  }

}]);
