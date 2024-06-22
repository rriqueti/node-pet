const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

var db = require('../routes/db');

var getUser = db.getUser();

router.get('/', (req, res) => {
    res.render('../views/Public/login.ejs');
});

router.post('/', function (req, res, next) {
    let login = req.body.login;
    let password = req.body.password;

    user_login = getUser.filter(f => {
        return login == f.apelido;
    })

    //Validate login and password
    if (login == user_login[0].apelido && password == user_login[0].password) {
        req.session.autenticatedUser = true;
        req.session.user = user_login;
        res.cookie('lastRequest', new Date().toLocaleDateString(), {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 30,
        });

        console.log('Authorized', req.session.autenticatedUser);

        res.redirect('../v1/chat');
    }

    else {
        res.status(401).send('Not Authorized')
    }
});


router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});



module.exports = router