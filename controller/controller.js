class UserController {
    async createUser (req,res) {
        const {name,surname} = req.body
        console.log(name,surname)
        res.json({message : "Created User"}) 
    }
    async getUsers (req,res) {
        
    }
    async getUser (req,res) {
        
    }
    async updateUser (req,res) {
        
    }
    async deleteUser (req,res) {
        
    }
}

module.exports = new UserController