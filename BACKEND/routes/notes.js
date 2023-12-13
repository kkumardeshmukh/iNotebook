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
    try {
        const { title, description, tag } = req.body

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({

            title, description, tag, user: req.user.id

        })

        const savedNote = await note.save()
        res.json(savedNote)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("some error occured")
    }
})


//ROUTE 3-update a existing note using : PUT "/api/notes/updatenote".login required 

router.put('/updatenote/:id', fetchuser, async (req, res) => {

    try {


        const { title, description, tag } = req.body
        // creating newNote object

        const newNote = {};

        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }


        // find the new note to be updated and update it 
        let note = await Note.findById(req.params.id);
        if (!note) { res.status(404).send('Note not found') }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("user u r  not allowed to update this note")
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })

        res.json({ note })

    } catch (error) {
        console.log(error.message)
        res.status(500).send("some error occured")
    }

})


//ROUTE 4-delete a existing note using : DELETE "/api/notes/deletenote".login required 

router.delete('/deletenote/:id', fetchuser, async (req, res) => {


    const { title, description, tag } = req.body

    // find the note to be deleted and delete it  
    try {


        let note = await Note.findById(req.params.id);
        if (!note) { res.status(404).send('Note not found') }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("user u r  not allowed to delete this note")
        }

        note = await Note.findByIdAndDelete(req.params.id)

        res.json({ note, "success": "Note is deleted successfully" })
    } catch (error) {
        console.log(error.message)
        res.status(500).send("some error occured")
    }
})

module.exports = router