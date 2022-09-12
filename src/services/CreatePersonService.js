const Person = require('../models/Person')

async function createPerson(personObj){
    try {  
            const getPersonObj = await Person.findOne(personObj)
            if(getPersonObj){
                return(false)
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

