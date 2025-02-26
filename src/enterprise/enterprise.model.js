import { Schema, model} from "mongoose";

const enterpriseSchema = Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        maxLength: [25, "Name cannot exceed 25 characters"]
    },
    ubication:{
        type: String,
        required: [true, "Ubication is required"],
        maxLength: [70, "Ubication cannot exceed 70 characters"]
    },
    impact:{
        type: String,
        required: true,
        unique:true
    },
    about:{
        type: String,
        required: true,
        unique:true,
        maxLength: [150, "The about information of the enterprise cannot exceed 70 characters"]
    },
    contact:{
        type: String,
        required: [true, "The contact of the enterprise is required"],
        maxLength: [50, "The contact information cannot exceed 50 characters"],
        unique: true
    },
    yearOfCreation:{
        type: Number,
        required: [true, "year of creation is required"]
    },
    category:{
        type:String,
        required: [true, "Category is required"]
    }
},
{
    versionKey: false,
    timeStamps: true
})



export default model("Enterprise", enterpriseSchema)