const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectToMongoDB = require('./db')
const User = require('./modals/User')

const app = express();
 connectToMongoDB()

app.use(cors())

// Connect to your database (e.g., MongoDB)
// Middleware to parse JSON data
app.use(bodyParser.json());


// Start the server
const port =  5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.post('/create-user', async(req, res) =>{
  const {email, password} = req.body
  try{
    await User.create({
      email: email,
      password: password
    })

   // res.status(201).json({message: 'User created.'})
   res.status(201).json({message: 'User created.'})

  }
  catch{
    res.status(500).json({message:'Server Error'})
  }
})


app.post('/login', async(req, res) =>{
  const {email, password} = req.body
  try{
    console.log(email, password);
    // await User.findOne({
    //   email: email,
    //   password: password
    // })

    res.status(201).json({message: 'message from server'})

  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
  
})





