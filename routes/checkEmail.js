const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res)=>{
    res.render('../views/Public/login.ejs');
});

router.post('/', function (req, res, next) {
    let login = req.body.login;
    let password = req.body.password;

    //Validate login and password
    if(login == 'admin' && password == '123'){
        req.session.autenticatedUser = true;
        res.cookie('lastRequest', new Date().toLocaleDateString(),{
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 30,
        });

        console.log('Authorized');

        res.redirect('../views/Private/petList.ejs')
        next();

    }
    else{
        res.status(500).send('Not Authorized')
    }


});



module.exports = router