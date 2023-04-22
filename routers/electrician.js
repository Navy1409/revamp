const express = require('express');
const Elec = require('../models/elec');
const elecRouter = express.Router();
const app = express();

elecRouter.post("/electrician.html", async (req, res)=>{
    try {
        
        const {name, mobile, email, workexp}= req.body;

        const existingElec= await Elec.findOne({ email });
        if(existingElec){
            return res.status(400).json({msg:"User with same email already exist"});
        }

        let elec = new Elec({
            name,
            mobile,
            email,
            // workexp,
        });

        elec = await elec.save();
        res.json(elec);
        // res.status(201).render('/index.html');

    } catch (e) {
        res.status(500).json({error: e.message});
    }
});

module.exports= elecRouter;

