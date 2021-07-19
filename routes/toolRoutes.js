const express = require("express")
const router = express.Router();
const Tool = require("../models/Tool")
// const allUser = require("../models/AllUser")
const fetch = require("node-fetch");

// gets back all users

router.get('/' , async (req,res)=>{
    try{
        const tools = await Tool.find();
        // const allUsers = await allUser.find();
        res.json(tools)
        // res.json(allUsers)
    }
    catch(err){
        res.json({message : err})
    }
})


// posts to DB

router.post('/',(req, res)=>{
    console.log(req.body)

    const toolDetails = new Tool({

        name : req.body.name,
        desc : req.body.desc,
        category : req.body.category,
        status : req.body.status,
        

    })
   
    toolDetails.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {res.json({message  : err})})
})

// finds userdetails from ethaddress

// router.get('/details/:ethAddress' , async (req,res)=>{
//     try{
//     const user = await User.find({"ethAddress" : `${req.params.ethAddress}`})
//     res.json(user)
//     }
//     catch(err){
//         res.json({message : err})
//     }

// })

// router.get('/:ethAddress' , async (req,res)=>{

//     const ethAddress = req.params.ethAddress;
//     console.log(ethAddress);
//     //Request URL: https://try.readme.io/https://api.opensea.io/api/v1/assets?owner=0xe579cb4431b92f64a6e02fa4ca9e5091049b8392&order_direction=desc&offset=0&limit=2
//     // assets?order_direction=desc&offset=0&limit=20
//     const url = `https://api.opensea.io/api/v1/assets?owner=${ethAddress}&order_direction=desc&offset=0&limit=10`;
//     const options = {
//       method: "GET",
//       qs: {
//         owner: ethAddress,
//         order_direction: "desc",
//         offset: "0",
//         limit: "2",
//       },
//     };

//     fetch(url, options)
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(json);
//         console.log(ethAddress);
//         res.send(json)
        
        
//       })
//       .catch((err) => console.error("error:" + err));

// })



module.exports = router;