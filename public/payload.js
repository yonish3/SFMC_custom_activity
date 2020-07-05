var payload = {
  "arguments": {
      "execute": {
        "inArguments": [
          { "contactKey": "{{Contact.Key}}" },
          { "FirstName": "{{Contact.Attribute.JourneyEntrySource.FirstName}}"},
          { "LastName": "{{Contact.Attribute.JourneyEntrySource.LastName}}"},
          { "emailAddress": "{{InteractionDefaults.Email}}"},
          { "First Name": "{{Contact.Attribute.93EA27F6-1953-4678-958F-F8FD35CCA48B.test_f}}"},
          { "First Name": "{{Contact.Attribute.custom_activity_DE.test_f}}"}
        ],
        "url": "https://518f99cb594e9d5daf1228f9f1d35a7a.m.pipedream.net"
      }
    },
    "metaData": {
      "isConfigured": true
    },
    "configurationArguments": {
      "save": {
        "url": "https://518f99cb594e9d5daf1228f9f1d35a7a.m.pipedream.net"
      },
      "publish": {
        "url": "https://518f99cb594e9d5daf1228f9f1d35a7a.m.pipedream.net"
      },
      "validate": {
        "url": "https://518f99cb594e9d5daf1228f9f1d35a7a.m.pipedream.net"
      },
      "stop": {
        "url": "https://518f99cb594e9d5daf1228f9f1d35a7a.m.pipedream.net"
      }
    }
  }