const express = require('express')
const router = express.Router();
const User = require('../models/userModel')
const {getUsers,getUser,createUser,updateUser,deleteUser,checkUserExists,checkUser} = require('../controllers/userController')

router.get('/', getUsers)
    
router.get('/:id', getUser)

router.get('/checkUserExists/:id', checkUserExists)

router.get('/checkUser', checkUser)
      
router.post('/', createUser)
    
router.put('/:id', updateUser)
    
router.delete('/:id', deleteUser)

module.exports = router;