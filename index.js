const express=require('express')
const mongoose=require('mongoose')
const app=express()
const port=8080
const route1=require('./routes/getroute')
const route2=require('./routes/postroute')
// const route3=require('./routes/put&deleteroute')
//connecting to database
mongoose.connect('mongodb+srv://kushal:Kushal24@cluster0.q2aawhd.mongodb.net/test',(err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Connected to DB");
    }
})

app.use(express.json())
app.use("/",route1)
app.use("/",route2)
// app.use("/",route3)

app.get('/', async(req,res)=>{
    res.send("Hello from server")
})
app.listen(port,()=>{
    console.log("Server is listening at port "+port);
})