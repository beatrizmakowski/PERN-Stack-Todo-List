const express = require("express")
const cors = require("cors")
const pool = require("./db")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

//ROUTES//

// Create

// Get all

// Get one

// Update one

// Delete one


app.listen(3000, () => {
    console.log('Server running on port 3000')
})