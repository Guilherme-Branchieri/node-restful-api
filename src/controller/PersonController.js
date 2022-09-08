const { json } = require('express')
const createPerson = require('../service/CreatePersonService')
const FindPeopleService = require('../service/FindPeopleService')
const findPersonById = require('../service/FindPersonService')
const validateEmail = require('../service/ValidateEmail')



module.exports = {
    post: async (req, res) => {
        console.log(req.body)
        try {
            if (createPerson(req.body)) {
                res.status(201).json({message:"Pessoa inserida com sucesso"})
            }
            
        } catch (error) {
            res.status(500).json({error:error})
        }
            },
    
    getAll: async (req, res) => {
        try {
            const people = await FindPeopleService()
            console.log(people)
            res.status(201).json(people)
            } 
        catch (error) {
            res.status.json({error: error})
            }
        },
    
    getPerson: async (req, res) => {
        // Extrair dado da requisição
        const id = req.params.id
    
        try {
    
            const person = await findPersonById.findOne({_id: id})
    
            if (!person) {
                res.status(422).json({message:'Usuario nao encontrado'})
                return    
            }
    
            res.status(200).json(person)
            
        } catch (error) {
            res.status(500).json({error: error})
            
        }
    }
}
