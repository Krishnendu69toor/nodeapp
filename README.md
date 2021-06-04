# nodeapp

If Using the Gmail
    Make sure "Less secure app access" is on in your Gmail account 
    Go TO => Manage Your Google Account -> Security -> "Less secure app access" = on

If using the Zoho mail
    Make sure "Multi-Factor Authentication" is off in your Zoho account 
    Go TO => https://accounts.zoho.com/home#multiTFA/modes -> and check it off

goto the userCredAPI.json and update your credintials on it

run the command "npm install" to install the app
run the command "npm start" to start node app

last hit the url = 'http://192.168.0.102:2400/' with post method and following json body
{
    "subject":"Send mail from Custom node",
    "body":{
        "text":"test 0",
        "html":""
    },
    "emails":[
        ""
    ]
}
