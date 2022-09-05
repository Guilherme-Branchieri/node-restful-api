const router = require('express').Router()

//Carregando Models
const Person = require('../models/Person')


//Create - Criar dados
//Rotas da API
router.post('/', async (req, res) => {
    const {name, email, salary, approved} = req.body

    if(!name) {
        res.status(422).json({error : 'O nome é obrigatório'})
    }

    const person = {
        name, 
        email,
        salary,
        approved
    }

    try { 
        
        await Person.create(person)

        res.status(201).json({message: 'Pessoa inserida no sistema'})

    } catch (error) {
        res.status(500).json({error: error})
    }
})

//Read - ler dados
router.get('/', async (req, res) => {
  try {
    
    const people = await Person.find()
    res.status(201).json(people)
  } catch (error) {
    res.status(500).json({error: error})
  }
})

router.get('/:id', async (req, res) => {

    
    // Extrair dado da requisição
    const id = req.params.id

    try {

        const person = await Person.findOne({_id: id})

        if (!person) {
            res.status(422).json({message:'Usuario nao encontrado'})
            return    
        }

        res.status(200).json(person)
        
    } catch (error) {
        res.status(500).json({error: error})
        
    }
})

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