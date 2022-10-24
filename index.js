const express = require('express')
const app = express()

const port = process.env.PORT || 5000;


app.get('/', (req,res)=>{
    res.send('Courses Api running')
});



app.listen(port, ()=>{
console.log('Programming Zone running in ', port)
})