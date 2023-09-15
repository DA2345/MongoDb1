const PORT = 3000|| process.env.PORT
const express = require ("express")
const connection= require("./connection")
const User= require("./user")
const app = express()
require("dotenv").config()

connection()
app.use(express.static("public"))
app.use(express.json())

app.get('/users', async(req,res)=>
{
    try{
        const users = await User.find()
        res.status(200).json(users)
    }
    catch (err)
    {
        res.json({"error": console.log(err)})
    }
})





app.listen(PORT)
console.log("Listening to the port "+ PORT)