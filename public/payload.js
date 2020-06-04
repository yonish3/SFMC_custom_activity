var payload = {
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
    "metaData": {
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