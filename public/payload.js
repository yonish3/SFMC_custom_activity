var payload = {
    "name": "",
    "id": null,
    "key": "REST-1",
    "arguments": {
      "execute": {
        "inArguments": [
                { "contactKey": "{{Contact.Key}}" },
                { "FirstName": "{{Contact.Attribute.JourneyEntrySource.FirstName}}"},
                { "LastName": "{{Contact.Attribute.JourneyEntrySource.LastName}}"},
                { "emailAddress": "{{InteractionDefaults.Email}}" }
        ],
        "url": "https://518f99cb594e9d5daf1228f9f1d35a7a.m.pipedream.net"
      }
    },
    "configurationArguments": {
      "publish": {
        // Endpoint that receives a notification when a user publishes the journey.
        "url": "https://518f99cb594e9d5daf1228f9f1d35a7a.m.pipedream.net"
      }
    },
    "metaData": {
      "icon": "ServiceWise-Logo-512.png",
      "category": "message",
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