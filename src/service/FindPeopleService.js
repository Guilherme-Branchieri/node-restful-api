const Person = require('../model/Person')
async function findPeople(req, res){
    try {
        const people = await Person.find()
        return people
        
    } catch (err) {

        throw err
    
}
}

module.exports = findPeople
