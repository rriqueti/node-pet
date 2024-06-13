const express = require('express');
const bodyParser = require('body-parser');
const checkAuth = require('../utils/checkAuth')
const router = express.Router();


let listaUsuarios = [{
    
}];


router.use(bodyParser.urlencoded({ extended: true }));

//Pet routes
router.get('/pet', (req, res) => { 
    res.status(200).render('../views/Private/petList.ejs', {data: listaUsuarios});
    });

router.post('/pet', (req, res)=>{
    let data = req.body;

    listaUsuarios.push(data);
    console.log(listaUsuarios);
    res.render('../views/Private/petList.ejs',  {data: listaUsuarios});
});

//Interested routes
router.get('/', (req, res) => { 
    res.status(200).render('./Home/cadastro.ejs');
});

router.post('/', checkAuth,(req, res)=>{
    res.send(req.body)
});

module.exports = router