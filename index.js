const express = require('express')

const app = express()
const router = express.Router()
const path = require('path');

app.set('Port', 3000)
app.use(router)


const img = path.join(__dirname + '/public')

app.use(express.static(img))
app.listen(app.get('Port'), ()=>{console.log(`Server is running at port ${app.get("Port")}`)})

router.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/views/Home.html')
})

router.get('/titles', (req, res)=>{
    res.sendFile(__dirname + '/public/views/titles.html')
})

router.get('/db', (req, res)=>{
    res.sendFile(__dirname + '/db.json')
})

router.get('/posts', (req, res)=>{
    try {
        res.send('Posts')
    } catch (e) {
        console.log(e);
    }
})

router.get('/users', (req,res)=>{
        res.send('Users')
})

app.use((req, res)=>{
    res.sendFile(__dirname + '/public/views/404.html')
})