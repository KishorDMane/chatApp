const mongoose=require("mongoose");


const GroupSchema=mongoose.Schema({
    
        
        group_name: String,
        Password:String,
        images:String,
        Discription: String
    
})
const GroupModel=mongoose.model("group",GroupSchema);

module.exports={GroupModel};
