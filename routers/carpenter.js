const express = require('express');
const Carp = require('../models/carp');
const carpRouter = express.Router();
const app = express();

carpRouter.post("/carpenter.html", async (req, res)=>{
    try {
        
        const {name, mobile, email, workexp}= req.body;

        const existingCarp= await Carp.findOne({ email });
        if(existingCarp){
            return res.status(400).json({msg:"User with same email already exist"});
        }

        let carp = new Carp({
            name,
            mobile,
            email,
        });

        carp = await carp.save();
        res.json(carp);
        // res.status(201).render('/index.html');

    } catch (e) {
        res.status(500).json({error: e.message});
    }
});

module.exports= carpRouter;

