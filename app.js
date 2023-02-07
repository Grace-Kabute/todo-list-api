const express = require('express') //node.js module. for writting API
const app = express()
const port = 3001
app.get("/", (req, res) => {
    res.send('welcome to our todo app API')
})
app.get("/home", (req, res) => {
    res.send('welcome home.')
})
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`server connected on ${port}`);
})