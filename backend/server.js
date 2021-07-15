const express = require ('express')
const cors = require('cors')
const app = express()


app.use(cors())

app.get('/api',(req,res)=>{
    res.json(
        [
            {userid:'lee123',content:'안녕121212 ',date:'2020-121-454'},
            {userid:'lee123',content:'안녕 ',date:'2020-121-454'},
            {userid:'lee123',content:'안녕 ',date:'2020-121-454'},
            {userid:'lee123',content:'안녕123123 ',date:'2020-121-454'},
            {userid:'lee123',content:'안녕 ',date:'2020-121-454'},
            {userid:'lee123',content:'안녕 ',date:'2020-121-454'},

    ]
        )
})

app.listen(3000,()=>{
    console.log('삼천세계')
})