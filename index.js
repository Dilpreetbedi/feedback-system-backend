

const express=require('express');

const app=express();

app.use(express.json());

require("dotenv").config();
const database=require("./config/database");
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
database();
const routes=require('./routes/routes');
app.use('/api',routes);



app.listen(process.env.PORT,()=>{

console.log("the server started successfully");

});


app.get('/',(req,res)=>{
    res.send("hello");
})









