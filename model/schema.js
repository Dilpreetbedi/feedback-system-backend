const mongoose=require('mongoose');

const schema= new mongoose.Schema({

name:{
   type:String,
   require:true
},

subject:{
    type:String,
    require:true
},

radio1:{
    type:String,
    require:true
},
radio2:{
    type:String,
    require:true
},
radio3:{
    type:String,
    require:true
},
radio4:{
    type:String,
    require:true
},
radio5:{
    type:String,
    require:true
}


});


module.exports=mongoose.model("schema",schema);