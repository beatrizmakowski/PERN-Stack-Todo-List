const express = require("express")
const express = require("cors")
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

app.listen(3000, () => {
    console.log('Server running on port 3000')
})