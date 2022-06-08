const express = require("express")
const pool = require("./db")
const router = express.Router()

//ROUTES//
// Create
router.post('/', async (req, res) => {
    try {

        const { description } = req.body
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", 
            [description]
        )
        return res.status(201).json(newTodo.rows[0])

    } catch (error) {
        console.error(error.message)
    }
})

// Get all

// Get one

// Update one

// Delete one

module.exports = router