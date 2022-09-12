const router = require('express').Router()
const controller = require('../controller/PersonController')
const {body, validationResult} = require('express-validator')
const Person = require('../model/Person')


//Rotas de Person

//Create - Criar Person
router.post('/', (req,res, next) => {
    const minSalary = 1212

    const {name, email, salary, approved} = req.body
    

    //Validar nome
    if(!name){
        return res.status(400).json({error : 'O campo nome é obrigatório!'})
    };

    if(name.lenght < 3) {
        return res.status(400).json({error:'O nome precisa conter no minimo 3 caracteres!'})
    };

    //Validar email
    if(!email) {
        return res.status(400).json({error:'O campo email é obrigatório'})
    }
    if(!body('email').isEmail()) {
        return res.status(400).json({error: 'O email inserido é inválido '})
    }
    //Validar salário
    if(!salary){
        return res.status(400).json({error:"O campo salário é obrigatório"})   
    };

    if(isNaN(salary)){
        return res.status(400).json({error:"O campo salário deve ser um número"})   
    };

    if(parseFloat(salary) < parseFloat(minSalary)){
        return res.status(400).json({error:"O campo salário não pode ter valor menor que um salario mínimo"})
    }
    next()
    }, controller.post)

//Read - ler dados
router.get('/', (req, res, next) => {
    next()
}, controller.getAll)

//Ler dados por id de Person
router.get('/:id', (req, res, next) => {
    next()
}, controller.getPerson)


// Update - atualização de dados(PUT, PATCH)

router.patch('/:id', (req,res, next) =>{ 
    next()
}, controller.updatePerson)

// Delete - Deletar dados
router.delete('/:id', (req, res, next) => {
    next()
}, controller.deletePerson)

module.exports = router