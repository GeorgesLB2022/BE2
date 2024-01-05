const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const getUsers = asyncHandler(async(req,res)=>{
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
    })

const getUser = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const createUser  =asyncHandler(async(req,res)=>{
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
    })

const updateUser = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if(!user){
            res.status(404)
            throw new Error(`cannot find id: ${id}`) 
        }
        const updatedUser = await User.findById(id)
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const deleteUser = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id)
        if(!user){
            res.status(404)
        throw new Error(`cannot find id: ${id}`)          
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

//check if a User exists and get firstname and lastname

async function getNameAndLastNameById(userId) {
    try {
      const user = await User.findById(userId);
  
      if (user) {
        return { name: user.firstname, lastname: user.lastname };
      } else {
        return null; // User not found
      }
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
  }

const checkUserExists = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const userDetails = await getNameAndLastNameById(id);

    if (userDetails) {
      return res.status(200).json(userDetails);
    } else {
      return res.status(404).json({ message: `User with ID ${id} not found.` });
    }
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

//check if a User exists

async function doesUserExist(firstname, lastname) {
    try {
      const user = await User.findOne({ firstname, lastname });
  
      return !!user; // Returns true if user exists, false otherwise
    } catch (error) {      
      console.error('Error checking user existence:', error);
      return false;
    }
  }
  const checkUser = asyncHandler(async(req,res)=>{
    try {
        const {firstname,lastname} = req.params;       
        const userExists = await doesUserExist(firstname,lastname);
        if (userExists) {
          return res.status(200).json({ message: `User ${firstname} ${lastname} exists.` });
        } else {
          return res.status(404).json(null);
        }
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})


    module.exports = {
        getUsers,
        getUser,
        createUser,
        updateUser,
        deleteUser,
        checkUserExists,
        checkUser,

    }