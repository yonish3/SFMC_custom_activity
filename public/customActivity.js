var connection = new Postmonger.Session()

connection.trigger('ready');
var configToSend = require('./configToSend.json')

// var config = JSON.parse(payload)

connection.on('initActivity', function(configToSend) {
    document.querySelector("#MC_data").innerText = configToSend
});

connection.on('clickedNext', function() { 
    console.log('the next button has been clicked?')
    connection.trigger('updateActivity', configToSend);
 });