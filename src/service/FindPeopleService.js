const Person = require('../model/Person')




module.exports = {
    findPeople: 
        async function findPeople(){
            try {
                const people = await Person.find()
                return people
                
            } catch (err) {
                console.log(err)
                
            
        }
    }    

}
