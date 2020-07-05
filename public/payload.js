var payload = {
  "arguments": {
      "execute": {
        "inArguments": [
          { "contactKey": "{{Contact.Key}}" },
          { "FirstName": "{{Contact.Attribute.JourneyEntrySource.FirstName}}"},
          { "LastName": "{{Contact.Attribute.JourneyEntrySource.LastName}}"},
          { "emailAddress": "{{InteractionDefaults.Email}}"},
          { "test_f": "{{test_f}}"},
          { "First Name": "{{Contact.Attribute.1507B4D1-36C1-41D6-ADA2-B0D11CEDCA99.SubscriberKey}}"},
          { "MI Test2": '{{Contact.Attribute."PMI Test2"."SubscriberKey"}}'}
          
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