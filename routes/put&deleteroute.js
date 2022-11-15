const express = require('express')
const route3 = express.Router()
const User = require('../models/schema')
route3.use(express.json())

//PUT API Starts here, you can update the data of the user
route3.put('/update/:username', async(req,res)=>{
    try {
        const result=await User.updateOne(req.params,req.body)
        res.status(200).json({
            message:"User is updated Successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        
    }
})
//DELETE API Starts here, yu can delete the user here
route3.delete('/delete/:username', async(req,res)=>{
    try {
        const result=await User.findOneAndDelete(req.params)
        res.status(200).json({
            message:"User is deleted Successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})
module.exports=route3