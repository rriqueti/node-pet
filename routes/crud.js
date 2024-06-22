const express = require('express');
const bodyParser = require('body-parser');
const checkAuth = require('../utils/checkAuth');

const router = express.Router();


var db = require('./db');

var getUser = db.getUser();
var getMsg = db.getMessage();


function isValid(data_create) {
    if (data_create == '') {
        return false;
    }
    else {
        return true;
    }
};

router.use(bodyParser.urlencoded({ extended: true }));

//User routes
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

router.get('/register/index', checkAuth, (req, res) => {
    console.log('passou aq')
    res.status(200).render('../views/Private/index-users.ejs', { users: getUser })
})

router.get('/new-register', (req, res) => {
    res.status(200).render('../views/Public/register.ejs');
});

router.post('/register', (req, res) => {
    var nome = req.body.name;
    var email = req.body.email;
    var data_nascimento = req.body.birthdate;
    var apelido = req.body.nickname;
    var password = req.body.password;

    if (isValid(email) && isValid(password) && isValid(nome) && isValid(apelido)) {
        var new_user = {
            id: crypto.randomUUID(),
            name: nome,
            dn: data_nascimento,
            apelido: apelido,
            email: email,
            password: password,
        };

        getUser.push(new_user);

        res.send('<script>alert("Cadastrado com sucesso"); window.location.href = "/"; </script>');
    }

    else {
        res.send('<script>alert("Dados inválidos");</script>');
    }

})

//Chat routes
router.get('/chat', checkAuth, (req, res) => {
    res.status(200).render('../views/Private/chat.ejs', { messages: getMsg, apelido: req.session.user[0].apelido });
});

router.post('/sendmessage', checkAuth, (req, res) => {
    var msg = req.body.message

    if (isValid(msg)) {
        var new_message = {
            id: crypto.randomUUID(),
            message: msg,
            apelido: req.session.user[0].apelido,
            created_at: new Date().toUTCString(),
        }

        getMsg.push(new_message);

        res.redirect('/v1/chat');
    }

    else {
        res.send('<script>alert("Dados inválidos"); window.location.href = "/v1/chat"; </script>');
    }
});



module.exports = router;