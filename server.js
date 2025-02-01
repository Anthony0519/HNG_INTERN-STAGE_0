const express = require("express")
const cors = require("cors")
require("dotenv").config()

const PORT = process.env.port

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.get("/public_api/info",  (req, res) => {
    try {
        let timeStamp = new Date()
        timeStamp.setHours(timeStamp.getHours() + 1)
        const response = {
            email: process.env.email,
            current_datetime: timeStamp,
            github_url: process.env.github
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
});


app.listen(PORT,()=>{
    console.log(`SERVER ON PORT: ${PORT}`);
})