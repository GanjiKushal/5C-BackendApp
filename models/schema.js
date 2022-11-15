const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    "username": String,
    "id": Number,
    "node_id": String,
    "avatar_url": String,
    "gravatar_id": String,
    "url": String,
    "html_url": String,
    "followers_url": String,
    "following_url": String,
    "gists_url": String,
    "starred_url": String,
    "subscriptions_url": String,
    "organizations_url": String,
    "repos_url": String,
    "events_url": String,
    "received_events_url": String,
    "type": String,
    "site_admin": Boolean,
    "name": String,
    "company": String,
    "blog": String,
    "location": String,
    "email": {type:String,default:null},
    "hireable": Boolean,
    "bio": {type:String,default:null},
    "twitter_username": {type:String,default:null},
    "public_repos": Number,
    "public_gists": Number,
    "followers": Number,
    "following": Number,
    "created_at": Date,
    "updated_at": Date,
    "Friends":{type:mongoose.Schema.Types.ObjectId, ref:'Friend_Data'}
})

const User_Data=mongoose.model("User_Data",UserSchema)
module.exports=User_Data