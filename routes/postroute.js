const express = require('express')
const route2 = express.Router()
const fetch = require('node-fetch')
const User = require('../models/schema')
const FriendSchema=require('../models/friendschema')
route2.use(express.json())

// route2.get('/', async (req, res) => {
//     res.send("Hello from route2")
// })
//Post API starts here, you can add the user
route2.post('/add/:username', async (req, res) => {
    const result = await User.find(req.params)
    //user checking
    if (result.length) {
        res.status(400).json({
            message: "User data is already present"
        })
    }
    else {
        //If we dont have user it enters else part
        const response = await fetch(`https://api.github.com/users/${req.params.username}`)
        const body = await response.json()

        //This part is for mapping followers and following
        const followers=await fetch(`https://api.github.com/users/${req.params.username}/followers`)
        const dataofFollowers=await followers.json()
        const following=await fetch(`https://api.github.com/users/${req.params.username}/followers`)
        const dataofFollowing=await following.json()
        
        let mymap={}
        let mutualFriends=new Array()
        for(let i of dataofFollowers){
            mymap[i.login]=i
        }
        for(let i of dataofFollowing){
            if(mymap[i.login]){
                mutualFriends.push(i)
            }
        }

        //Adding Friends into array
        const FriendData=await FriendSchema.create({
            "username":body.login,
            "friends":mutualFriends
        })

        const data = await User.create({
            "username": body.login,
            "id": body.id,
            "node_id": body.node_id,
            "avatar_url": body.avatar_url,
            "gravatar_id": body.gravatar_id,
            "url": body.url,
            "html_url": body.html_url,
            "followers_url": body.followers_url,
            "following_url": body.following_url,
            "gists_url": body.gists_url,
            "starred_url": body.starred_url,
            "subscriptions_url": body.subscriptions_url,
            "organizations_url": body.organizations_url,
            "repos_url": body.repos_url,
            "events_url": body.events_url,
            "received_events_url": body.received_events_url,
            "type": body.type,
            "site_admin": body.site_admin,
            "name": body.name,
            "company": body.company,
            "blog": body.blog,
            "location": body.location,
            "email": body.email,
            "hireable": body.hireable,
            "bio": body.bio,
            "twitter_username": body.twitter_username,
            "public_repos": body.public_repos,
            "public_gists": body.public_gists,
            "followers": body.followers,
            "following": body.following,
            "created_at": body.created_at,
            "updated_at": body.updated_at,
            "Friends":FriendData._id
        })
        res.status(200).json({
            data:data,
            message:"User is added Successfully"
        })
    }
})

module.exports=route2