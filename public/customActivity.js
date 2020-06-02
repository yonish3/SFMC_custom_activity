var connection = new Postmonger.Session()

connection.trigger('ready');
var payload = `
{
	"workflowApiVersion": "1.1",
	"metaData": {
		"icon": "ServiceWise-Logo-512.png",
		"category": "message"
	},
	"type": "REST",
	"userInterfaces": {
		"configModal": {
			"height": 200,
			"width": 300,
			"fullscreen": true
		}
	},
    "arguments": {
        "execute": {
            "inArguments": [
                {
                    "contactIdentifier": "{{Contact.Key}}"
                },
                {
                    "emailAddress": "{{InteractionDefaults.Email}}"
				}
			]
		}
	},
	"url": "https://518f99cb594e9d5daf1228f9f1d35a7a.m.pipedream.net"
}`

var config = JSON.parse(payload)
connection.on('initActivity', function(payload) {
    document.querySelector("#MC_data").innerText = 'hello hello'
});

connection.on('clickedNext', function() { 
    console.log('the next button has been clicked?')
    connection.trigger('updateActivity', config);

 });