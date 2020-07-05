var payload = {
  "arguments": {
      "execute": {
        "inArguments": [
          { "contactKey": "{{Contact.Key}}" },
          { "FirstName": "{{Contact.Attribute.JourneyEntrySource.FirstName}}"},
          { "LastName": "{{Contact.Attribute.JourneyEntrySource.LastName}}"},
          { "emailAddress": "{{InteractionDefaults.Email}}" },
          { "test_f": "{{test_f}}"},
          { "First Name": "{{Contact.Attribute.[Email Demographics].[First Name]}}"}
        ],
        "url": "https://sfmc-custom-activity-test.herokuapp.com/activateAutomation"
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