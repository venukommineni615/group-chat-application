const express=require('express')
const path=require('path')
const app=express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname ,'views', 'login.html'))
})
app.post('/message', (req, res) => {

    let body=req.body
    let chat=fs.readFileSync('/chat/', 'utf8')
})
app.get('/', (req, res) => {
    let chat=fs.readFileSync('/chat/', 'utf8')

    res.write(chat)
    res.status(201).sendFile(path.join(__dirname ,'views', 'message.html'))
});

app.listen(4000)