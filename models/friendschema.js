const mongoose=require('mongoose')

const FriendSchema=mongoose.Schema({
    username:{type:String,required:true},
    friends:Array
})

const Friend_Data=mongoose.model("Friend_Data",FriendSchema)
module.exports=Friend_Data