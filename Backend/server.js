const express = require('express');
const app = express()
const dotenv = require("dotenv")
const {chats} = require("./Data/data.js")
const PORT = process.env.PORT || 5000

dotenv.config();

app.get("/", (req, res)=>{
    res.send("API is running")
})

app.get("/api/chat",(req, res)=>{
    res.send(chats);
})

app.get("/api/chat/:id", (req, res)=>{
    // console.log(req.params.id)
    const singleChat = chats.find((c) => c._id === req.params.id)
    res.send(singleChat);

})

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))

