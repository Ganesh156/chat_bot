const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.send(`Hi Guest, I'm Dia - Your Customer support assistent! Please select the issue you want to resolve?`)
})

app.post('/request',(req,res)=>{
    
})

app.listen(8000,()=>{
    console.log('App is running is in port 8000');
})