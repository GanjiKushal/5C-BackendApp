const express = require('express')
const route1 = express.Router()
const User = require('../models/schema')
const FriendSchema=require('../models/friendschema')
route1.use(express.json())

//This is for route checkiing ignore it
// route1.get('/', async (req, res) => {
//     res.send("Hello from Router")
// })
route1.get('/alldata', async(req,res)=>{
    try {
        const data=await User.find(req.query).sort([[req.query.sortby]])
        console.log("Hello from all data");
        res.json({
            status:200,
            message:"You can check data here",
            data:data
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})
route1.get('/friend/:username', async(req,res)=>{
    try {
        const data=await FriendSchema.find(req.params)
        res.json({
            status:200,
            message:"You can check friends here",
            data:data
        })

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

module.exports=route1