const Person = require('../models/Person')


module.exports = {
    updatePerson:
        async function(id, personObj) {
            try {
                const updatedPerson = await Person.updateOne({_id:id}, personObj)
                if(updatedPerson.matchedCount === 0) {
                    console.log('Usuário não registrado')
                    return false
                }                
            } catch (err) {
                console.log(err)
            }
            return true
        }
    }
