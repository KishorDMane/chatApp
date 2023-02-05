const express = require("express")
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const cors = require('cors')

const { connection } = require("./config/db")
const { GroupRouter } = require("./router/user.routs")

const app = express() 

app.use(express.json());
app.use(cors())

app.use("/group", GroupRouter)

app.get("/", (req, res) => {
    res.send({ "msg": "serveris working" })
})





app.listen(8080, async () => {
    await connection;
    console.log("8080 is started");
});





