const express=require('express');

const routes=express.Router();


const {controller}=require('../controller/feedbackhandler');


routes.post("/submit",controller);


module.exports=routes;



