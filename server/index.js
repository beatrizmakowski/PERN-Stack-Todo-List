const express = require("express")
const cors = require("cors")
const routes = require("./routes")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use('/todos', routes)

app.listen(3000, () => {
    console.log('Server running on port 3000')
})