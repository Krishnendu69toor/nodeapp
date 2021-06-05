var express = require('express');
var router = express();

router.get('/', (req, res) => {
    res.render('index', { body: 'Welcome,\n You are on SMTP server' });
})
router.listen(500,() =>{
    console.log('listening on port 5000');
});
