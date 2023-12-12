const express = require('express')
const fetchuser = require('../middleware/fetchuser')
const router = express.Router()
const Note = require("../models/Note")
const { body, validationResult } = require("express-validator")


//ROUTE 1-Get all the notes : GET "/api/notes/fetchallnotes".login required 
router.get('/fetchallnotes', fetchuser, async (req, res) => {

    const notes = await Note.find({ user: req.user.id })

    res.json(notes)
})


//ROUTE 2-Add a new note : POST "/api/notes/addnote".login required 
router.post('/addnote', fetchuser, [
    body('title', 'enter valid title').isLength({ min: 3 }),
    body('description', 'enter valid description').isLength({ min: 5 }),
], async (req, res) => {
try{
    const {title, description, tag}= req.body

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
const note = new Note({

    title, description, tag, user:req.user.id

})

const savedNote = await note.save()
res.json(savedNote)

} catch (error) {
    console.log(error.message)
    res.status(500).send("some error occured")
  }
})

module.exports = router