const mongoose = require("mongoose");

const plumSchema = mongoose.Schema({
    name: {
        required: true,
        type:String,
        trim: true,
    },

    mobile: {
        required: true,
        type: String,
    },

    email: {
        required: true,
        type:String,
        trim: true,
        validate:{
            validator: (value)=>{
                const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return value.match(re);
            },
            message: "Enter valid email"
        },
    },
});

const Plum= mongoose.model("Plum", plumSchema);

module.exports= Plum;
