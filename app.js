const express = require("express")

require("dotenv").config()

const aiRoute = require("./routes/aiRoute")

const app = express()

//bodyparser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api",aiRoute)

const PORT = process.env.PORT || 3210

app.listen(PORT,()=>{
    console.log(`server started on port:${PORT}`)
})