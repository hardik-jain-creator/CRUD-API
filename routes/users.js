const express=require('express')
const app=express()
const router=express.Router()
const userController=require('../Controllers/usersController')

router.get('/',userController.getUsers)
router.post('/',userController.createUser)
router.get('/:id',userController.foundUser)
router.delete('/:id',userController.deleteUser)
router.patch('/:id',userController.updateUser)

module.exports=router