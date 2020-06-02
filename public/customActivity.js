var connection = new Postmonger.Session()

connection.trigger('ready');

connection.on('initActivity', function(payload) {
    document.querySelector("#MC_data").innerText = 'rrrrrrr'
});

connection.on('clickedNext', function() { 
    console.log('the next button has been clicked?')
    var payload = 'test payload'
    connection.trigger('updateActivity', payload);
 });