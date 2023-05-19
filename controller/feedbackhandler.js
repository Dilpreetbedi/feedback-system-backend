const schema=require('../model/schema');


exports.controller=async(req,res)=>{

try{
    const {name,subject,radio1,radio2,radio3,radio4,radio5}=req.body;

    const data=new schema({
        name,
        subject,
        radio1,
        radio2,
        radio3,
        radio4,
        radio5
    });

    const savedata= await data.save();

    return res.status(200).json({
        success:true,
        message:"feedback submitted sucessfully",
        savedata
    });

}

catch(error){
     console.log("unsuccessful submission");
    return res.status(200).json({
        success:false,
        message:"feedback not submitted"
    });
}



}