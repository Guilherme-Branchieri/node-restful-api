const { parse } = require('dotenv')
const Person = require('../model/Person')

module.exports = {

    personExist: async function (id){
        const person = await Person.exists({_id: id})
        console.log(person)
        return person
    },

    findPersonById: async function findPersonById(id){

        try {
            const person = await Person.findOne({_id: id})
    
            if (person) {
                return person
            } else {
                return false
            }
           
        }
        catch(err) {
            console.log(err)
        }
    }
    
}