import mongoose from "mongoose";
import { Schema } from "mongoose";

const membershipSchema = new Schema({
    membershipfor: 
    {
        type:String,
        enum: ["Tiffin Service", "Saloon Service", "Restaurant Service", "Repair Service", "Cake", "Travels", "Sweets", "Namkeen"],
        required: true
    },
    businessName: {
        type: String,
       
    },
    ownerName:
    { 
        type: String,
        required: true 
    },
    address:{
        type: String,
        requirede: true,
    },
    pincode:{
        type: String,
        required: true
    },
    contactNo: 
    {
         type: String,
        required: true 
    },
    plan: 
    {
        type:String,
        enum: ["Monthly", "Quarterly", "Halfyearly", "Yearly"],
        required: true
    },
    message: 
    {
         type: String,
        required: true 
    },
})
const membershipModel = mongoose.model('membership', membershipSchema);

export default membershipModel;