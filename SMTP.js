const express = require("express");
const app = express();
const mailer = require("./mailer");
const bodyperser = require('body-parser');
const port='2400'; 
const host = '127.0.0.1';

app.use(bodyperser.json());

app.get('/',(req,res)=>{
    res.send('Welcome,\n You are on SMTP server');
})
app.post('/',(req,res)=>{
    res.redirect("/");
})

app.get('/email',(req,res)=>{
    res.redirect('/');
})
app.post('/email',(req,res)=>{
    for (let i =0; i<req.body.emails.length; i++){
        mailer(req.body.subject,req.body.body.text,req.body.body.html,req.body.emails[i])
    }
    res.redirect("/");
})

app.listen(port,host,()=>{
    console.log(`[nodemon] serve running at http://${host}:${port}/`)
});
