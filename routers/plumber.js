const express = require('express');
const Plum = require('../models/plum');
const plumRouter = express.Router();
const app = express();

plumRouter.post("/plumber.html", async (req, res)=>{
    try {
        
        const {name, mobile, email}= req.body;

        const existingPlum= await Plum.findOne({ email });
        if(existingPlum){
            return res.status(400).json({msg:"User with same email already exist"});
        }

        let plum = new Plum({
            name,
            mobile,
            email,
        });

        plum = await plum.save();
        res.json(plum);
        // res.status(201).render('/index.html');

    } catch (e) {
        res.status(500).json({error: e.message});
    }
});

module.exports= plumRouter;

