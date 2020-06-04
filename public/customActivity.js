var connection = new Postmonger.Session()

connection.trigger('ready');
console.log(payload)
var config = JSON.stringify(payload)


connection.on('initActivity', function() {
    document.querySelector("#MC_data").innerText = config
});

connection.trigger('requestTokens');
connection.trigger('requestEndpoints');

connection.on('requestedEndpoints', onGetEndpoints);
connection.on('requestedTokens', onGetTokens);

function onGetTokens (tokens) {
  // Response: tokens = { token: <legacy token>, fuel2token: <fuel api token> }
  console.log('tokens: ',tokens);
}

function onGetEndpoints (endpoints) {
  // Response: endpoints = { restHost: <url> } i.e. "rest.s1.qa1.exacttarget.com"
  console.log(endpoints);
}


connection.on('clickedNext', function() { 
    console.log('the next button has been clicked?')
    connection.trigger('updateActivity', payload);
 });