import mongoose from "mongoose";
import { Schema } from "mongoose";

const contactSchema = new Schema({
    name:
    {
        type: String,
        required: true 
    },
    email:
    {
        type: String,
        required: true
    },
    mobile:
    {
        type: String,
        required: true
    },
    selectMembership: 
    {
        type:String,
        enum: ["Tiffin Service", "Saloon Service", "Restaurant Service", "Repair Service", "Cake", "Travels", "Sweets", "Namkeen"],
        required: true
    },
    message:
    {
        type: String,
        required: true 
    },
})
const contactModel = mongoose.model('contact', contactSchema);

export default contactModel;