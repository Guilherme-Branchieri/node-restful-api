const Person = require('../model/Person')
const findPersonById = require('./FindPersonService')




async function createPerson(personObj){
    try {  
            console.log(personObj)
            console.log(personObj.id)
            const getPersonObj = await Person.findOne(personObj)
            console.log(getPersonObj)
            if(getPersonObj){
                return (false)
            } else {
                const insertPerson = await Person.create(personObj)
                return(true)

            }
        }
        
    catch (err) {
        console.log(err)
        return `Houve um erro:\n${err}` 
    }
}


module.exports = createPerson

