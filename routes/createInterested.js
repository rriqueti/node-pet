const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));


router.get('/', (req, res) => { 
    res.status(200).render('./Home/cadastro.ejs');
});

router.post('/', (req, res)=>{
    res.send(req.body)
    console.log('enviado')
})

module.exports = router