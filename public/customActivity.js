var connection = new Postmonger.Session()

connection.trigger('ready');
// var configToSend = require('./configToSend.json')

// var config = JSON.parse(payload)
var configToShow = JSON.stringify(configToSend)

connection.on('initActivity', function(configToShow) {
    document.querySelector("#MC_data").innerText = configToShow
});

connection.on('clickedNext', function() { 
    console.log('the next button has been clicked?')
    connection.trigger('updateActivity', configToSend);
 });