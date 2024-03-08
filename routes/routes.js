const Router = require('express')
const router = new Router()
const UserController = require('../controller/controller')

router.post('/user',UserController.createUser)
router.get('/user/:id',UserController.getUser)
router.get('/user',UserController.getUsers)
router.put('/user/:id',UserController.updateUser)
router.delete('/user/:id',UserController.deleteUser)




module.exports = router