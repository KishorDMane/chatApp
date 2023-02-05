const mongoose=require("mongoose");


const groupSchema=mongoose.Schema({
    
        
        group_name: String,
        Password:String,
        images:String,
        Discription: String
    
})
const groupModel=mongoose.model("group",groupSchema);

module.exports={groupModel};
