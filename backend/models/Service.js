import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: {type: String, required: true, trim:true},
    //ABOUT PARTICULAR SERVICE AND SHORT DESCRIPTION ABOUT THE SERVICE
    about: { type: String, default: "" },
    shortDescription: { type: String, default: "" },
    
    //PRICE OF THE SERVICE AND SERVICES AVAILABLE OR NOT.
    price: { type: Number, default: 0 },
    available: { type: Boolean, default: true },

    //IMAGE OF THE SERVICE.
    imageUrl: { type: String, default: null },
    imagePublicId: { type: String, default: null },

    //PARTICLUAR DATES AND SLOTS.
    dates: { type: [String], default: [] },
    slots: { type: Map, of: [String], default: {} },

    instructions: { type: [String], default: [] },

    totalAppointments: { type: Number, default: 0 },
    completed: { type: Number, default: 0 },
    canceled: { type: Number, default: 0 },
},{
    timestamps: true
});

serviceSchema.index({name:"text", shortDescription: "text"});

const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;