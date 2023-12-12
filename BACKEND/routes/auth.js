const express= require('express')
const User = require ("../models/User")
const router= express.Router()
const {body, validationResult}= require("express-validator")



//Create a user using: POST "/api/auth/".doesnt require Auth

router.post(
    '/', [
    body('name','enter valid name').isLength({min:2}),
    body('email','enter valid email').isEmail(),
    body('password','password must be at least 3 characters').isLength({ min: 3 })
],
    (req, res) => {
      
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user)).catch(err=>{console.log(err)
    res.json({error:"plz enter unique value for email",message:err.message})})
    }
  );

module.exports= router