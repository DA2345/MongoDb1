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

app.post('/users',(req,res)=>{
    const data= new User(req.body)
    data.save()
    .then(user=>
        {
            console.log('user saved!',user)
            res.json({sucess:true, user})
        })
    .catch(err=> console.log(err))
})

app.delete('/users/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const deletedUser = await User.findByIdAndDelete(userId);
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }  
      res.json({ success: true, deletedUser });

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });



app.listen(PORT)
console.log("Listening to the port "+ PORT)