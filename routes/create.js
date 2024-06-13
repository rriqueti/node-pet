const express = require('express');
const bodyParser = require('body-parser');
const checkAuth = require('../utils/checkAuth')
const router = express.Router();


router.use(bodyParser.urlencoded({ extended: true }));

//Pet routes
router.get('/pet', (req, res) => { 
    res.status(200).render('\\Private\\petList.ejs');
    });

router.post('/', checkAuth,(req, res)=>{
    // let data = req.body;

    // res.send(req.body)
});

//Interested routes
router.get('/', (req, res) => { 
    res.status(200).render('./Home/cadastro.ejs');
});

router.post('/', checkAuth,(req, res)=>{
    res.send(req.body)
});

module.exports = router