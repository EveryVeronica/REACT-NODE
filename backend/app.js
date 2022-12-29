const express = require('express');
const quotes = require('inspirational-quotes');


const app = express();

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers','Origin','X-Requested-With,Content-Type,Accept')
    next()
})


app.get('/', (req,res) => {
    res.send(quotes.getQuote())
})


app.listen(5000, () => {
    console.log('server start running');
})