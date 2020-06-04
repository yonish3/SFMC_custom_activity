var connection = new Postmonger.Session()

connection.trigger('ready');
console.log(configToSend)
var config = JSON.stringify(configToSend)
// גגג
connection.on('initActivity', function(payload) {
    document.querySelector("#MC_data").innerText = config
});

connection.on('clickedNext', function() { 
    console.log('the next button has been clicked?')
    connection.trigger('updateActivity', configToSend);
 });