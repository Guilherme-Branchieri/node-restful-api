const router = require('express').Router()
const controller = require('../controller/PersonController')


//Rotas de Person

//Create - Criar Person
router.post('/', (req,res, next) => {
    const minSalary = 1212
    

    //Validar nome
    if(!req.body.name){
        return res.status(400).json({error : 'O campo nome é obrigatório!'})
    };

    if(!req.body.name.lenght < 3) {
        return res.status(400).json({error:'O nome precisa conter no minimo 3 caracteres!'})
    };

    //Validar email
    const mail = req.body.email
    if(!req.body.email) {
        return res.status(400).json({error : 'O campo email é obrigatório!'})
    }
    //Validar salário
    if(!req.body.salary){
        return res.status(400).json({error:"O campo salário é obrigatório"})   
    };

    if(isNaN(req.body.salary)){
        return res.status(400).json({error:"O campo salário deve ser um número"})   
    };

    if(parseFloat(req.body.salary) < parseFloat(minSalary)){
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

router.patch('/:id', async(req,res) =>{ 
    const id = req.params.id

    const {name, email, salary, approved} = req.body
    
    const person = {
        name,
        email,
        salary,
        approved
    }

    try {
        const UpdatedPerson = await Person.updateOne({_id:id}, person)
        
        if(UpdatedPerson.matchedCount === 0) {
            res.status(422).json({message: 'Usuário não registrado'}
            )

        }


        res.status(200).json(person)
        
    } catch (error) {
        res.status(500).json({error:error})
        
    }
})

// Delete - Deletar dados
router.delete('/:id', async(req, res) => {
    const id = req.params.id

    const person = await Person.findOne({_id:id})

    if(!person) {
        res.status(422).json({message: 'O usuário não foi encontrado!'})
        return
    }

    try {
        await Person.deleteOne({_id:id})
        res.status(201).json({message:'Usuário excluido com sucesso'})
    } catch (error) {
        res.status(500).json({error: error})
    }
})
module.exports = router