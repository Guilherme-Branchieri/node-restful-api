const { json } = require('express')
const Person = require('../model/Person')
const createPerson = require('../service/CreatePersonService')
const FindPeopleService = require('../service/FindPeopleService')
const findPerson =  require('../service/FindPersonService')
const UpdatePersonService = require('../service/UpdatePersonService.js')
const DeletePersonService = require('../service/DeletePersonService')




module.exports = {
    post: async (req, res) => {
        try {
            const personCreation = await createPerson(req.body)
            if(!personCreation) {
                return res.status(400).json({message:"Pessoa já cadastrada"})
            }
            return res.status(201).json({message:"Pessoa inserida com sucesso"})       
            
        } catch (error) {
            
        }
    },
    
    getAll: async (req, res) => {
        try {
            const people = await FindPeopleService.findPeople()
            res.status(201).json(people)
            } 
        catch (err) {
            console.log(err)
            }
        },
    
    getPerson: async(req, res) => {
        // Extrair dado da requisição
        id = req.params.id
        console.log('esse é o id ' + id)
        try {
            const searchPerson = findPerson.personExist(id)
            console.log(searchPerson)
            if(!searchPerson) {
                return res.status(404).json({message: "Usuário não encontrado"})
            }
            const person = await findPerson.findPersonById(id)
            console.log('essa é a pessoa ' + person)
            if (!person) {
                return res.status(400).json({message:'Usuario nao encontrado'})    
            } else {
                return res.status(201).json(person)
            }
            
        } catch (err) {
            console.log(err)
            
        }
    },
    
    updatePerson: async (req, res) => {
        const personObj = req.body
        const id = req.params.id
        console.log(id)
        const personUpdate = await UpdatePersonService.updatePerson(id, personObj)
        console.log(personUpdate)
        if(!personUpdate) {
            res.status(400).json({message:'Não foi possivel atualizar os dados, erro'})
        } else {
            res.status(400).json({success:'Dados atualizados com sucesso!'})
        }
    },

    deletePerson: 
        async (req, res) => {
        const id = req.params.id
        try {
            const person = await DeletePersonService.deletePerson(id)
            console.log('Usuario excluido:\n' + person)
            res.status(201).json({message:'Dados excluidos com sucesso'})
            
        } catch (error) {
        }
      
    },
    
}
