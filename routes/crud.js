const express = require('express');
const bodyParser = require('body-parser');
const checkAuth = require('../utils/checkAuth');
const router = express.Router();

var interessados = [];
var pets = [];

function isValid(data_create) {
    if(data_create == ''){
        return false;
    }
    else{
        return true;
    }
};

router.use(bodyParser.urlencoded({ extended: true }));

//Pet routes
router.get('/pet', checkAuth, (req, res) => {
    res.status(200).render('../views/Private/petList.ejs', { data: pets });
});

router.post('/pet', checkAuth, (req, res) => {
    if(isValid(req.body.name)){
        var data_create = {
            id: crypto.randomUUID(),
            name: req.body.name,
            age: req.body.age,
            description: req.body.description,
            interesteds: [],
        };

        pets.push(data_create);

        console.log(pets);

        res.redirect('/register/pet');
    }
    else{ 
        res.send('<script>alert("Dados inválidos"); window.location.href = "/register/pet"; </script>');
    }
});

//Interested 
router.get('/interessados', checkAuth, (req, res) => {
    console.log('passou no GET interessados', interessados)
    res.status(200).render('../views/Private/Interessados.ejs', { data: interessados });
});

router.post('/interessados', checkAuth, (req, res) => {
    if(isValid(req.body.name)){
        let id_data_animal = req.body.id_data;

        if(!id_data_animal){
            nome_animal = '';
            id_animal = '';
        }
        else{
            let pet_interested = pets.filter(f =>{
                return f.id == id_data_animal;
            });

            nome_animal = pet_interested[0].name;
            id_animal = pet_interested[0].id;
        };
   
        var data_create = {
            id: crypto.randomUUID(),
            name: req.body.name,
            fone: req.body.fone,
            email: req.body.email,
            nome_animal: nome_animal,
            id_animal: id_animal,
        };

        interessados.push(data_create);

        res.status(201).redirect('/register/interessados');
    }
    else{
        res.send('<script>alert("Dados inválidos"); window.location.href = "/register/interessados"; </script>');
    }
});


//Delete methods

router.post('/delete/pet/:id_pet', checkAuth, (req, res)=> {
    let id_pet = req.params.id_pet;

    var novo_pets = pets.filter(p => {
        return id_pet != p.id
    })

    pets = novo_pets;

    res.send('<script>alert("Excluido com sucesso"); window.location.href = "/register/pet"; </script>');
    
});

router.post('/delete/interessados/:id_interessados', checkAuth, (req, res)=> {
    let id_interessados = req.params.id_interessados;

    var novo_interessados = interessados.filter(p => {
        return id_interessados != p.id
    })

    interessados = novo_interessados;

    res.send('<script>alert("Excluido com sucesso"); window.location.href = "/register/interessados"; </script>');
    
});


module.exports = router
