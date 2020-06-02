var connection = new Postmonger.Session()

connection.trigger('ready');
var payload = `
{
    "name": "",
    "id": null,
    "key": "REST-1",
    "arguments": {
      "execute": {
        "inArguments": [
                { "contactKey": "{{Contact.Key}}" },
                { "FirstName": "{{Contact.Attribute.JourneyEntrySource.FirstName}}"},
                { "FirstName": "{{Contact.Attribute.JourneyEntrySource.FirstName}}"},
                { "LastName": "{{Contact.Attribute.JourneyEntrySource.LastName}}"}
            },
        ],
        "url": "https://518f99cb594e9d5daf1228f9f1d35a7a.m.pipedream.net"
      }
    },
    "configurationArguments": {
      "publish": {
        "url": "https://518f99cb594e9d5daf1228f9f1d35a7a.m.pipedream.net"
      }
    },
    "metaData": {
      "icon": "https://sample-activity.herokuapp.com/icon.png",
      "category": "message",
      "iconSmall": null,
      "original_icon": "icon.png",
      "isConfigured": true
    },
    "editable": true,
    "outcomes": [
      {
        "next": "WAITBYDURATION-1"
      }
    ],
    "errors": []
  }
`

var config = JSON.parse(payload)

connection.on('initActivity', function(payload) {
    document.querySelector("#MC_data").innerText = 'hello hello'
});

connection.on('clickedNext', function() { 
    console.log('the next button has been clicked?')
    connection.trigger('updateActivity', config);
 });