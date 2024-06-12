const express = require('express');
const bodyParser = require('body-parser');
const { route } = require('../checkEmail');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

//rota que vai renderizar a página
router.get('/', (req, res) => { 
    res.status(200).render('./Home/cadastro.ejs');
});

router.post('/', (req, res)=>{
    res.send(req.body)
})

module.exports = router