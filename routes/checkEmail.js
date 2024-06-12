const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res)=>{
    res.render('./login/login.ejs');
});

router.post('/', function (req, res, next) {
    let login = req.body.login;
    let password = req.body.password;

    if(login == 'admin'){
        console.log('Authorized');
        next();

    }

    else{
        res.status(500).send('Not Authorized')
    }
});

module.exports = router