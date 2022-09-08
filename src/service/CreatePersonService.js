const Person = require('../model/Person')




async function createPerson(personObj){
    try { 
        const insertPerson = await Person.create(personObj)
        return (true)
    } catch (err) {
        throw err
    }
}


module.exports = createPerson

