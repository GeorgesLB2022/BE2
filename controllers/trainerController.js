const Trainer = require('../models/trainerModel')
const asyncHandler = require('express-async-handler')

const getTrainers = asyncHandler(async(req,res)=>{
    try {
        const trainers = await Trainer.find({})
        res.status(200).json(trainers)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
    })

const getTrainer = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const trainer = await Trainer.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const createTrainer  =asyncHandler(async(req,res)=>{
    try {
        const trainer = await Trainer.create(req.body)
        res.status(200).json(trainer)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
    })

const updateTrainer = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const trainer = await Trainer.findByIdAndUpdate(id, req.body);
        if(!trainer){
            res.status(404)
            throw new Error(`cannot find id: ${id}`) 
        }
        const updatedTrainer = await Trainer.findById(id)
        res.status(200).json(updatedTrainer)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const deleteTrainer = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const trainer = await Trainer.findByIdAndDelete(id)
        if(!trainer){
            res.status(404)
        throw new Error(`cannot find id: ${id}`)          
        }
        res.status(200).json(trainer)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

    module.exports = {
        getTrainers,
        getTrainer,
        createTrainer,
        updateTrainer,
        deleteTrainer

    }