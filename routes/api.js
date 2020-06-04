const express = require('express')
const router = express.Router()
const request = require('request')

var tokenOptions = {
    'method': 'POST',
    'url': 'https://mcx8phgy1fbtrln9dy0jnj9y9t61.auth.marketingcloudapis.com/v2/token',
    'headers': {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "grant_type": "client_credentials", "client_id": "0vmb5v67o3k5rplyl72wucjb", "client_secret": "hWMMwM0aVE42QVsvs3iPCtH9", "account_id": "7231513" })

};



router.post('/activateAutomation/', function (req, res) {

    let token = null;

    request(tokenOptions, function (error, response) {
        if (error) throw new Error(error);

        token = JSON.parse(response.body).access_token
        
        var automationOptions = {
            'method': 'POST',
            'url': 'https://mcx8phgy1fbtrln9dy0jnj9y9t61.soap.marketingcloudapis.com/Service.asmx',
            'headers': {
                'Content-Type': 'text/xml'
            },
            body: `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<s:Envelope xmlns:s=\"http://www.w3.org/2003/05/soap-envelope\" 
                    xmlns:a=\"http://schemas.xmlsoap.org/ws/2004/08/addressing\" 
                    xmlns:u=\"http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd\">\n    
                    <s:Header>\n       
                    <a:Action s:mustUnderstand=\"1\">Perform</a:Action>\n       
                    <a:To s:mustUnderstand=\"1\">https://mcx8phgy1fbtrln9dy0jnj9y9t61.soap.marketingcloudapis.com/Service.asmx</a:To>\n        
                    <fueloauth xmlns=\"http://exacttarget.com\">${token}</fueloauth>\n    
                    </s:Header>\n    <s:Body xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" 
                    xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n        
                    <PerformRequestMsg xmlns=\"http://exacttarget.com/wsdl/partnerAPI\" 
                    xmlns:ns2=\"urn:fault.partner.exacttarget.com\">\n            
                    <Action>start</Action>\n           
                    <Definitions>\n               
                    <Definition xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" 
                    xsi:type=\"Automation\">\n                    
                    <ObjectID>34b6b0cd-a6d0-4fd8-8571-ed4ea5b93d00</ObjectID>\n               
                    </Definition>\n            
                    </Definitions>\n        
                    </PerformRequestMsg>\n    
                    </s:Body>\n</s:Envelope>`
        };
        
        request(automationOptions, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
            res.send(response.body)
        });
        
        
    });
})



module.exports = router