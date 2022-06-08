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
router.get('/', async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        return res.status(200).json(allTodos.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// Get one
router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
        if (todo.rows[0] == undefined) {
            return res.status(404).json("Todo not found!")
        }
        return res.status(200).json(todo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

// Update one
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { description } = req.body
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2", 
            [description, id]
        )
        // How to return updated item?
        return res.status(204).json(`Todo with id ${id} updated successfully.`)
    } catch (error) {
        console.log(error.message)
    }
})

// Delete one
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
        return res.status(204).json(`Todo with id ${id} deleted successfully.`)
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router