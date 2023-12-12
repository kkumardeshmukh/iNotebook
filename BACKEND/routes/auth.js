const express = require('express')
const User = require("../models/User")
const router = express.Router()
const { body, validationResult } = require("express-validator")
const bcrypt = require ("bcryptjs")
const jwt = require ("jsonwebtoken")


const JWT_SECRETE= 'Harryisgoodb$oy';

//ROUTE 1-Create a user using: POST "/api/auth/createuser".doesnt require Auth

router.post(
  '/createuser', [
  body('name', 'enter valid name').isLength({ min: 2 }),
  body('email', 'enter valid email').isEmail(),
  body('password', 'password must be at least 3 characters').isLength({ min: 3 })
],
  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email })
      console.log(user)

      if (user) {
        return res.status(400).json({ error: "sry user already exist" })
      }

const salt = await bcrypt.genSalt(10)
const secPass =  await bcrypt.hash(req.body.password, salt)  


      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      })
      const data= {
        user:{
          id: user.id
        }
      }
      const authtoken = jwt.sign(data,JWT_SECRETE)
      console.log(authtoken)

      // res.json(user)

      res.json({authtoken:authtoken})
    }
    catch (error) {
      console.log(error.message)
      res.status(500).send("some error occured")
    }
  }
);



//ROUTE 2-Authenticate a user using: POST "/api/auth/login".login not required 

router.post(
  '/login', [
  body('email', 'enter valid email').isEmail(),
  body('password', 'password can not be blank').exists()
],
  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body
    try {
      
      let user = await User.findOne({email})
      if(!user){
        return res.status(400).json({error:"sry user does not exist"})
      }

      const passwordCompare = await bcrypt.compare(password,user.password)
      if(!passwordCompare){
        return res.status(400).json({error:"password not matching"})
      }

      const data= {
        user:{
          id: user.id
        }
      }
      const authtoken = jwt.sign(data,JWT_SECRETE)
      res.json({authtoken})

    }  catch (error) {
      console.log(error.message)
      res.status(500).send("Internal server error")
    }

  }) 


module.exports = router