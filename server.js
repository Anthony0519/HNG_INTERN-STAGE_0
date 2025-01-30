const express = require("express")
require("./config/dbConfig")
const cors = require("cors")
const route = require("./routers/user")

const PORT = process.env.port

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use("/public_api", route);


app.listen(PORT,()=>{
    console.log(`SERVER ON PORT: ${PORT}`);
})