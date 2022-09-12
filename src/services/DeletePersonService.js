const Person = require('../models/Person')

module.exports = {
    deletePerson: async (id) => {
        try {
            const deletePerson = await Person.findOneAndDelete({_id:id})
            console.log('Pessoa excluida')
            return true
        } catch (error) {
            console.log('Erro ao excluir pessoa')
            return false
        }
    }
}