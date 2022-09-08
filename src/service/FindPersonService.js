const Person = require('../model/Person')

async function findPersonById(req, res){

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
        res.status(404).json({error: error})
        
    }
}

module.exports = findPersonById